require('../db/index')
const mongoose = require('mongoose');
const Car = require('../models/Cars.model')

const carsData = [
    {brand: 'Audi', model: 'A4 Sedan', color: 'Green', disponibility: true, image: '../pictures/AudiA4.jpeg'},
    {brand: 'Porsche', model: 'Cayenne', color: 'White', disponibility: true, image: '../pictures/Porsche.jpeg'},
    {brand: 'Tesla', model: 'Cybertruck', color: 'Grey', disponibility: true, image: '../pictures/Cybertruck.jpeg'},
    {brand: 'Opel', model: 'Corsa', color: 'Red', disponibility: true, image: '../pictures/Opel.jpeg'},
    {brand: 'Mercedes', model: 'Cabrio', color: 'Grey', disponibility: true, image: '../pictures/Mercedes.jpeg'},
    {brand: 'Renault', model: 'Clio V', color: 'Orange', disponibility: true, image: '../pictures/Clio.jpeg'},
    {brand: 'Mini', model: 'Cooper S', color: 'Blue', disponibility: true, image: '../pictures/Mini.jpeg'},
]

const addCarsToDataBase = async() => {
    try {
        await Car.insertMany(carsData)
        console.log("Car added")
    } 
    catch (err) {
        console.error('Error adding a Car', err)
    }
    finally {
        mongoose.connection.close()
    }
}

addCarsToDataBase()