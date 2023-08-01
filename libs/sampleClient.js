const { IAM } = require("@aws-sdk/client-iam");

const {Ivs } = require("@aws-sdk/client-ivs");
const REGION = "ap-northeast-2";
const AWS_ACCESS_KEY = "AKIAXWXY5Z7ZXVRWYA4O";
const AWS_SERRECT_KEY = "6uZENkZK2ibNaxiQh3Cg61O35g4EGhKdSpRGWnSK"

const ivs = new Ivs({ REGION, 
    AWS_ACCESS_KEY,
    AWS_SERRECT_KEY});

//
const {DynamoDB} = require("@aws-sdk/client-dynamodb")

const dynamodb = new DynamoDB({REGION, AWS_ACCESS_KEY, AWS_SERRECT_KEY})
//
const {CognitoIdentityProviderClient} = require("@aws-sdk/client-cognito-identity-provider")

const cognito_identify_provider = new CognitoIdentityProviderClient({REGION, AWS_ACCESS_KEY, AWS_SERRECT_KEY});

//
const {CognitoIdentityClient} = require("@aws-sdk/client-cognito-identity")

const cognito_identify = new CognitoIdentityClient({REGION})

module.exports = {dynamodb, ivs, cognito_identify_provider, cognito_identify}