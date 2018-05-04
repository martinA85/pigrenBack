'use strict';

//import de variable
var mongoose = require('mongoose'),
    Kill = mongoose.model('Kills'); //Model kill

//Création de la function list_all_kills
exports.list_all_kills = function(req, res){
    //Find All
    Kill.find({}, function(err, kill){
        if(err){
            //send erreur si il y en a une
            res.send(err);
        }
        //retourne la liste de Kills
        res.json(kill);
    });
}

//Création de la fonction create_a_kill
exports.create_a_kill = function(req, res){
    //Creation d'un nouvelle objet kill
    var new_kill = new Kill(req.body);
    //On save l'objet kill dans la base de donnée
    new_kill.save(function(err, kill){
        if(err){
            res.send(err);
        }
        res.json(kill)
    });
}