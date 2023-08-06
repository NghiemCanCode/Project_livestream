const {ivs, s3} = require("./libs/sampleClient.js");
const server = "rtmps://416fc24342ee.global-contribute.live-video.net:443/app/"
// Hàm lấy channel

const {GetChannelCommand, StreamHealth} = require("@aws-sdk/client-ivs");

const GetChannel = async (arn) => {
    try {
        const data = await ivs.send(new GetChannelCommand({
            arn: arn
        }));
        console.log("Success");
        console.log(data)
        return data;
    } catch (err){
        console.log("Error",err);
    }
};

// Lấy channel

const {GetStreamKeyCommand} = require("@aws-sdk/client-ivs");

const GetStreamKey = async(arn) =>{
    try{
        const data = await ivs.send(new GetStreamKeyCommand({
            arn:arn
        }));
        console.log(data)
        return data;
    }
    catch(err){
        console.log("Error")
        console.log(err)
    }
}
// Tìm Channel bằng tên
const {ListChannelsCommand} = require("@aws-sdk/client-ivs"); 

const GetChannelByName = async(TenDangNhap) =>{
    try{
        const data = await ivs.send(new ListChannelsCommand({
            filterByName:TenDangNhap
        }));
        console.log("Sucess")
        console.log(data)
        return data
    } catch(err){
        console.log("Error");
        console.log(err)
    }
}
// Hàm tạo channel
const {CreateChannelCommand } = require("@aws-sdk/client-ivs"); 

