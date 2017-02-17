#Serverless Starter

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

This project is aimed to be a generic boilerplate for the Serverless framework.

##Prerequisites

- [Serverless Framework v1.0+](https://serverless.com/)
- [Nodejs v4.3+](https://nodejs.org/)
- [Setup your AWS credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

##Installation

Install with Serverless
```
serverless install --url https://github.com/ludobonnet/serverless-starter --name projectName
```

or Clone the project from GitHub:
```
git clone https://github.com/ludobonnet/serverless-starter.git projectName
```

Enter the newly created folder:
```
cd projectName
```

Install dependencies
```
npm install
```

Test locally
```
serverless offline start
```

Deploy your functions and endpoints:
```
serverless deploy
```

##Removal

Once you're all done with the serverless-starter project, use the following command to remove the project from AWS completely.

```
serverless remove
```
