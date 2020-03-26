


running local dynamodb version
```sh 
curl -O https://s3-us-west-2.amazonaws.com/dynamodb-local/dynamodb_local_latest.zip
unzip dynamodb_local_latest.zip
java -Djava.library.path=./DynamoDBLocal_lib/ -jar DynamoDBLocal.jar
```


helper function for running dynamo localy
```
function dynamodb
    cd ~/Documents/dynamodb
    java -Djava.library.path=./DynamoDBLocal_lib/ -jar DynamoDBLocal.jar
end
```


```
    "KeySchema": [
        {
            "AttributeName": "CUSTOMER_ID",
            "KeyType": "NUMBER"
        },
        {
            "AttributeName": "CUSTOMER_NAME",
            "KeyType": "STRING"
        },
        {
            "AttributeName": "TAGS",
            "KeyType": "SET"
        }
    ],```

### Supported dynamodb attribute types

Number -> N
String -> S
Boolean -> BOOL
Byte, byte -> B
Date -> S
Calendar -> N
Set -> SS, NS, BS
List -> L
Map -> M
NULL -> NULL

### Resources
[Dynamodb attribute values](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_AttributeValue.html)
[Dynamodb local for desktop development](https://aws.amazon.com/blogs/aws/dynamodb-local-for-desktop-development/)
[Dynamo resources](https://aws.amazon.com/dynamodb/resources/)
[Dynamodb query db](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html)