const aws = require('aws-sdk');
const path = require('path');

module.exports = async function main(bucket, name, file, meta = {}) {

    const extn = path.extname(name);

    let contentType = 'application/octet-stream';
    if (extn == '.html') contentType = "text/html";
    if (extn == '.css') contentType = "text/css";
    if (extn == '.js') contentType = "application/javascript";

    const s3 = new aws.S3({
        "region": "us-east-1" 
    });

    console.log(contentType);

    return await s3.upload({
        Bucket: bucket,
        ContentType: contentType,
        Key: name,
        Body: file,
        ACL: "public-read",
    }).promise();
    
}