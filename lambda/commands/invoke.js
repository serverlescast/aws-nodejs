import { Lambda } from 'aws-sdk'; 

export default async function main(FunctionName, payload, regions) {
    try {

        const promiseMap = regions.map(async (region) => {
            const lambda = new Lambda({ region });

            return await lambda.invoke({
                FunctionName,
                Payload: JSON.stringify(payload)
            }).promise();
        });
        
        return Promise.all(promiseMap);
        // const payload  = JSON.parse(response.Payload);
        // console.log(Buffer.from(payload.data).toString());
    } catch (error) {
        console.log('Error:', error);
    }
}