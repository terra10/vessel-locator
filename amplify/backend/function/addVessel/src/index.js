/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiVessellocatorGraphQLAPIIdOutput = process.env.API_VESSELLOCATOR_GRAPHQLAPIIDOUTPUT
var apiVessellocatorGraphQLAPIEndpointOutput = process.env.API_VESSELLOCATOR_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */
const appsyncUrl = process.env.API_VESSELLOCATOR_GRAPHQLAPIENDPOINTOUTPUT;
const https = require('https');
const AWS = require("aws-sdk");
const urlParse = require("url").URL;
const region = process.env.REGION;
const graphqlQuery = require('./query.js').mutation;
const apiKey = process.env.API_KEY;


exports.handler = async (item) => {
  const req = new AWS.HttpRequest(appsyncUrl, region);
  const uri = new urlParse(appsyncUrl);

  req.method = "POST";
  req.headers.host = uri.host;
  req.headers["Content-Type"] = "application/json";
  req.body = JSON.stringify({
    query: graphqlQuery,
    operationName: "createVessel",
    variables: item
  });

  if (apiKey) {
    req.headers["x-api-key"] = apiKey;
  } else {
    const signer = new AWS.Signers.V4(req, "appsync", true);
    signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());
  }

  const data = await new Promise((resolve, reject) => {
    const httpRequest = https.request({ ...req, host: uri.host }, (result) => {
      result.on('data', (data) => {
        resolve(JSON.parse(data.toString()));
      });
    });

    httpRequest.write(req.body);
    httpRequest.end();
  });

  return {
    statusCode: 200,
    body: data
  };
};
