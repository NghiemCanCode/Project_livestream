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

//getChannel("arn:aws:ivs:ap-northeast-2:529876766707:channel/viVlQeGgWdvY");
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

getHoSoNguoiDung()
