const AWS = require('aws-sdk');
const fs  = require('fs');

const dyn = new AWS.DynamoDB({
    region: "us-east-1",
    endpoint: new AWS.Endpoint('http://localhost:8000')
});

function parse(args, state) {
        
    return args.reduce((acc, slice) => {
        const item = slice.split("=");

        const key = item[0];
        const value= item[1];
        acc[key] = value;

        return acc;

    }, state);
}


class DYNAMODB_COMMAND {
    static dblist = 'db-list';
    static dbcreate = 'db-create';
    static dbpost = 'db-post'
    static dbget = 'db-get'
}

async function main(cmd, args) {
    try {
        switch (cmd) {
            case DYNAMODB_COMMAND.dblist: {
                const list = await dyn.listTables().promise();
                console.log(list);
                return;
            }
            case DYNAMODB_COMMAND.dbcreate: {
                const file = fs.readFileSync(args.schema, 'utf8');
                const config = JSON.parse(file);
                console.log(config);
                const table = await dyn.createTable(config).promise();
                console.log('Table was created:', JSON.stringify(table));
                return;
            }

            case DYNAMODB_COMMAND.dbpost: {
                if (!args.table) {
                    throw new Error('Table not provided')
                }

                // Create better validation
                // how to check for :
                const data = args.data
                    .split(',')
                    .reduce((acc, item) => {
                        const args = item.split(':');
                        acc[args[0]] = args[1];
                        return acc;
                    },{});

                
                const callback = require(args.model);
                const model = callback(args.table, data);
                
                return await dyn.putItem(model).promise();

            }
            case DYNAMODB_COMMAND.dbget: {

                const data = await dyn.query({
                    TableName: args.table,
                    ExpressionAttributeValues: {
                        ':s': {N: '001'},
                      },
                    KeyConditionExpression: 'CUSTOMER_ID = :s',
                    ProjectionExpression: 'CUSTOMER_ID, CUSTOMER_NAME',
                  }).promise();

                console.log(data);
            }
        }  
    } catch (error) {
        console.log(error);
    }
}


const state = {
    schema: null,
    table:  null,
    data: null,
    model: null,
}

const [,, cmd, ...args] = process.argv;

main(cmd, parse(args, state))


// dyn.listTables(function (err, data)
// {
//    console.log('listTables',err,data);
// });