const CreateChannel = async (name) =>{
    try{
        const data = await ivs.send(new CreateChannelCommand({
            name: name,
            type: "ADVANCED_SD",
            preset: "CONSTRAINED_BANDWIDTH_DELIVERY",
            recordingConfigurationArn:"arn:aws:ivs:ap-northeast-2:529876766707:recording-configuration/Lm0KLNiBHvxx"
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
const {PutItemCommand} = require("@aws-sdk/client-dynamodb")
const {UpdateItemCommand} = require("@aws-sdk/client-dynamodb")
const {DeleteItemCommand} = require("@aws-sdk/client-dynamodb")
//CRUD HoSoNguoiDung
//
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
const CreateHoSoNguoiDung = async(TenDangNhap, Gmail) =>{
    try{
        const data = await dynamodb.send(new PutItemCommand(
            {
                "Item":{
                    "TenDangNhap":{
                        "S":TenDangNhap
                    },
                    "Gmail":{
                        "S":Gmail
                    }
                },
                "TableName":"HoSoNguoiDung", 
                "ConditionExpression":"attribute_not_exists(#TenDangNhap)",
                "ExpressionAttributeNames":{
                    "#TenDangNhap":"TenDangNhap"
                }
            }
        ));

        const data_2 = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "TenDangNhap":{
                    "S":TenDangNhap
                },
            },
            ExpressionAttributeNames:{
                "#A":"AnhBiaARN",
                "#B":"AnhDaiDienARN"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "S":"-1"
                },
                ":b":{
                    "S":"-1"
                }
            },
            UpdateExpression:"SET #A= :a, #B= :b",
            TableName:"HoSoNguoiDung"
            
        }));
        const data_3 = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "TenDangNhap":{
                    "S":TenDangNhap
                },
            },
            ExpressionAttributeNames:{
                "#A":"DangKi",
                "#B":"DanhSachTheoDoi"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "L":[]
                },
                ":b":{
                    "L":[]
                }
            },
            UpdateExpression:"SET #A= :a, #B= :b",
            TableName:"HoSoNguoiDung"
        }));
        const data_4 = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "TenDangNhap":{
                    "S":TenDangNhap
                },
            },
            ExpressionAttributeNames:{
                "#A":"GioiThieu",
                "#B":"Link"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "S":"-1"
                },
                ":b":{
                    "L":[]
                }
            },
            UpdateExpression:"SET #A= :a, #B= :b",
            TableName:"HoSoNguoiDung"
        }));
        const data_5 = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "TenDangNhap":{
                    "S":TenDangNhap
                },
            },
            ExpressionAttributeNames:{
                "#A":"SoNguoiDangKi",
                "#B":"SoNguoiTheoDoi"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "N":"0"
                },
                ":b":{
                    "N":"0"
                }
            },
            UpdateExpression:"SET #A= :a, #B= :b",
            TableName:"HoSoNguoiDung"
        }));
        const data_6 = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "TenDangNhap":{
                    "S":TenDangNhap
                },
            },
            ExpressionAttributeNames:{
                "#A":"TenKenh",
                "#B":"TheLoaiMau"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "S":TenDangNhap
                },
                ":b":{
                    "S":"-1"
                }
            },
            UpdateExpression:"SET #A= :a, #B= :b",
            TableName:"HoSoNguoiDung"
        }));
        const data_7 = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "TenDangNhap":{
                    "S":TenDangNhap
                },
            },
            ExpressionAttributeNames:{
                "#A":"Tien",
                "#B":"TieuDeMacDinh"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "N":"0"
                },
                ":b":{
                    "S":"-1"
                }
            },
            UpdateExpression:"SET #A= :a, #B= :b",
            TableName:"HoSoNguoiDung"
        }));
        const data_8 = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "TenDangNhap":{
                    "S":TenDangNhap
                },
            },
            ExpressionAttributeNames:{
                "#A":"TrangThai"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "B":"True"
                }
            },
            UpdateExpression:"SET #A= :a",
            TableName:"HoSoNguoiDung"
        }));
        console.log("Success")
    }catch(err){
        console.log("Error")
        console.log(err)
    }
}
//
const UpdateHoSoNguoiDung = async(TenDangNhap, AnhBiaARN, AnhDaiDienARN, DangKi, DanhSachTheoDoi, GioiThieu, Gmail, 
    Link, SoNguoiDangKi, SoNguoiTheoDoi, TenKenh, TheLoaiMau, Tien, TieuDeMacDinh, TrangThai) =>{
    try{
        const data_2 = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "TenDangNhap":{
                    "S":TenDangNhap
                },
            },
            ExpressionAttributeNames:{
                "#A":"AnhBiaARN",
                "#B":"AnhDaiDienARN"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "S":AnhBiaARN
                },
                ":b":{
                    "S":AnhDaiDienARN
                }
            },
            UpdateExpression:"SET #A= :a, #B= :b",
            TableName:"HoSoNguoiDung"
            
        }));
        const data_3 = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "TenDangNhap":{
                    "S":TenDangNhap
                },
            },
            ExpressionAttributeNames:{
                "#A":"DangKi",
                "#B":"DanhSachTheoDoi"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "L":DangKi
                },
                ":b":{
                    "L":DanhSachTheoDoi
                }
            },
            UpdateExpression:"SET #A= :a, #B= :b",
            TableName:"HoSoNguoiDung"
        }));
        const data_4 = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "TenDangNhap":{
                    "S":TenDangNhap
                },
            },
            ExpressionAttributeNames:{
                "#A":"GioiThieu",
                "#B":"Link"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "S":GioiThieu
                },
                ":b":{
                    "L":Link
                }
            },
            UpdateExpression:"SET #A= :a, #B= :b",
            TableName:"HoSoNguoiDung"
        }));
        const data_5 = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "TenDangNhap":{
                    "S":TenDangNhap
                },
            },
            ExpressionAttributeNames:{
                "#A":"SoNguoiDangKi",
                "#B":"SoNguoiTheoDoi"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "N":SoNguoiDangKi
                },
                ":b":{
                    "N":SoNguoiTheoDoi
                }
            },
            UpdateExpression:"SET #A= :a, #B= :b",
            TableName:"HoSoNguoiDung"
        }));
        const data_6 = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "TenDangNhap":{
                    "S":TenDangNhap
                },
            },
            ExpressionAttributeNames:{
                "#A":"TenKenh",
                "#B":"TheLoaiMau"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "S":TenKenh
                },
                ":b":{
                    "S":TheLoaiMau
                }
            },
            UpdateExpression:"SET #A= :a, #B= :b",
            TableName:"HoSoNguoiDung"
        }));
        const data_7 = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "TenDangNhap":{
                    "S":TenDangNhap
                },
            },
            ExpressionAttributeNames:{
                "#A":"Tien",
                "#B":"TieuDeMacDinh"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "N":Tien
                },
                ":b":{
                    "S":TieuDeMacDinh
                }
            },
            UpdateExpression:"SET #A= :a, #B= :b",
            TableName:"HoSoNguoiDung"
        }));
        const data_8 = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "TenDangNhap":{
                    "S":TenDangNhap
                },
            },
            ExpressionAttributeNames:{
                "#A":"TrangThai"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "B":TrangThai
                }
            },
            UpdateExpression:"SET #A= :a",
            TableName:"HoSoNguoiDung"
        }));
        console.log("Success")
        console.log(data)
    }
    catch(err){
        console.log("Error")
        console.log(err)
    }
}
//CRUD TheLoaiGame
//
const GetTheLoaiGame = async(Key) => {
    try{
        const data = await dynamodb.send(new GetItemCommand(
            {
                "Key":{
                    "ID TL": {
                        "S": Key
                    }
                },
                "TableName":"TheLoaiGame"
            }
        ));
        console.log('Success');
        console.log(data);
        return data;
    } catch (err){
        console.log("Error");
        console.log(err)
    }
};
//
const CreateTheLoaiGame = async(ID, TenGame, HinhARN) =>{
    try{
        const data = await dynamodb.send(new PutItemCommand({
            Item:{
                "ID TL":{
                    "S": ID 
                },
                "TenGame":{
                    "S": TenGame
                },
                "HinhARN":{
                    "S": HinhARN
                }
            },
            TableName:"TheLoaiGame",
            ConditionExpression: "attribute_not_exists(#ID)",
            ExpressionAttributeNames:{
                "#ID":"ID TL"
            }
        }));
        console.log("Success")
        console.log(data)
    }
    catch(err){
        console.log("Error")
        console.log(err)
    }
}
//
const UpdateTheLoaiGame = async(ID, TenGame, HinhARN) =>{
    try{
        const data = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "ID TL":{
                    "S": ID
                }
            },
            ExpressionAttributeNames:{
                "#A":"TenGame",
                "#B":"HinhARN"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "S":TenGame
                },
                ":b":{
                    "S":HinhARN
                }
            },
            UpdateExpression:"SET #A = :a, #B = :b",
            TableName:"TheLoaiGame"
        }));
        console.log("Success"),
        console.log(data)
    }
    catch(err){
        console.log("Error")
        console.log(err)
    }
}
//

