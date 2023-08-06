const {ivs, s3} = require("./libs/sampleClient.js");
const server = "rtmps://416fc24342ee.global-contribute.live-video.net:443/app/"
// Hàm lấy channel

const assert = require("assert");

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

const {ListStreamKeysCommand} = require("@aws-sdk/client-ivs");
const {GetStreamKeyCommand} = require("@aws-sdk/client-ivs");
const GetStreamKeyARN = async(channelArn) =>{
    try{
        const data = await ivs.send(new ListStreamKeysCommand({
            channelArn:channelArn
        }));
        console.log(data)
        return data;
    }
    catch(err){
        console.log("Error")
        console.log(err)
    }
}
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
const CreateHoSoNguoiDung = async(TenDangNhap, Gmail, NgaySinh) =>{
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
                "#A":"TrangThai",
                "#B":"NgaySinh"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "A":"True"
                },
                ":b":{
                    "B":NgaySinh
                }
            },
            UpdateExpression:"SET #A= :a, #B = :b",
            TableName:"HoSoNguoiDung"
        }));
        console.log("Success")
    }catch(err){
        console.log("Error")
        console.log(err)
    }
}
const UpdateHoSoNguoiDung = async(TenDangNhap, AnhBiaARN, AnhDaiDienARN, DangKi, DanhSachTheoDoi, GioiThieu, Gmail, Link, SoNguoiDangKi, SoNguoiTheoDoi, TenKenh, TheLoaiMau, Tien, TieuDeMacDinh, TrangThai, NgaySinh) =>{
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
                "#A":"TrangThai",
                "#B":"NgaySinh"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "A":TrangThai
                },
                ":b":{
                    "B":NgaySinh
                }
            },
            UpdateExpression:"SET #A= :a, #B = :b",
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
const UpdateLoiViPham = async(IDLoi, NoiDung) =>{
    try{
        const data = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "IDLoi":{
                    "S":IDLoi
                }
            },
            ExpressionAttributeNames:{
                "#A":"ViPham"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "L":NoiDung
                }
            },
            UpdateExpression:"SET #A = :a",
            TableName:"BaoCaoViPham"
        }));
        console.log("Success");
        console.log(data)
    }
    catch(err){
        console.log("Error");
        console.log(err)
    }
}
//CRUD BaoCaoChoXuLi
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
const CreateBaoCaoChoXuLi = async(ID_Stream, ViPham) =>{
    try{
        const data = await dynamodb.send(new PutItemCommand({
            Item:{
                "ID BaoCao":{
                    "S":ID_Stream
                },
                "ViPham":{
                    "L":ViPham
                }

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
const UpdateBaoCaoChoXuLi = async(ID_BaoCao, ViPham) =>{
    try{
        const data = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "ID BaoCao":{
                    "S":ID_BaoCao
                }
            },
            ExpressionAttributeNames:{
                "#A":"ViPham"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "S":ViPham
                }
            },
            UpdateExpression:"SET #A = :a",
            TableName:"BaoCaoChoXuLi"
        }));
        console.log("Success");
        console.log(data)
    }
    catch(err){
        console.log("Error");
        console.log(err)
    }
}
const DeleteBaoCaoChoXuLi = async(ID_BaoCao) =>{
    try{
        const data = await dynamodb.send(new DeleteItemCommand({
            Key:{
                "ID BaoCao":{
                    "S":ID_BaoCao
                }
            },
            TableName:"BaoCaoChoXuLi"
        }));
        console.log("Success")
        console.log(data)
    }
    catch(err){
        console.log("Error");
        console.log(err)
    }
}
//CRUD BienBanCamStreamer
const GetBienBanCamStreamer = async() =>{
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
const CreateBienBanCamStreamer = async(ID, DSLoiGhiNhan, MucAn, NhanVien, Streamer,
    ThoiGian, ThoiGianKetThuc, VideoRecordARN) =>{
    try{
        const data = await dynamodb.send(new PutItemCommand({
            Item:{
                "ID BienBan":{
                    "S":ID
                },
                "DSLoiGhiNhan":{
                    "L":DSLoiGhiNhan
                },
                "MucAn":{
                    "N":MucAn
                },
                "NhanVien":{
                    "S":NhanVien
                },
                "Streamer":{
                    "S":Streamer
                },
                "ThoiGian":{
                    "S":ThoiGian
                },
                "ThoiGianKetThuc":{
                    "S":ThoiGianKetThuc
                }, 
                "VideoRecordARN":{
                    "S":VideoRecordARN
                }
            },
            TableName:"BienBanCamStreamer",
            ConditionExpression: "attribute_not_exists(#ID)",
            ExpressionAttributeNames:{
                "#ID":"ID BienBan"
            }
        }));
        console.log("Success")
        console.log(data)
    }catch(err){
        console.log("Error")
        console.log(err)
    }
}
const UpdateBienBanCamStreamer = async(ID, DSLoiGhiNhan, MucAn, NhanVien, Streamer, ThoiGian, ThoiGianKetThuc, VideoRecordARN) =>{
    try{
        const data = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "ID BienBan":{
                    "S":"123"
                }
            },
            ExpressionAttributeNames:{
                "#A":"DSLoiGhiNhan",
                "#B":"MucAn",
                "#C":"NhanVien",
                "#D":"Streamer",
                "#E":"ThoiGian",
                "#F":"ThoiGianKetThuc",
                "#G":"VideoRecordARN"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "L":DSLoiGhiNhan
                },
                ":b":{
                    "N":MucAn
                },
                ":c":{
                    "S":NhanVien
                },
                ":d":{
                    "S":Streamer
                },
                ":e":{
                    "S":ThoiGian
                },
                ":f":{
                    "S":ThoiGianKetThuc
                },
                ":g":{
                    "S":VideoRecordARN
                }
            },
            UpdateExpression:"SET #A = :a, #B = :b, #C = :c, #D = :d, #E = :e, #F = :f, #G = :g",
            TableName:"BienBanCamStreamer"
        }));
        console.log("Success")
        console.log(data)
    } 
    catch(err){
        console.log("Error")
        console.log(err)
    }
}
const DeleteBienBanCamStreamer = async() =>{
    try{
        const data = await dynamodb.send(new DeleteItemCommand({
            Key:{
                "ID BienBan":{
                    "S":"123"
                }
            }, 
            TableName:"BienBanCamStreamer"
        }));
        console.log("Success")
        console.log(data)
    }
    catch(err){
        console.log("Error")
        console.log(err)
    }

}
//CRUD DichVu
const GetDichVu = async(ID_DichVu) =>{
    try{
        const data = await dynamodb.send(new GetItemCommand({
            "Key":{
                "ID DichVu":{
                    "S":ID_DichVu
                }
            }, 
            "TableName":"DichVu"
        }));
        console.log("Success")
        console.log(data)
    }
    catch(err){
        console.log("Error")
        console.log(err)
    }
}
const CreateDichVu = async(ID_DichVu, GiaTien, TenDichVu) =>{
    try{
        const data = await dynamodb.send(new PutItemCommand({
            Item:{
                "ID DichVu":{
                    "S":ID_DichVu
                },
                "GiaTien":{
                    "N":GiaTien
                },
                "TenDichVu":{
                    "S":TenDichVu
                }
            },
            TableName:"DichVu",
            ConditionExpression: "attribute_not_exists(#ID)",
            ExpressionAttributeNames:{
                "#ID":"ID DichVu"
            }
        }));
        console.log("Success")
        console.log(data)
    }catch(err){
        console.log("Error")
        console.log(err)
    }
}
const UpdateDichVu = async(ID_DichVu, GiaTien, TenDichVu) =>{
    try{
        const data = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "ID DichVu":{
                    "S":ID_DichVu
                }
            },
            ExpressionAttributeNames:{
                "#A":"GiaTien",
                "#B":"TenDichVu"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "N":GiaTien
                },
                ":b":{
                    "S":TenDichVu
                }
            },
            UpdateExpression:"SET #A = :a, #B = :b",
            TableName:"DichVu"
        }));
        console.log("Success");
        console.log(data)
    }
    catch(err){
        console.log("Error");
        console.log(err)
    }
}
//CRUD DoanhThuToanHeThong
const GetDoanhThuToanHeThong = async(ThoiGian) =>{
    try{
        const data = await dynamodb.send(new GetItemCommand({
            "Key":{
                "ThoiGian":{
                    "S":ThoiGian
                }
            }, 
            "TableName":"DoanhThuToanHeThong"
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
const CreateDoanhThuToanHeThong = async(ThoiGian, TongDoanhThu, TongTienRa, TongTienVao)=>{
    try{
        const data = await dynamodb.send(new PutItemCommand({
            Item:{
                "ThoiGian":{
                    "S":ThoiGian
                },
                "TongDoanhThu":{
                    "N":TongDoanhThu
                },
                "TongTienRa":{
                    "N":TongTienRa
                },
                "TongTienVao":{
                    "N":TongTienVao
                }
            },
            TableName:"DoanhThuToanHeThong",
            ConditionExpression: "attribute_not_exists(#ID)",
            ExpressionAttributeNames:{
                "#ID":"ThoiGian"
            }
        }));
        console.log("Success")
        console.log(data)
    }catch(err){
        console.log("Error")
        console.log(err)
    }
}
const UpdateDoanhThuToanHeThong = async(ThoiGian, TongDoanhThu, TongTienRa, TongTienVao)=>{
    try{
        const data = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "ThoiGian":{
                    "S":ThoiGian
                }
            },
            ExpressionAttributeNames:{
                "#A":"TongDoanhThu",
                "#B":"TongTienRa",
                "#C":"TongTienVao"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "N":TongDoanhThu
                },
                ":b":{
                    "N":""
                }
            },
            UpdateExpression:"SET #A = :a, #B = :b",
            TableName:"DichVu"
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
const {cognito_identify_provider} = require("./libs/sampleClient.js");

const UserPoolId ='ap-northeast-2_F5v6yidbd'
const ClientId = "6lhm3fo132s56tfs9k4s7fc38h"

//const TenDangNhap = "nghiemsp123"
//const MatKhau = "AlanTuring49"
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
const { resolve } = require("path");

const UploadImageToS3 = async(imageFile, imageFileName, MineType) =>{
    try{
        const data = await s3.send(new PutObjectCommand({
            Body:imageFile,
            Bucket:"projectlivestreamdb",
            Key:imageFileName,
            ContentType: MineType
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
