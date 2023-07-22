const {Ivs } = require("@aws-sdk/client-ivs");
const REGION = "ap-northeast-2";
const ivs = new Ivs({ region: REGION});
module.exports = {ivs}
