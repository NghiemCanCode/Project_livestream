var AWS = require("aws-sdk");
AWS.config.loadFromPath('./config.json');
AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
  }
});

var AWS = require("aws-sdk");
console.log("Region:", AWS.config.region);

AWS.config.apiVersions = {
    s3: '2006-03-01',
    ivs: '2020-07-14',
    ivschat:'2020-07-14',
    iam:'2010-05-08'
  };

var https = require('https');
var agent = new https.Agent({
    maxSockets: 25
});

AWS.config.update({
    httpOptions:{
       agent: agent
    }
 });
