const AWS = require("aws-sdk");

module.exports = async function main(bucketName) {
    try {
        const s3  = new AWS.S3({
            "region": "us-east-1"  
        })

        await s3.deleteBucket({
            Bucket: bucketName
        }).promise();
        console.log(`Bucket ${bucketName} was deleted`);
    } catch (error) {
     console.log(`Error: `, error)   
    }
}