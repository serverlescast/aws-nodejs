const aws = require('aws-sdk');
const path = require('path');


const payload = {
    Bucket: '',
    WebsiteConfiguration: {
      ErrorDocument: {
        Key: 'error.html'
      },
      IndexDocument: {
        Suffix: 'index.html'
      },
    }
};

module.exports = async function main(bucket) {

    const s3 = new aws.S3({
        "region": "us-east-1" 
    });

    return await s3.putBucketWebsite({
        Bucket: bucket,
        WebsiteConfiguration: {
          ErrorDocument: {
            Key: 'error.html'
          },
          IndexDocument: {
            Suffix: 'index.html'
          },
        }
    }).promise();
    
}