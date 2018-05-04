'use strict';

var mongoose = require('mongoose'),
    Kill = mongoose.model('Kills');

exports.list_all_kills = function(req, res){
    Kill.find({}, function(err, kill){
        if(err){
            res.send(err);
        }
        res.json(kill);
    });
}


exports.create_a_kill = function(req, res){
    var new_kill = new Kill(req.body);
    new_kill.save(function(err, kill){
        if(err){
            res.send(err);
        }
        res.json(kill)
    });
}