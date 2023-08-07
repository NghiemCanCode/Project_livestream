const {ivs, s3} = require("./libs/sampleClient.js");
const server = "rtmps://416fc24342ee.global-contribute.live-video.net:443/app/"
// Hàm lấy channel

const {GetChannelCommand, StreamHealth} = require("@aws-sdk/client-ivs");

const GetChannel = async (arn) => {
    try {
        const data = await ivs.send(new GetChannelCommand({
            arn: arn
        }));
        return data;
    } catch (err){
        return err.message
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
        return data;
    }
    catch(err){
        return err.message
    }
}
const GetStreamKey = async(arn) =>{
    try{
        const data = await ivs.send(new GetStreamKeyCommand({
            arn:arn
        }));
        return data;
    }
    catch(err){
        return err.message
    }
}

// Tìm Channel bằng tên
const {ListChannelsCommand} = require("@aws-sdk/client-ivs"); 

const GetChannelByName = async(TenDangNhap) =>{
    try{
        const data = await ivs.send(new ListChannelsCommand({
            filterByName:TenDangNhap
        }));
        return data
    } catch(err){
        return err.message
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
        return data
    } catch (err){
        return err.message
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
        return data;
    } catch (err){
        return err.message
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
        return data
    } catch (err){
        return err.message
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
                    "AnhBiaARN": {
                        "S": "asdasdfs"
                    },
                    "AnhDaiDienARN": {
                        "S": "https://projectlivestreamdb.s3.ap-northeast-2.amazonaws.com/sampleperson.png"
                    },
                    "DangKi": {
                        "L": []
                    },
                    "DanhSachTheoDoi": {
                        "L": []
                    },
                    "GioiThieu": {
                        "S": ""
                    },
                    "Gmail": {
                        "S": Gmail
                    },
                    "Link": {
                        "L": []
                    },
                    "SoNguoiDangKi": {
                        "N": "0"
                    },
                    "SoNguoiTheoDoi": {
                        "N": "0"
                    },
                    "TenKenh": {
                        "S": TenDangNhap
                    },
                    "TheLoaiMau": {
                        "S": "JustChatting"
                    },
                    "Tien": {
                        "N": "0"
                    },
                    "TieuDeMacDinh": {
                        "S": "Đang LiveStream"
                    },
                    "TrangThai": {
                        "BOOL": true
                    },
                    "NgaySinh":{
                        "S":NgaySinh
                    }
                },
                "TableName":"HoSoNguoiDung", 
                "ConditionExpression":"attribute_not_exists(#TenDangNhap)",
                "ExpressionAttributeNames":{
                    "#TenDangNhap":"TenDangNhap"
                }
            }
        ));
        return data
    }catch(err){
        return err.message
    }
}
const UpdateHoSoNguoiDung = async(TenDangNhap, AnhBiaARN,AnhDaiDienARN,DangKi,DanhSachTheoDoi,GioiThieu,
    Gmail,Link,SoNguoiDangKi,SoNguoiTheoDoi,TenKenh,TheLoaiMau,Tien,TieuDeMacDinh,TrangThai,NgaySinh) =>{
    try{
         const data = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "TenDangNhap":{
                    "S":TenDangNhap
                }
            },
            ExpressionAttributeNames:{
                "#A":"AnhBiaARN",
                "#B":"AnhDaiDienARN",
                "#C":"DangKi",
                "#D":"DanhSachTheoDoi",
                "#E":"GioiThieu",
                "#F":"Gmail",
                "#G":"Link",
                "#H":"SoNguoiDangKi",
                "#I":"SoNguoiTheoDoi",
                "#K":"TenKenh",
                "#L":"TheLoaiMau",
                "#M":"Tien",
                "#N":"TieuDeMacDinh",
                "#O":"TrangThai",
                "#P":"NgaySinh"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "S":AnhBiaARN
                },
                ":b":{
                    "S":AnhDaiDienARN
                },
                ":c":{
                    "L":DangKi
                },
                ":d":{
                    "L":DanhSachTheoDoi
                },
                ":e":{
                    "S":GioiThieu
                },
                ":f":{
                    "S":Gmail
                },
                ":g":{
                    "L":Link
                },
                ":h":{
                    "N":SoNguoiDangKi
                },
                ":i":{
                    "N":SoNguoiTheoDoi
                },
                ":k":{
                    "S":TenKenh
                },
                ":l":{
                    "S":TheLoaiMau
                },
                ":m":{
                    "N":Tien
                },
                ":n":{
                    "S":TieuDeMacDinh
                },
                ":o":{
                    "BOOL":TrangThai
                },
                ":p":{
                    "S":NgaySinh
                }
            },
            UpdateExpression:"SET #A= :a, #B= :b, #C= :c, #D= :d, #E= :e, #F= :f, #G= :g, #H= :h, #I= :i, #K= :k,#L= :l, #M= :m, #N= :n, #O= :o, #P= :p",
            TableName:"HoSoNguoiDung"
            
        }));
        return data
    }
    catch(err){
        return err.message
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
        return data;
    } catch (err){
        return err.message
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
        return data
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
        return data;
    }
    catch(err){
        return err.message
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
        return data
    }
    catch(err){
        return err.message
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
        return data
    }
    catch(err){
        return err.message
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
        return data;
    }
    catch(err){
        return err.message
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
        return data
    }
    catch(err){
        return err.message
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
        return data
    }
    catch(err){
        return err.message
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
        return data
    }
    catch(err){
        return err.message
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
        return data;
    }
    catch(err){
        return err.message
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
        return data
    }catch(err){
        return err.message
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
        return data
    } 
    catch(err){
        return err.message
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
        return data
    }
    catch(err){
        return err.message
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
        return data
    }
    catch(err){
        return err.message
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
        return data
    }catch(err){
        return err.message
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
        return data
    }
    catch(err){
        return err.message
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
        return data;
    }
    catch(err){
        return err.message
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
        return data
    }catch(err){
        return err.message
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
                    "N":TongTienRa
                },
                ":c":{
                    "N":TongTienVao
                }
            },
            UpdateExpression:"SET #A = :a, #B = :b, #C = :c",
            TableName:"DoanhThuToanHeThong"
        }));
        return data
    }
    catch(err){
        return err.message
    }
}
//CRUD LichSuGiaoDich
const GetLichSuGiaoDich = async(Streamer, ThoiGian) =>{
    try{
        const data = await dynamodb.send(new GetItemCommand({
            "Key":{
                "Streamer":{
                    "S":Streamer
                },
                "ThoiGian":{
                    "S":ThoiGian
                }
            }, 
            "TableName":"LichSuGiaoDich"
        }));
        return data;
    }
    catch(err){
        return err.message
    }
}
const CreateLichSuGiaoDich = async(Streamer, ThoiGian, TenDichVu, LoaiGiaoDich, PayPal, SoTien) =>{
    try{
        const data = await dynamodb.send(new PutItemCommand({
            Item:{
                "Streamer":{
                    "S":Streamer
                },
                "ThoiGian":{
                    "S":ThoiGian
                },
                "BienLaiGiaoDich":{
                    "S":TenDichVu
                },
                "LoaiGiaoDich":{
                    "BOOL":LoaiGiaoDich
                },
                "PayPal":{
                    "S":PayPal
                },
                "SoTien":{
                    "N":SoTien
                }
            },
            TableName:"LichSuGiaoDich",
            ConditionExpression: "attribute_not_exists(#ID) AND attribute_not_exists(#TG)",
            ExpressionAttributeNames:{
                "#ID":"Streamer",
                "#TG":"ThoiGian"
            }
        }));
        return data
    }catch(err){
        return err.message
    }
}
const UpdateLichSuGiaoDich = async(Streamer,ThoiGian,BienLaiGiaoDich, LoaiGiaoDich, PayPal, SoTien) =>{
    try{
        const data = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "Streamer":{
                    "S":Streamer
                },
                "ThoiGian":{
                    "S":ThoiGian
                }
            },
            ExpressionAttributeNames:{
                "#A":"BienLaiGiaoDich",
                "#B":"LoaiGiaoDich",
                "#C":"PayPal",
                "#D":"SoTien"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "S":BienLaiGiaoDich
                },
                ":b":{
                    "BOOL":LoaiGiaoDich
                },
                ":c":{
                    "S":PayPal
                },
                ":d":{
                    "N":SoTien
                }
            },
            UpdateExpression:"SET #A = :a, #B = :b, #C = :c, #D = :d",
            TableName:"LichSuGiaoDich"
        }));
        return data
    }
    catch(err){
        return err.message
    }
}
//CRUD LichSuQuanLi
const GetLichSuQuanLi = async(NhanVien, ThoiGian) =>{
    try{
        const data = await dynamodb.send(new GetItemCommand({
            "Key":{
                "NhanVien":{
                    "S":NhanVien
                },
                "ThoiGian":{
                    "S":ThoiGian
                }
            }, 
            "TableName":"LichSuQuanLi"
        }));
        return data;
    }
    catch(err){
        return err.message
    }
}
const CreateLichSuQuanLi = async(NhanVien, ThoiGian, CongViecThucHien, DoiTuong) =>{
    try{
        const data = await dynamodb.send(new PutItemCommand({
            Item:{
                "NhanVien":{
                    "S":NhanVien
                },
                "ThoiGian":{
                    "S":ThoiGian
                },
                "CongViecThucHien":{
                    "S":CongViecThucHien
                },
                "DoiTuong":{
                    "S":DoiTuong
                }
            },
            TableName:"LichSuQuanLi",
            ConditionExpression: "attribute_not_exists(#ID) AND attribute_not_exists(#TG)",
            ExpressionAttributeNames:{
                "#ID":"NhanVien",
                "#TG":"ThoiGian"
            }
        }));
        return data
    }catch(err){
        return err.message
    }
}
const UpdateLichSuQuanLi = async(NhanVien, ThoiGian, CongViecThucHien, DoiTuong) =>{
    try{
        const data = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "NhanVien":{
                    "S":NhanVien
                },
                "ThoiGian":{
                    "S":ThoiGian
                }
            },
            ExpressionAttributeNames:{
                "#A":"CongViecThucHien",
                "#B":"DoiTuong"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "S":CongViecThucHien
                },
                ":b":{
                    "S":DoiTuong
                }
            },
            UpdateExpression:"SET #A = :a, #B",
            TableName:"LichSuQuanLi"
        }));
        return data
    }
    catch(err){
        console.log("Error");
        console.log(err)
    }
}
//CRUD Stream
const GetStreamTable = async(ID_Stream) =>{
    try{
        const data = await dynamodb.send(new GetItemCommand({
            "Key":{
                "ID Stream":{
                    "S":ID_Stream
                }
            }, 
            "TableName":"Stream"
        }));
        return data;
    }
    catch(err){
        return err.message
    }
}
const CreateStreamTable = async(ID_Stream, Dodai, Donate, SoLuotXemTrungBinh, Streamer, TheLoai, TieuDe,TongLuotDangKiMoi, TongTienDonate) =>{
    try{
        const data = await dynamodb.send(new PutItemCommand({
            Item:{
                "ID Stream":{
                    "S":ID_Stream
                },
                "Dodai":{
                    "N":Dodai
                },
                "Donate":{
                    "L":Donate
                },
                "SoLuotXemTrungBinh":{
                    "N":SoLuotXemTrungBinh
                },
                "Streamer":{
                    "S":Streamer
                },
                "TheLoai":{
                    "S":TheLoai
                },
                "TieuDe":{
                    "S":TieuDe
                },
                "TongLuotDangKiMoi":{
                    "N":TongLuotDangKiMoi
                },
                "TongLuotDangKiMoi":{
                    "N":TongTienDonate
                }
            },
            TableName:"Stream",
            ConditionExpression: "attribute_not_exists(#ID)",
            ExpressionAttributeNames:{
                "#ID":"ID Stream"
            }
        }));
        return data
    }catch(err){
        return err.message
    }
}
const UpdateStreamTable = async(ID_Stream, Dodai, Donate, SoLuotXemTrungBinh, Streamer, TheLoai, TieuDe,TongLuotDangKiMoi, TongTienDonate) =>{
    try{
        const data = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "ID Stream":{
                    "S":ID_Stream
                }
            },
            ExpressionAttributeNames:{
                "#A":"DoDai",
                "#B":"Donate",
                "#C":"SoLuotXemTrungBinh",
                "#D":"Streamer",
                "#E":"TheLoai",
                "#F":"TieuDe",
                "#G":"TongLuotDangKiMoi",
                "#H":"TongTienDonate"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "N":Dodai
                },
                ":b":{
                    "L":Donate
                },
                ":c":{
                    "N":SoLuotXemTrungBinh
                },
                ":d":{
                    "D":Streamer
                },
                ":e":{
                    "S":TheLoai
                },
                ":f":{
                    "S":TieuDe
                },
                ":g":{
                    "N":TongLuotDangKiMoi
                },
                ":h":{
                    "N":TongTienDonate
            },
            UpdateExpression:"SET #A = :a, #B = :b, SET #C = :c, #D = :d, SET #E = :e, #F = :f, SET #G = :g, #H = :h",
            TableName:"Stream"
        }
    }));
        return data
    }
    catch(err){
        return err.message
    }
}
//CRUD VideoRecord
const GetVideoRecord = async(ID_Stream) => {
    try{
        const data = await dynamodb.send(new GetItemCommand({
            "Key":{
                "ID Stream":{
                    "S":ID_Stream
                }
            }, 
            "TableName":"VideoRecord"
        }));
        return data;
    }
    catch(err){
        return err.message
    }
}
const CreateVideoRecord = async(ID_Stream,SoLuotXemVideo,TieuDe,TrangThai,VideoARN) => {
    try{
        const data = await dynamodb.send(new PutItemCommand({
            Item:{
                "ID Stream":{
                    "S":ID_Stream
                },
                "SoLuotXemVideo":{
                    "N":SoLuotXemVideo
                },
                "TieuDe":{
                    "S":TieuDe
                },
                "TrangThai":{
                    "BOOL":TrangThai
                },
                "VideoARN":{
                    "S":VideoARN
                }
            },
            TableName:"VideoRecord",
            ConditionExpression: "attribute_not_exists(#ID)",
            ExpressionAttributeNames:{
                "#ID":"ID Stream"
            }
        }));
        return data
    }catch(err){
        return err.message
    }
}
const UpdateVideoRecord = async(ID_Stream,SoLuotXemVideo,TieuDe,TrangThai,VideoARN) => {
    try{
        const data = await dynamodb.send(new UpdateItemCommand({
            Key:{
                "ID Stream":{
                    "S":ID_Stream
                }
            },
            ExpressionAttributeNames:{
                "#A":"SoLuotXemVideo",
                "#B":"TieuDe",
                "#C":"TrangThai",
                "#D":"VideoARN"
            },
            ExpressionAttributeValues:{
                ":a":{
                    "N":SoLuotXemVideo
                },
                ":b":{
                    "S":TieuDe
                },
                ":c":{
                    "BOOL":TrangThai
                },
                ":d":{
                    "S":VideoARN
                }
            },
            UpdateExpression:"SET #A = :a, #B = :b, #C = :c, #D = :d",
            TableName:"VideoRecord"
        }));
        return data
    }
    catch(err){
        return err.message
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
        return data
    }catch (err){
        return err.message
    }
};
//Sign Out

