
module.exports = function Policy(bucketName) {
    return {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "AddPerm",
                "Effect": "Allow",
                "Principal": {
                    "AWS": [
                        process.env.COMPANY_ROLE,
                        process.env.COMPANY_ROOT
                    ]
                },
                "Action": [
                    "s3:*",
                ],
                "Resource": [`arn:aws:s3:::${bucketName}/*`]
            }
        ]
    };
}