const AWS = require("aws-sdk");

module.exports = async function main(bucketName, policy) {
    try {

        const s3  = new AWS.S3();

        await s3.createBucket({
            Bucket: bucketName
        }).promise();

        await s3.putBucketPolicy({
            Bucket: bucketName,
            Policy: JSON.stringify(policy)
        }).promise(); 

    } catch (error) {
        console.log('Error state: ', error);
    }
}
