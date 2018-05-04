'use strict';

module.exports = function(app){
    var kill = require('../controllers/killController');

    app.route('/kills').get(kill.list_all_kills).post(kill.create_a_kill);
}