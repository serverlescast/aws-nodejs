# Basic cli app for working with lambda 


### Pre-requests
install node-dependecy(dot-env)
```sheell
npm install
```

### Supported env variables

.env
```yaml
```


### Basic app example

```sh
node  main.js list-bucket --bucket=gdo-studio
```

By default the credential are load from file `~/.aws/credentials`
for more info chehc [Cli configure files](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)

or add .env credentials from .envfile


Supported commands:
- none
