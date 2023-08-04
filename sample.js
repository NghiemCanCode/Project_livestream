const {ivs, s3} = require("./libs/sampleClient.js");

// Hàm lấy channel

const {GetChannelCommand} = require("@aws-sdk/client-ivs");

const GetChannel = async (arn) => {
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

const CreateChannel = async (name) =>{
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

const GetStreamList = async (health, maxResults) => {
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

const GetHoSoNguoiDung = async(Key) =>{
    try{
        const data = await dynamodb.send(new GetItemCommand(
            {
                "Key":{
                    "TenDangNhap": {
                        "S": Key
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

const {PutItemCommand} = require("@aws-sdk/client-dynamodb")

const CreateHoSoNguoiDung = async() =>{
    try{
        const data = await dynamodb.send(new PutItemCommand(
            {
                "Item":{
                    "TenDangNhap":{
                        "S":"NghiemHacker"
                    },
                    "AnhBiaARN":{
                        "S":"meme.jpg"
                    },
                    "AnhDaiDienARN":{
                        "S":"meme.jpg"
                    },
                    "DangKi":{
                        "L":[
                            {
                                "M":{
                                    "GoiDangKi":{
                                        "S":"1T"
                                    },
                                    "NgayHetHan":{
                                        "S":"1-1-2024"
                                    },
                                    "StreamARN":{
                                        "S":"sdk"
                                    },
                                    "Streamer":{
                                        "S":"Cường 7Núi"
                                    },
                                    "ThoiGianDangKi":{
                                        "S":"8-3-2023"
                                    }
                                }
                            }
                        ]
                    },
                    "DanhSachTheoDoi":{
                        "L": [
                            {
                                "M":{
                                    "NgayTheoDoi":{
                                        "S":"20-11-2012"
                                    },
                                    "StreamARN":{
                                        "S":"dsd"
                                    },
                                    "TenDangNhapStreamer":{
                                        "S":"Cường 7Núi"
                                    }
                                }
                            }
                        ]
                    },
                    "GioiThieu":{
                        "S":"Bo may pro"
                    },
                    "Gmail":{
                        "S":"nghiemlee493@gmail.com"
                    },
                    "Link":{
                        "L":[
                            {
                                "M":{
                                    "Link":{
                                        "S":"facebook.com/luis.sofm"
                                    },
                                    "SoTT":{
                                        "N":"0"
                                    },
                                    "TenLink":{
                                        "S":"Sofm"
                                    }
                                }
                            }
                        ]
                    },
                    "SoNguoiDangKy":{
                        "N":"0"
                    },
                    "SoNguoiTheoDoi":{
                        "N":"0"
                    },
                    "TenKenh":{
                        "S":"Nghiem_ProVCL"
                    },
                    "TheLoaiMau":{
                        "S":"JustChatting"
                    },
                    "Tien":{
                        "N":"0"
                    },
                    "TieuDeMacDinh":{
                        "S":"Day la Kenh Tau Hai"
                    },
                    "TrangThai":{
                        "B":"True"
                    }
                },
                "ReturnConsumedCapacity":"Total",
                "TableName":"HoSoNguoiDung"
            }
        ));
        console.log("Success")
        console.log(data)
    }catch(err){
        console.log("Error")
        console.log(err)
    }
}
//
const {UpdateItemCommand} = require("@aws-sdk/client-dynamodb")

const UpdateHoSoNguoiDung = async() =>{
    try{
        const data = await dynamodb.send(new UpdateItemCommand(
            {
            }
        ));
        console.log("Success")
        console.log(data)
    }
    catch(err){
        console.log("Error")
        console.log(err)
    }
}
//
const {cognito_identify_provider} = require("./libs/sampleClient.js");

const UserPoolId ='ap-northeast-2_F5v6yidbd'
const ClientId = "6lhm3fo132s56tfs9k4s7fc38h"

const TenDangNhap = "nghiemsp123"
const MatKhau = "AlanTuring49"
// Đăng ký
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
//Sign Out

const {GlobalSignOutCommand} = require("@aws-sdk/client-cognito-identity-provider")

const SignOut = async (AccessToken) => {
    try{
        const data = await cognito_identify_provider.send(new GlobalSignOutCommand({
            AccessToken: AccessToken
        }));
    }
    catch(err){
        console.log("Error");
        console.log(err)
    }
}
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
        console.log(data);
        return data.AuthenticationResult
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

const {PutObjectCommand} = require("@aws-sdk/client-s3")

const UploadImageToS3 = async() =>{
    try{
        const data = await s3.send(new PutObjectCommand({
            Body:"FB_IMG_1584438546061.jpg",
            Bucket:"projectlivestreamdb",
            Key:"Meme.jpg"
        }));
        console.log("Success")
        console.log(data)       
    }
    catch (err){
        console.log("Error")
        console.log(err)
    }
}

const CreateTheLoaiGame = async(TenGame, HinhARN) =>{
    try{
        const data = await dynamodb.send(new PutItemCommand({
            Item:{
                "ID TL":{
                    "S": "1" 
                },
                "TenGame":{
                    "S": TenGame
                },
                "HinhARN":{
                    "S": HinhARN
                }
            },
            TableName:"TheLoaiGame"
        }));
        console.log("Success")
        console.log(data)
    }
    catch(err){
        console.log("Error")
        console.log(err)
    }
}

const UpdateTheLoaiGame = async() =>{
    try{
        const data = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "ID TL":{
                    "S": "1"
                }
            },
            ExpressionAttributeNames:{
                "#A":"TenGame"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "S":"Dota 3"
                }
            },
            UpdateExpression:"SET #A = :a",
            TableName:"TheLoaiGame",
        }));
        console.log("Success"),
        console.log(data)
    }
    catch(err){
        console.log("Error")
        console.log(err)
    }
}

module.exports = {GetChannel, CreateChannel, SignOut,
     GetStreamList, GetHoSoNguoiDung, CreateHoSoNguoiDung, 
     UpdateHoSoNguoiDung, SignUp, ConfirmSignUp,
     Login, ChangePassword, GetCredentialsForIdentity,
     GetId, UploadImageToS3, CreateTheLoaiGame, UpdateTheLoaiGame}

