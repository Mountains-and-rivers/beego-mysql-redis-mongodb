
"use strict";
var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

function DbOper() {
  this.mongoSchema = mongoose.Schema;
  this.mongoClient  = null;
}
DbOper.prototype.connectMongoose = function(mongoosePara) {
  var para = mongoosePara;
  var poolSize = 5;
  var options = {
    useNewUrlParser: true,
    auto_reconnect:true,
    'reconnectTries': Number.MAX_VALUE,
    reconnectInterval:5000,
    poolSize:5
  };
  this.mongoClient = mongoose.createConnection(para, options);
  this.mongoClient.on('connecting', function () {
    console.warn((new Date()) + ' connecting to mongoose %s.', para);
  });

  this.mongoClient.on('open', function () {
    console.warn((new Date()) + ' open to mongoose %s.', para);
  });

  this.mongoClient.on('connected', function () {
    console.warn((new Date()) + ' connected to mongoose success: ' + para + ', poolSize: ' + poolSize);
  });

  this.mongoClient.on('disconnected', function () {
    console.warn((new Date()) + ' disconnected to mongoose %s.', para);
  });

  this.mongoClient.on('close', function () {
    console.warn((new Date()) + ' close to mongoose %s.', para);
  });

  this.mongoClient.on('error', function (error) {
    console.error((new Date()) + ' Connect to mongoose with error: ' + error + ', para: ' + para);
  });
};


(new DbOper()).connectMongoose('mongodb://root:root@47.111.77.29:27017/admin');

