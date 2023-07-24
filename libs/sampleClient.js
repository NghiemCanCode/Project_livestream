const { IAM } = require("@aws-sdk/client-iam");
//const {} = require("@aws-sdk/client-dynamo")
const {Ivs } = require("@aws-sdk/client-ivs");
const REGION = "ap-northeast-2";
const AWS_ACCESS_KEY = "AKIAXWXY5Z7ZXVRWYA4O";
const AWS_SERRECT_KEY = "6uZENkZK2ibNaxiQh3Cg61O35g4EGhKdSpRGWnSK"

const ivs = new Ivs({ REGION, 
    AWS_ACCESS_KEY,
    AWS_SERRECT_KEY});
module.exports = {ivs}

const dynamo = new ({
    AWS_ACCESS_KEY, A
});