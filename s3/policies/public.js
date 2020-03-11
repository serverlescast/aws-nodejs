// Grant access to anonymous user 
// to read bucket files
module.exports = function Policy(bucketName) {
    return {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "AddPerm",
                "Effect": "Allow",
                "Principal": "*",
                "Action": ["s3:GetObject"],
                "Resource": [`arn:aws:s3:::${bucketName}/*`]
            }
        ]
    };
}