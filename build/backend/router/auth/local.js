"use strict";var express=require("express"),router=express.Router(),mongoose=require("mongoose"),Remember=mongoose.model("Remember");module.exports=function(passport){return router.post("/signup",passport.authenticate("local-signup",{failureFlash:!0}),function(req,res){res.send(req.user)}),router.post("/signin",passport.authenticate("local-signin",{failureFlash:!0}),function(req,res){return Remember.findOne({login:req.user.email}).exec(function(err,data){return err?res.status(500).send(err):(data&&res.cookie("remember",data.login+"#"+data.serial_id+data.token,{maxAge:31104e6}),res.send(req.user))})}),router.get("/signedin",function(req,res){res.send(req.isAuthenticated()?req.user:"0")}),router.post("/signout",function(req,res){Remember.findOne({login:req.user.email},function(err,token){if(err)throw err;token&&token.remove(function(err){if(err)throw err}),req.logOut(),res.sendStatus(200)})}),router};