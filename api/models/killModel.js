// Fichier de création du model pour la base de données

'use strict';
//Import de mongoose
var mongoose = require('mongoose');
//Variable pour la création d'un nouveau Schema
var Schema = mongoose.Schema;

//Création du Schema Kill
var killSchema = new Schema({

    //Ajout d'un champs date
    date: {
        type: Date,
        default: Date.now
    },
    //Ajout d'un champs Sinked (sloop ou gallion)
    sinked: {
        type: [{
            type: String,
            enum: ['Sloop', 'Galleon']
        }],
        default: ['Sloop']
    },
    loots:[{
        castway: {type:Number, default:0},
        seafer: {type:Number, default:0},
        marauder: {type:Number, default:0},
        captain: {type:Number, default:0},
        sorrow: {type:Number, default:0},
        grogs: {type:Number, default:0},
        strongholdC : {type:Number, default:0},
        strongholdS: {type:Number, default:0},
        villanous: {type:Number, default:0},
        hateful: {type:Number, default:0},
        disgraced: {type:Number, default:0},
        foul: {type:Number, default:0},
        spices: {type:Number, default:0},
        silks: {type:Number, default:0},
        tea: {type:Number, default:0},
    }]
});

//Export du schema (pour le require)
module.exports = mongoose.model("Kills", killSchema);