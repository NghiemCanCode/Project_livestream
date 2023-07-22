const {ivs} = require("./libs/sampleClient.js");


// Hàm lấy channel

const {GetChannelCommand} = require("@aws-sdk/client-ivs");

const ivsParams = {
    arn: "arn:aws:ivs:ap-northeast-2:529876766707:channel/viVlQeGgWdvY"
};

const getChannel = async () => {
    try {
        const data = await ivs.send(new GetChannelCommand(ivsParams));
        console.log("Success", data.channel.playbackUrl);
        return data;
    } catch (err){
        console.log("Error",err);
    }
};

// Hàm lấy danh sách channel
const {ListStreamsCommand} = require("@aws-sdk/client-ivs");
const getChannelListParams = {
    filterBy: {
        health: "HEALTHY"
    },
    maxResults: 10
}
const getChannelList = async () => {
    try{
        const data = await ivs.send(new ListStreamsCommand( getChannelListParams));
        console.log("Success");
        console.log(data)
        return data;
    } catch (err){
        console.log("Error",err);
    }
};

getChannelList();

