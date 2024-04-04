const router = require("express").Router();
const { populate } = require("../models/Car.model");
const Rental = require("../models/Rental.model");

// get all Rentals by userId
router.get("/:userId",(req, res, next) => {
    const { userId } = req.params;

    Rental.find({user: userId})
    .populate('car')
    .then((foundRentalsByUserId) => {
        res.status(200).json(foundRentalsByUserId)
    })
    .catch((err) => {
        res
          .status(500)
          .json({ message: "error while fetching car by the Id", err });
        console.log("error while fetching car by the Id", err);
        next(err);
      });
});

// //get rental a single car by userId and carID
// router.get("/:userId/:carId",(req, res, next) => {
//     const { userId, carId } = req.params;
//     console.log(carId)
//     Rental.find({ user: userId, car: carId})
//     .populate('Car')
//     .then((rentalsIdCar) => {
//         console.log(rentalsIdCar)
//         res.status(200).json(rentalsIdCar)

//     })
//     .catch((err) => {
//         res
//           .status(500)
//           .json({ message: "error while fetching car by the Id", err });
//         console.log("error while fetching car by the Id", err);
//         next(err);
//       });
// });

// get Single rental by Id 
router.get("/details/:rentalId",(req, res, next) => {
    const { rentalId } = req.params;
    
    Rental.findById(rentalId)
    .populate('car')
    .populate('user')
    .then((foundRental) => {
        res.status(200).json(foundRental)
        console.log("este es el rentalId", rentalId);
    })
    .catch((err) => {
        res
          .status(500)
          .json({ message: "error while fetching rental by the Id", err });
        console.log("error while fetching rental by the Id", err);
        next(err);
      });
});
// Create a new rental 
    router.post("", (req, res, next) =>{
        console.log("req body", req.body)
        Rental.create(req.body)
        .then((newRental) =>{
            console.log("new Rental added", newRental)
            res.json({newRental, message: "Your car rental was created"})
        })
        .catch((err) =>{
            res.status(500).json({message: "Error creating the car rental", err})
        })
    })
// Delete a rental
    router.delete("/:rentalId", (req, res, next) =>{
        const { rentalId } = req.params
        Rental.findByIdAndDelete(rentalId)
        .then((deletedRental) =>{
            res.status(200).json(deletedRental)
            console.log("Car rental deleted successfully", deletedRental)
        })
        .catch((err) =>{
            res
                .status(500)
                .json({message: "Error deleting the car rental by Id", err})
                console.log("Error deleting the car rental by Id", err)
                next(err);
        })
    })

//modify a rental 

router.put("/:RentalId", (req, res, next) => {
    const { RentalId } = req.params;
    Rental.findByIdAndUpdate(RentalId, req.body, { new: true })
      .then((updatedRental) => {
        res.status(200).json(updatedRental);
        console.log("updated by Id", updatedRental);
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  });

  module.exports = router;