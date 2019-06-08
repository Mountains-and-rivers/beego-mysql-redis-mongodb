var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '47.111.77.29',
  user     : 'root',
  password : 'root123',
  database : 'beego_demo'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});