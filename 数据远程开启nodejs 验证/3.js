
var redis = require('redis'),
  RDS_PORT = 6379,
  RDS_HOST = '47.111.77.29',
  RDS_OPTS = {},
  client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);

client.on('ready', function(res) {
  console.log('ready')
})