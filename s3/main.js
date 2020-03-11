require('dotenv').config()
const fs = require('fs');
const { S3_PERMISSIONS, policySwitch } = require('./policies');
const { parse, S3_COMMAND } = require('./util');

// s3 commnads
const CreateBucket = require('./commands/create');
const ListBucket = require('./commands/list');
const UploadFile = require('./upload');
const DeleteFile = require('./commands/delete');
const WebsiteFile = require('./commands/website');


function main(cmd, args) {
    switch (cmd) {
        case S3_COMMAND.create: {
            console.log("Create Bucket");
            const policy = policySwitch(args.type)(args.bucket);
            return CreateBucket(args.bucket, policy);
        }
        case S3_COMMAND.list: {
            console.log("Uplaod", args);
            return ListBucket(args.bucket);
        }
        case S3_COMMAND.delete:  {
            console.log("Uplaod", args);
            return DeleteFile(args.bucket);
        }
        case S3_COMMAND.upload:  {
            console.log("Uplaod", args);
            if (!args.file) {
                throw new Error("File was not provided");
            }

            const file = fs.createReadStream(args.file);
            return UploadFile(args.bucket, args.file, file);
            
        }
        case S3_COMMAND.website: {
            console.log('Deploy website');

            const metadata = {
                'Content-Type': 'text/html'
            }

            const f1 = fs.readFileSync('./index.html');
            const f2 = fs.readFileSync('./error.html');

            return Promise.all([
                UploadFile(args.bucket, 'index.html', f1),
                UploadFile(args.bucket, 'error.html', f2)
            ]).then(_  => {
            
                return WebsiteFile(args.bucket);
            });
        }
        default: {
            throw new Error('Command not supported');
        }
    }
}

const storageDefault = {
    type: S3_PERMISSIONS.company,
    bucket: bucket,
    file: null,
    region: "us-east-1" 
}

const [,, cmd, ...args] = process.argv;

if (!cmd) {
    throw new Error('Command was not provided');
}

console.log(parse(args, storageDefault))

// main(cmd, parse(args, storageDefault))
// .catch(console.log)
