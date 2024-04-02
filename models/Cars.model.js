const {Schema, model} = require('mongoose');

const carSchema = new Schema ({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String, 
        required: true
    },
    color: {
        type: String, 
        required: true
    },
    disponibility: {
        type: Boolean, 
        required: true
    },
    image: {
        type: String,
        required: true
    }
   

})

const Car = model('Car', carSchema)
module.exports = Car;