# TypeScript Points AWS Lambda

This project was made to experiment with TypeScript and AWS Lambda.

## prerequisites
- aws-sdk
- `npm install --save-dev typescript @types/aws-lambda @types/node`

## building
Run 
```
    npm install
    npm run build
```

This will create a `dist` folder with the transpiled code to NodeJs. esbuild produces one JavaScript file with all dependencies. This is the only file that you need to add to the .zip archive.
## local testing 
For unit testing:
run 
```
    npm test
```
For testing integrally without deploying you require to install Docker.

run 
``` 
    sam build
```
Then 
```
    sam local invoke -e events/event.json
```
## deploy to aws
run
```
aws lambda create-function --function-name hello-world --runtime "nodejs16.x" --role arn:aws:iam::123456789012:role/lambda-ex --zip-file "fileb://dist/index.zip" --handler index.handler
```

 Replace the role text with the Amazon Resource Name (ARN) of your execution role.