const router = require("express").Router();
const Car = require("../models/Car.model");

// get all cars
router.get("",(req,res,next) => {
    Car.find({})
    .then((cars) => {
        console.log("cars founds", cars)
        res.json(cars)
    })
    .catch( (err) => {
        console.log("error while fetching cars", err);
        res.status(500).json({ err: "failed to retrieve cars" });
        next(err); 
    })
})

// get Single car by Id 
router.get("/:carId",(req, res, next) => {
    const { carId } = req.params;

    Car.findById(carId)
    .then((foundCarById) => {
        res.status(200).json(foundCarById)
    })
    .catch((err) => {
        res
          .status(500)
          .json({ message: "error while fetching car by the Id", err });
        console.log("error while fetching car by the Id", err);
        next(err);
      });
});

// Create a new Car
router.post("", (req,res,next) => {
    console.log("here is the req body", req.body); 
    
    Car.create(req.body)
    .then((newCar) => {
        console.log("new Car added", newCar);
        res.json({ newCar, message: "Your car was created!" });
    })
    .catch((err) => {
        res.status(500).json({ message: "error while creating car" });
        console.log(err);
        next(err);
      });
})

// Delete a car
router.delete("/:carId", (req, res, next) => {
    const { carId } = req.params;
    Car.findByIdAndDelete(carId)
      .then((deletedCar) => {
        res.status(200).json(deletedCar);
        console.log("deleted car successfully", deletedCar);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "error while deleting cohort By the Id", err });
        console.log("error while deleting cohort By the Id", err);
        next(err);
      });
  });

  // Modify a car

  router.put("/:carId", (req, res, next) => {
    const { carId } = req.params;
    CohortModel.findByIdAndUpdate(carId, req.body, { new: true })
      .then((updatedCar) => {
        res.status(200).json(updatedCar);
        console.log("updated by Id", updatedCar);
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  });

  module.exports = router;