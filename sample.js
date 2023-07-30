const {ivs} = require("./libs/sampleClient.js");

// Hàm lấy channel

const {GetChannelCommand} = require("@aws-sdk/client-ivs");

const getChannel = async (arn) => {
    try {
        const data = await ivs.send(new GetChannelCommand({
            arn: arn
        }));
        console.log("Success", data.channel.playbackUrl);
        return data;
    } catch (err){
        console.log("Error",err);
    }
};

// Hàm lấy danh sách channel
const {ListStreamsCommand} = require("@aws-sdk/client-ivs");

const getStreamList = async (health, maxResults) => {
    try{
        const data = await ivs.send(new ListStreamsCommand({
            filterBy: {
                health: health
            },
            maxResults: maxResults
        }));
        console.log("Success");
        console.log(data)
        return data;
    } catch (err){
        console.log("Error",err);
    }
};
//
const {dynamodb} = require("./libs/sampleClient.js");

const {GetItemCommand} = require("@aws-sdk/client-dynamodb")

const getHoSoNguoiDung = async() =>{
    try{
        const data = await dynamodb.send(new GetItemCommand(
            {
                "Key":{
                    "TenDangNhap": {
                        "S": "NghiemStreamer"
                    }
                },
                "TableName":"HoSoNguoiDung"
            }
        ));
        console.log('Success');
        console.log(data);
    } catch (err){
        console.log("Error");
        console.log(err)
    }
};
//
const {cognito_identify} = require("./libs/sampleClient.js");

const UserPoolId ='ap-northeast-2_F5v6yidbd'
const ClientId = "6lhm3fo132s56tfs9k4s7fc38h"

// const {GetItemCommand} = require("@aws-sdk/client-dynamodb")
const {SignUpCommand} = require("@aws-sdk/client-cognito-identity-provider")

const SignUp = async(Username, Password, email, birthdate, name) => {
    try{
        const data = await cognito_identify.send(new SignUpCommand(
            {            
                ClientId: ClientId,
                Password:Password,
                Username:Username,
                UserAttributes: [
                    {
                        Name:"email",
                        Value:email
                    },
                    {
                        Name:"birthdate",
                        Value:birthdate
                    },
                    {
                        Name:"name",
                        Value:name
                    }
                ]
            }
        ));
        console.log('Success');
        console.log(data);
    }catch (err){
        console.log("Error");
        console.log(err)
    }
};

const {ConfirmSignUpCommand} = require("@aws-sdk/client-cognito-identity-provider")

const ConfirmSignUp = async(Username, ConfirmationCode) => {
    try{
        const data = await cognito_identify.send(new ConfirmSignUpCommand(
            {
                ClientId: ClientId,
                Username: Username,
                ConfirmationCode: ConfirmationCode,
            }
        ));
        console.log('Success');
        console.log(data);
    }catch (err){
        console.log("Error");
        console.log(err)
    }
};

const {InitiateAuthCommand} = require("@aws-sdk/client-cognito-identity-provider")

const Login = async(UserName, Password) => {
    try{
        const data = await cognito_identify.send(new InitiateAuthCommand({
            AuthFlow:"USER_PASSWORD_AUTH",
            AuthParameters:{
                "PASSWORD":Password,
                "USERNAME":UserName,
            },
            ClientId: ClientId
        }));
        console.log('Success');
        console.log(data);
    }catch (err){
        console.log("Error");
        console.log(err)
    }
};
//ConfirmSignUp()
//Login()