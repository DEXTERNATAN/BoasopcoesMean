'use strict';

var express = require('express');
var router = express.Router();


module.exports = function (passport) {

	

	router.get('/auth/facebook', passport.authenticate('facebook'));

	router.get('/auth/facebook/callback', passport.authenticate('facebook'), function (req ,res) {
		res.send(req.user);
	});

	


	


	


	


	

	router.get('/auth/google', passport.authenticate('google'));

	router.get('/auth/google/callback', passport.authenticate('google'), function (req ,res) {
		res.send(req.user);
	});

	


	return router;

};