//CRUD LoiViPham
const GetLoiViPham = async() =>{
    try{
        const data = await dynamodb.send(new GetItemCommand({
            "Key":{
                "IDLoi":{
                    "S":"L01"
                }
            }, 
            "TableName":"LoiViPham"
        }));
        console.log("Success")
        console.log(data)
        return data;
    }
    catch(err){
        console.log("Error")
        console.log(err)
    }
}
//
const CreateLoiViPham = async(IDLoi, NoiDung) =>{
    try{
        const data = await dynamodb.send(new PutItemCommand(
            {
                Item:{
                    "IDLoi":{
                        "S":IDLoi
                    },
                    "NoiDung":{
                        "S":NoiDung
                    }
                },
                TableName:"LoiViPham",
                ConditionExpression: "attribute_not_exists(#ID)",
                ExpressionAttributeNames:{
                    "#ID":"IDLoi"
                }
            }
        ));
        console.log("Success")
        console.log(data)
    }
    catch(err){
        console.log("Error");
        console.log(err)
    }
}
//
const UpdateLoiViPham = async(IDLoi, NoiDung) =>{
    try{
        const data = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "IDLoi":{
                    "S":"IDLoi"
                }
            },
            ExpressionAttributeNames:{
                "#A":"NoiDung"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "S":NoiDung
                }
            },
            UpdateExpression:"SET #A = :a",
            TableName:"LoiViPham"
        }));
        console.log("Success");
        console.log(data)
    }
    catch(err){
        console.log("Error");
        console.log(err)
    }
}
//
//CRUD BaoCaoChoXuLi
//
const GetBaoCaoChoXuLi = async(ID) => {
    try{
        const data = await dynamodb.send(new GetItemCommand({
            "Key":{
                "ID BaoCao":{
                    "S":ID
                }
            }, 
            "TableName":"BaoCaoChoXuLi"
        }));
        console.log("Success")
        console.log(data)
        return data;
    }
    catch(err){
        console.log("Error")
        console.log(err)
    }
}
//
const CreateBaoCaoChoXuLi = async(ID_Stream, NoiDung, SoLan, StreamID) =>{
    try{
        const data = await dynamodb.send(new PutItemCommand({
            Item:{
                "ID BaoCao":{
                    "S":ID_Stream
                },
                "ViPham":[
                    {
                        "ViPham":"L01",
                        "SoLan":"2"
                    }
                ]
            },
            TableName:"BaoCaoChoXuLi",
            ConditionExpression: "attribute_not_exists(#ID)",
            ExpressionAttributeNames:{
                "#ID":"ID BaoCao"
            }
        }));
        console.log("Success")
        console.log(data)
    }
    catch(err){
        console.log("Error")
        console.log(err)
    }
}
//
const UpdateBaoCaoChoXuLi = async() =>{
    try{
        const data = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "ID Loi":{
                    "S":"sss"
                }
            },
            TableName:"BaoCaoChoXuLi"
        }));
        console.log("Success")
        console.log(data)
    }catch(err){
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
                ClientId:ClientId,
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

const {PutObjectCommand} = require("@aws-sdk/client-s3");
const e = require("express");
const { compile } = require("ejs");

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


module.exports = {GetChannel, CreateChannel, SignOut,
     GetStreamList, GetHoSoNguoiDung, CreateHoSoNguoiDung, 
     UpdateHoSoNguoiDung, SignUp, ConfirmSignUp,
     Login, ChangePassword, GetCredentialsForIdentity,
     GetId, UploadImageToS3, CreateTheLoaiGame, UpdateTheLoaiGame}

CreateBaoCaoChoXuLi("123","")