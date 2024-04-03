const router = require("express").Router();
const Rental = require("../models/Rental.model");

// get all Rentals by userId
router.get("/:userId",(req,res, next))
// get Single Rental by Id 

// Create a new rental 
    router.post("", (req, res, next) =>{
        console.log("req body", req.body)
        Car.create(req.body)
        .then((newRental) =>{
            console.log("new Rental added", newRental)
            res.json({newRental, message: "Your car rental was created"})
        })
        .catch((err) =>{
            res.status(500).json({message: "Error creating the car rental", err})
        })
    })
// Delete a rental

//modify a rental 