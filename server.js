var express = require('express'),
  request = require('request'),
  app = express();

app.use(express.static(__dirname + '/public'));

app.get('/api', function (req, res) {

  request({url:'http://api.nestoria.co.uk/api', qs:req.query}, function(err, response, body) {
    if(err) { console.log(err); return; }
    res.send(200, body);
    console.log(req.params);
    console.log(req.query);
  });

});

app.listen(8080);