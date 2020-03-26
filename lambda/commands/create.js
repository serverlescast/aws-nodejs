const AWS = require('aws-sdk');
const fs = require('fs');

// reafactor example for easier consumption
function deployToRegion(FunctionName, region, ZipFile) {
    
    const lambda = new AWS.Lambda({
        region: region,
    });

    return lambda.createFunction({
        FunctionName: FunctionName,
        Handler: 'index.handler',
        Runtime: 'nodejs12.x',
        Description: "Ping function for checking response time",
        Role: "arn:aws:iam::${id}:role/service-role/lambda_basic_execution",
        Code: {
            ZipFile
        },
    }).promise();
}

export default function main(functionName, regions = [], dirname) {
    try {

        const zipDir = fs.readFileSync(`${dirname}/functions/main.zip`);
        const promiseMap = regions.map(async (region) => {
            return await deployToRegion(functionName, region, zipDir)
        });

        return Promise.all(promiseMap);

    } catch (error) {
        console.log('Error:', error);
    } 
}