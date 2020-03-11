# Basic cli app for working with s3 buckets


### Pre-requests
install node-dependecy(dot-env)
```sheell
npm install
```

### Supported env variables

.env
```yaml
COMPANY_GROUP=arn:aws:iam::976309455378:group/${group}
COMPANY_ROLE=arn:aws:iam::976309455378:role/${role}
COMPANY_ROOT=arn:aws:iam::${aws-id}:root
REGION=us-east-1
ACCESS_KEY_ID={aws_access_key}
SECRET_ACCESS_KEY={aws_secret_access_key}
```


### Basic app example

```sh
node  main.js list-bucket --bucket=gdo-studio
```

By default the credential are load from file `~/.aws/credentials`
for more info chehc [Cli configure files](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)

or add .env credentials from .envfile


Supported commands:
    - create-bucket
    - delete-bucket
    - list-bucket
    - file-upload
    - file-website

Supported policy types:
    - public
    - private by role
