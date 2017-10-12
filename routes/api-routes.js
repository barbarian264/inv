var db = require("../models");
var fs = require("fs");
var path = require("path");
var moment = require("moment");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(app) {


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/inventory',
 
        failureRedirect: '/'
    }));

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/inventory',
 
        failureRedirect: '/'
    }));

    

};
