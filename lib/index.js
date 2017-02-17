/**
 * Lib
 */

// AWS Lambda Proxy Response
module.exports.lambdaProxyResponse = (code, body) => {
  const response = {
    statusCode: code,
    body: JSON.stringify(body),
  };

  return response;
};
