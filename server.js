//Import des variables pour le server
var express = require('express'),
    app = express(), //framework express pour le gestion de l'application
    port = process.env.PORT || 3000, //choix du port d'écoute du serveur
    mongoose = require('mongoose'),
    Kill = require('./api/models/killModel'),
    bodyParser = require('body-parser');

//Connection à la base de données
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/KillboardDB');

//Mise en place de bodyParser en json sur l'application (parse le body des requete en json)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//application des routes sur l'application
var routes = require('./api/routes/killRoutes');
routes(app)

//Middlewear pour les routes
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

//Lancement de l'application sur le port
app.listen(port);

console.log("Server startde on Port : " + port);