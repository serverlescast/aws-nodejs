const AWS = require("aws-sdk");

module.exports = async function main(bucketName) {
    try {

        const s3  = new AWS.S3({ 
            "region": "us-east-1" 
        });

        const list = await s3.listObjects({
            Bucket: bucketName
        }).promise();
        
        console.log(list);
    } catch (error) {
        console.log('Error state: ', error);
    }
}
