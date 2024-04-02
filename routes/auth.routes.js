const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.model');
const router = express.Router();

//SignUp 
router.post('/signup', (req, res) =>{
    bcrypt.genSalt(12)
    .then(salt => bcrypt.hash(req.body.password, salt))
    .then(hashedPassword =>{
        const newUSer = new User ({
            ...req.body,
            password: hashedPassword
        })
        return newUSer.save()
    })
    .then(savedUser => res.status(201).send(savedUser))
    .catch(err => res.status(500).send({message: "Error creating new User", err}))
})

//Login

router.post('/login', (req, res) =>{
    let foundUser;
    User.findOne({email: req.body.email})
    .then(user => {
        if(!user) {
            res.status(404).send({message: "User not Found"})
            return Promise.reject("User not Found")
        }
        foundUser = user;
        return bcrypt.compare(req.body.password, user.password)
    })
    .then(validPassword =>{
        if(!validPassword) {
            res.status(400).send({message: "Wrong Password"})
            return Promise.reject("Wrong Password")
        }
        const token = jwt.sign({id: foundUser._id, role: foundUser.role}, process.env.JWT_SECRET)
        res.header('auth-token', token).send({message: "Authentication successful", token})
    })
    .catch(err =>{
        if(!res.headersSent){
            res.status(500).send({message: "Error signing up", err})
        }
    })
})
module.exports = router;