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

// Hàm tạo channel
const {CreateChannelCommand } = require("@aws-sdk/client-ivs"); 

const createChannel = async (name) =>{
    try{
        const data = await ivs.send(new CreateChannelCommand({
            name: name,
            type: "ADVANCED_SD",
            preset: "CONSTRAINED_BANDWIDTH_DELIVERY"
        }));
        console.log("Success")
        console.log(data)
    } catch (err){
        console.log("Error");
        console.log(err)
    }
}
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
const {cognito_identify_provider} = require("./libs/sampleClient.js");

const UserPoolId ='ap-northeast-2_F5v6yidbd'
const ClientId = "6lhm3fo132s56tfs9k4s7fc38h"

const TenDangNhap = "nghiemsp123"
const MatKhau = "AlanTuring49"

//const AccessToken = 'eyJraWQiOiJ3c3FOa3NPVU9QNTZNUUVsdXFcL1lIMlR2WXRuQnF0ZitcL1ZkQmxHdTZMMmM9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJlMGMzMDdlNi0xZDJmLTRjMzYtOTRkMy04MWRkMjc4NTM3NGIiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbVwvYXAtbm9ydGhlYXN0LTJfRjV2NnlpZGJkIiwiY2xpZW50X2lkIjoiNmxobTNmbzEzMnM1NnRmczlrNHM3ZmMzOGgiLCJvcmlnaW5fanRpIjoiZTdjNmQ1OTUtN2U1ZC00N2IzLWE4OTQtMTY3OWViNGI3MGM1IiwiZXZlbnRfaWQiOiJkZjVmNTI1Yy04NDAzLTRjMDktOGQwYy1kOWJiYzdhYmYzZjAiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjkwNzA5MTAxLCJleHAiOjE2OTA3MTI3MDEsImlhdCI6MTY5MDcwOTEwMSwianRpIjoiZTk0ZjEwZDQtMTdlYS00ZGI2LWIyOWQtNTUxMmE4Nzg5YTJhIiwidXNlcm5hbWUiOiJuZ2hpZW1zcDEyMyJ9.yOOv2aqa9chNVKaPEL92WrxAypEonRFHZqJTxvn0m9hZKkSBh1jcWUYVmYrU_RcK7TmXl4pXNNuYRDVjNaRsiMEdGk1_2lbmVknKiSlpv1EAkJOFZE-kxIApH3r6B_k4HFAehyWYd7u9duzvEY32WvDnrKIk9ihEyLwi6S3oTK5Q5f4iY6ifbprNniBQw0OBHYk4aCu1VPs6Cv92kqrwOwnu57nuA184vYav4STXB4yMSTakymeCIdSG2Iu_PQykHgoQXLN1vcGUzKzbO609_zboYVvk46me0HVL5FLjI7ea1FKlyJJFFthn3r6MWhKvcwWr53mqNsvNO_Bpnpekfw'
// const {GetItemCommand} = require("@aws-sdk/client-dynamodb")
const {SignUpCommand} = require("@aws-sdk/client-cognito-identity-provider")

const SignUp = async(Username, Password, email, birthdate, name) => {
    try{
        const data = await cognito_identify_provider.send(new SignUpCommand(
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

//SignUp(TenDangNhap, MatKhau, "nghiemgankteam@gmail.com", "04-09-2003", "NghiemVipProPlayer")

const {ConfirmSignUpCommand} = require("@aws-sdk/client-cognito-identity-provider")

const ConfirmSignUp = async(Username, ConfirmationCode) => {
    try{
        const data = await cognito_identify_provider.send(new ConfirmSignUpCommand(
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
// Đăng nhập
const {InitiateAuthCommand} = require("@aws-sdk/client-cognito-identity-provider")

const Login = async(UserName, Password) => {
    try{
        const data = await cognito_identify_provider.send(new InitiateAuthCommand({
            AuthFlow:"USER_PASSWORD_AUTH",
            AuthParameters:{
                "PASSWORD":Password,
                "USERNAME":UserName,
            },
            ClientId: ClientId
        }));
        console.log('Success');
        //console.log(data);
        return data.AuthenticationResult.IdToken
    }catch (err){
        console.log("Error");
        console.log(err)
    }
};

//Đổi mật khẩu 
const {ChangePasswordCommand} = require("@aws-sdk/client-cognito-identity-provider")

const ChangePassword = async(PreviousPassword, ProposedPassword, AccessToken) => {
    try{
        const data = await cognito_identify_provider.send(new ChangePasswordCommand({
            PreviousPassword: PreviousPassword,
            ProposedPassword: ProposedPassword,
            AccessToken: AccessToken
        }));
        console.log("Success");
        console.log(data);
    }catch (err){
        console.log("Error")
        console.log(err)
    }
}

const {cognito_identify} = require("./libs/sampleClient.js");

const {GetCredentialsForIdentityCommand} = require("@aws-sdk/client-cognito-identity")

const GetCredentialsForIdentity = async(IdentityId, IdToken) => {
    try{
        const data = await cognito_identify.send(new GetCredentialsForIdentityCommand({
            IdentityId: IdentityId,
            Logins:{
                "cognito-idp.ap-northeast-2.amazonaws.com/ap-northeast-2_F5v6yidbd": IdToken
            }
        }));
        console.log("Success")
        console.log(data)
    }
    catch (err){
        console.log("Error")
        console.log(err)
    }
}

//GetCredentialsForIdentity()

const {GetIdCommand} = require("@aws-sdk/client-cognito-identity")

const GetId = async(IdToken) => {
    try{
        const data = await cognito_identify.send(new GetIdCommand({
            IdentityPoolId: "ap-northeast-2:f35b46f2-6d94-4798-b40d-3338d6136467",
            Logins:{
                "cognito-idp.ap-northeast-2.amazonaws.com/ap-northeast-2_F5v6yidbd": IdToken
            }
        }));
        console.log("Success")
        //console.log(data)
        return data.IdentityId
    }
    catch (err){
        console.log("Error")
        console.log(err)
    }
}

const TestDangNhap = async() => {
    var a = await Login(TenDangNhap, MatKhau)

    var b = await GetId(a)
    GetCredentialsForIdentity(b, a)

}