const {GlobalSignOutCommand} = require("@aws-sdk/client-cognito-identity-provider")

const SignOut = async (AccessToken) => {
    try{
        const data = await cognito_identify_provider.send(new GlobalSignOutCommand({
            AccessToken: AccessToken
        }));
        return data
    }
    catch(err){
        return err.message
    }
}
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
        return data
    }catch (err){
        return err.message
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
        return data.AuthenticationResult
    }catch (err){
        err.message
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
        return data
    }catch (err){
        return err.message
    }
    
}
const {ForgotPasswordCommand} = require("@aws-sdk/client-cognito-identity-provider")
const ForgotPassword = async(UserName) =>{
    try{
        const data = await cognito_identify_provider.send(new ForgotPasswordCommand({
            ClientId:ClientId,
            Username:UserName
        }));
        return data
    }
    catch(err){
        return err.message
    }
}
const {ConfirmForgotPasswordCommand} = require("@aws-sdk/client-cognito-identity-provider")

const ConfirmForgotPassword = async(UserName, ConfirmationCode, Password) =>{
    try{
        const data = await cognito_identify_provider.send(new ConfirmForgotPasswordCommand({
            ClientId:ClientId,
            Username:UserName,
            ConfirmationCode:ConfirmationCode,
            Password:Password
        }));
        return data
    }
    catch(err){
        return err.message
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
const { Stream, PassThrough } = require("stream");

const UploadImageToS3 = async(imageFile, imageFileName, MineType) =>{
    try{
        const data = await s3.send(new PutObjectCommand({
            Body:imageFile,
            Bucket:"projectlivestreamdb",
            Key:imageFileName,
            ContentType: MineType
        }));
        return data
    }
    catch (err){
        return err.message
    }
}
const {GetObjectCommand} = require("@aws-sdk/client-s3");
const {getSignedUrl} = require("@aws-sdk/s3-request-presigner");
const GetObjectS3 = async (Key)=>{
    try{
        const data = await getSignedUrl(s3, new GetObjectCommand({
            Bucket:"projectlivestreamdb",
            Key:Key
        }),{expiresIn: 60 * 60 * 24})
        return data
    }
    catch(err){
        return err.message
    }
}
module.exports = {GetChannel, GetStreamKeyARN, GetStreamKeyARN, GetStreamKey, GetChannelByName, CreateChannel, GetStreamList, GetHoSoNguoiDung, UpdateHoSoNguoiDung, GetTheLoaiGame, CreateTheLoaiGame, UpdateTheLoaiGame, GetLoiViPham, CreateLoiViPham, UpdateLoiViPham, GetBaoCaoChoXuLi, CreateBaoCaoChoXuLi, UpdateBaoCaoChoXuLi, DeleteBaoCaoChoXuLi, GetBienBanCamStreamer, CreateBienBanCamStreamer, UpdateBienBanCamStreamer, DeleteBienBanCamStreamer, GetDichVu, CreateDichVu, UpdateDichVu, GetDoanhThuToanHeThong, CreateDoanhThuToanHeThong, UpdateDoanhThuToanHeThong, GetLichSuGiaoDich, CreateLichSuGiaoDich,
UpdateLichSuGiaoDich, GetLichSuQuanLi, CreateLichSuQuanLi, UpdateLichSuQuanLi, GetStreamTable, CreateStreamTable, UpdateStreamTable, GetVideoRecord, CreateVideoRecord, UpdateVideoRecord, SignUp, SignOut, ConfirmSignUp, Login, ChangePassword, ForgotPassword, ConfirmForgotPassword, UploadImageToS3, GetObjectS3, server}