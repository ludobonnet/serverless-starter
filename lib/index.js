/**
 * Lib
 */

// AWS Lambda Proxy Response
module.exports.lambdaProxyResponse = (code, body, contentType = 'application/json', cors = "*") => {
  const response = {
    statusCode: code,
    headers: {
      "Content-Type" : contentType,
      "Access-Control-Allow-Origin" : cors // Required for CORS support to work
    },
    body: JSON.stringify(body),
  };

  return response;
};
