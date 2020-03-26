import { Lambda } from 'aws-sdk';

export default async function main(functionName, regions = []) {
    try {

        const promiseMap = regions.map(async (region) => {
            const lambda = new Lambda({ region: region });
    
            return await lambda.deleteFunction({
                FunctionName: functionName
            }).promise();
        });

        return Promise.all(promiseMap);

    } catch (error) {
        console.log('Error:', error);
    }
}