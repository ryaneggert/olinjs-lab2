var path = require("path");
var models = require(path.join(__dirname, "../models/models"));
var apis = require('./apis');
var amazon = require('../utils/apactest.js');


var mainroutes = {};
var home = function (req, res) {
  connections = apis.liconnects(req, res, function (parsedconns) {
    res.render('home', {
      currentuser: {
        name: req.user.name,
        _id: req.user.id
      },
      connections: parsedconns
    });
  });
};
mainroutes.home = home;

var gift_get = function (req, res) {
  res.render('gift', {
    sent_user: req.params.name
  });
};

mainroutes.gift_get = gift_get;

var gift_post = function (req, res) {
  var data = {};
  data.money = req.body.money;
  data.sent_user = req.body.sent_user;
  data.rec_user = req.body.rec_user;
  //add rec user info
};

mainroutes.gift_post = gift_post;

var random = function (req, res) {
    amazon(1, '', function(data) {
      res.render('random', data);
    });
};

mainroutes.random = random;

module.exports = mainroutes;
