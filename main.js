var http = require('http');

var server = http.createServer();

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Salut tout le monde !');
  });

  // Code identique au précédent

var instructionsNouveauVisiteur = function(req, res) {
    res.writeHead(200);
    res.end('Salut tout le monde !');
  }
  
  var server = http.createServer(instructionsNouveauVisiteur);

  server.listen(8080);