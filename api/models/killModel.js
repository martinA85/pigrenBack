'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var killSchema = new Schema({

    date: {
        type: Date,
        default: Date.now
    },
    sinked: {
        type: [{
            type: String,
            enum: ['Sloop', 'Galleon']
        }],
        default: ['Sloop']
    }

});

module.exports = mongoose.model("Kills", killSchema);