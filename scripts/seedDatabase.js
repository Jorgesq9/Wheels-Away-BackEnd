require('../db/index')
const mongoose = require('mongoose');
const Car = require('../models/Car.model')
const User = require('../models/User.model')
const Rental = require('../models/Rental.model')
const carsData = [
  {
    make: 'Dacia',
    model: 'Sandero',
    year: 2020,
    color: 'Blue',
    images: [
      'https://source.unsplash.com/600x600/?car&id=35&image=1',
      'https://source.unsplash.com/600x600/?car&id=35&image=2',
    ],
    licensePlate: '2345WXY',
    extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
    pricePerDay: 30,
    doors: '4',
    passengers: '5',
    rating: 4.5,
    transmission: 'Manual'
  },
  {
    make: 'Toyota',
    model: 'Corolla',
    year: 2018,
    color: 'Red',
    images: [
      'https://source.unsplash.com/600x600/?car&id=36&image=1',
      'https://source.unsplash.com/600x600/?car&id=36&image=2',
    ],
    licensePlate: '3456XYZ',
    extras: ['GPS', 'Radio', 'Sunroof'],
    pricePerDay: 35,
    doors: '4',
    passengers: '5',
    rating: 4.0,
    transmission: 'Automatic'
  },
  {
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    color: 'Black',
    images: [
      'https://source.unsplash.com/600x600/?car&id=37&image=1',
      'https://source.unsplash.com/600x600/?car&id=37&image=2',
    ],
    licensePlate: '4567ZAB',
    extras: ['GPS', 'Radio'],
    pricePerDay: 25,
    doors: '4',
    passengers: '5',
    rating: 4.3,
    transmission: 'Manual'
  },
  {
    make: 'Ford',
    model: 'F-150',
    year: 2021,
    color: 'White',
    images: [
      'https://source.unsplash.com/600x600/?car&id=38&image=1',
      'https://source.unsplash.com/600x600/?car&id=38&image=2',
    ],
    licensePlate: '5678ABC',
    extras: ['GPS', 'Sunroof', 'Leather seats'],
    pricePerDay: 40,
    doors: '4',
    passengers: '5',
    rating: 4.7,
    transmission: 'Automatic'
  },
  {
    make: 'Chevrolet',
    model: 'Camaro',
    year: 2017,
    color: 'Yellow',
    images: [
      'https://source.unsplash.com/600x600/?car&id=39&image=1',
      'https://source.unsplash.com/600x600/?car&id=39&image=2',
    ],
    licensePlate: '6789BCD',
    extras: ['GPS', 'Radio', 'Leather seats'],
    pricePerDay: 45,
    doors: '2',
    passengers: '2',
    rating: 4.8,
    transmission: 'Manual'
  },
  {
    make: 'Nissan',
    model: 'Altima',
    year: 2019,
    color: 'Silver',
    images: [
      'https://source.unsplash.com/600x600/?car&id=40&image=1',
      'https://source.unsplash.com/600x600/?car&id=40&image=2',
    ],
    licensePlate: '7890CDE',
    extras: ['GPS', 'Radio', 'Sunroof'],
    pricePerDay: 32,
    doors: '4',
    passengers: '5',
    rating: 4.2,
    transmission: 'Automatic'
  },
  {
    make: 'BMW',
    model: 'X5',
    year: 2020,
    color: 'Black',
    images: [
      'https://source.unsplash.com/600x600/?car&id=41&image=1',
      'https://source.unsplash.com/600x600/?car&id=41&image=2',
    ],
    licensePlate: '8901DEF',
    extras: ['GPS', 'Radio', 'Leather seats'],
    pricePerDay: 60,
    doors: '4',
    passengers: '5',
    rating: 4.9,
    transmission: 'Automatic'
  },
  {
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2021,
    color: 'White',
    images: [
      'https://source.unsplash.com/600x600/?car&id=42&image=1',
      'https://source.unsplash.com/600x600/?car&id=42&image=2',
    ],
    licensePlate: '9012EFG',
    extras: ['GPS', 'Sunroof', 'Leather seats'],
    pricePerDay: 70,
    doors: '4',
    passengers: '5',
    rating: 4.7,
    transmission: 'Automatic'
  },
  {
    make: 'Audi',
    model: 'A4',
    year: 2020,
    color: 'Gray',
    images: [
      'https://source.unsplash.com/600x600/?car&id=43&image=1',
      'https://source.unsplash.com/600x600/?car&id=43&image=2',
    ],
    licensePlate: '0123FGH',
    extras: ['GPS', 'Radio', 'Sunroof'],
    pricePerDay: 55,
    doors: '4',
    passengers: '5',
    rating: 4.6,
    transmission: 'Automatic'
  },
  {
    make: 'Volkswagen',
    model: 'Golf',
    year: 2019,
    color: 'Blue',
    images: [
      'https://source.unsplash.com/600x600/?car&id=44&image=1',
      'https://source.unsplash.com/600x600/?car&id=44&image=2',
    ],
    licensePlate: '1234GHI',
    extras: ['GPS', 'Radio', 'Leather seats'],
    pricePerDay: 40,
    doors: '4',
    passengers: '5',
    rating: 4.4,
    transmission: 'Automatic'
  },
  {
    make: 'Hyundai',
    model: 'Elantra',
    year: 2020,
    color: 'Red',
    images: [
      'https://source.unsplash.com/600x600/?car&id=45&image=1',
      'https://source.unsplash.com/600x600/?car&id=45&image=2',
    ],
    licensePlate: '2345JKL',
    extras: ['GPS', 'Radio', 'Sunroof'],
    pricePerDay: 35,
    doors: '4',
    passengers: '5',
    rating: 4.5,
    transmission: 'Automatic'
  },
  {
    make: 'Subaru',
    model: 'Outback',
    year: 2019,
    color: 'Green',
    images: [
      'https://source.unsplash.com/600x600/?car&id=46&image=1',
      'https://source.unsplash.com/600x600/?car&id=46&image=2',
    ],
    licensePlate: '3456MNO',
    extras: ['GPS', 'Radio', 'Sunroof'],
    pricePerDay: 40,
    doors: '4',
    passengers: '5',
    rating: 4.3,
    transmission: 'Automatic'
  },
  {
    make: 'Kia',
    model: 'Sportage',
    year: 2020,
    color: 'Black',
    images: [
      'https://source.unsplash.com/600x600/?car&id=47&image=1',
      'https://source.unsplash.com/600x600/?car&id=47&image=2',
    ],
    licensePlate: '4567PQR',
    extras: ['GPS', 'Radio', 'Leather seats'],
    pricePerDay: 45,
    doors: '4',
    passengers: '5',
    rating: 4.4,
    transmission: 'Automatic'
  },
  {
    make: 'Jeep',
    model: 'Wrangler',
    year: 2021,
    color: 'Blue',
    images: [
      'https://source.unsplash.com/600x600/?car&id=48&image=1',
      'https://source.unsplash.com/600x600/?car&id=48&image=2',
    ],
    licensePlate: '5678STU',
    extras: ['GPS', 'Radio', 'Off-road package'],
    pricePerDay: 55,
    doors: '4',
    passengers: '5',
    rating: 4.6,
    transmission: 'Automatic'
  },
  {
    make: 'Lexus',
    model: 'RX 350',
    year: 2020,
    color: 'Silver',
    images: [
      'https://source.unsplash.com/600x600/?car&id=49&image=1',
      'https://source.unsplash.com/600x600/?car&id=49&image=2',
    ],
    licensePlate: '6789UVW',
    extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
    pricePerDay: 65,
    doors: '4',
    passengers: '5',
    rating: 4.8,
    transmission: 'Automatic'
  },
  {
    make: 'Volvo',
    model: 'XC90',
    year: 2020,
    color: 'White',
    images: [
      'https://source.unsplash.com/600x600/?car&id=50&image=1',
      'https://source.unsplash.com/600x600/?car&id=50&image=2',
    ],
    licensePlate: '7890XYZ',
    extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
    pricePerDay: 70,
    doors: '4',
    passengers: '5',
    rating: 4.7,
    transmission: 'Automatic'
  },
  {
    make: 'Mazda',
    model: 'CX-5',
    year: 2020,
    color: 'Red',
    images: [
      'https://source.unsplash.com/600x600/?car&id=51&image=1',
      'https://source.unsplash.com/600x600/?car&id=51&image=2',
    ],
    licensePlate: '8901WXY',
    extras: ['GPS', 'Radio', 'Sunroof'],
    pricePerDay: 50,
    doors: '4',
    passengers: '5',
    rating: 4.5,
    transmission: 'Automatic'
  },
  {
    make: 'Infiniti',
    model: 'Q50',
    year: 2019,
    color: 'Black',
    images: [
      'https://source.unsplash.com/600x600/?car&id=52&image=1',
      'https://source.unsplash.com/600x600/?car&id=52&image=2',
    ],
    licensePlate: '9012ABC',
    extras: ['GPS', 'Radio', 'Leather seats'],
    pricePerDay: 55,
    doors: '4',
    passengers: '5',
    rating: 4.6,
    transmission: 'Automatic'
  },
  {
    make: 'Mini',
    model: 'Cooper',
    year: 2020,
    color: 'Yellow',
    images: [
      'https://source.unsplash.com/600x600/?car&id=53&image=1',
      'https://source.unsplash.com/600x600/?car&id=53&image=2',
    ],
    licensePlate: '0123DEF',
    extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
    pricePerDay: 45,
    doors: '2',
    passengers: '2',
    rating: 4.3,
    transmission: 'Automatic'
  },
  {
    make: 'Porsche',
    model: '911',
    year: 2021,
    color: 'Red',
    images: [
      'https://source.unsplash.com/600x600/?car&id=54&image=1',
      'https://source.unsplash.com/600x600/?car&id=54&image=2',
    ],
    licensePlate: '1234GHI',
    extras: ['GPS', 'Radio', 'Leather seats'],
    pricePerDay: 150,
    doors: '2',
    passengers: '2',
    rating: 4.9,
    transmission: 'Automatic'
  },
  {
    make: 'Tesla',
    model: 'Model 3',
    year: 2020,
    color: 'White',
    images: [
      'https://source.unsplash.com/600x600/?car&id=55&image=1',
      'https://source.unsplash.com/600x600/?car&id=55&image=2',
    ],
    licensePlate: '2345JKL',
    extras: ['GPS', 'Autopilot', 'Leather seats'],
    pricePerDay: 80,
    doors: '4',
    passengers: '5',
    rating: 4.7,
    transmission: 'Automatic'
  },
  {
    make: 'Land Rover',
    model: 'Range Rover Evoque',
    year: 2021,
    color: 'Blue',
    images: [
      'https://source.unsplash.com/600x600/?car&id=56&image=1',
      'https://source.unsplash.com/600x600/?car&id=56&image=2',
    ],
    licensePlate: '3456MNO',
    extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
    pricePerDay: 90,
    doors: '4',
    passengers: '5',
    rating: 4.8,
    transmission: 'Automatic'
  },
  {
    make: 'Fiat',
    model: '500',
    year: 2020,
    color: 'Red',
    images: [
      'https://source.unsplash.com/600x600/?car&id=57&image=1',
      'https://source.unsplash.com/600x600/?car&id=57&image=2',
    ],
    licensePlate: '4567PQR',
    extras: ['GPS', 'Radio', 'Sunroof'],
    pricePerDay: 35,
    doors: '2',
    passengers: '4',
    rating: 4.4,
    transmission: 'Manual'
  },
  {
    make: 'Buick',
    model: 'Encore',
    year: 2019,
    color: 'Silver',
    images: [
      'https://source.unsplash.com/600x600/?car&id=58&image=1',
      'https://source.unsplash.com/600x600/?car&id=58&image=2',
    ],
    licensePlate: '5678STU',
    extras: ['GPS', 'Radio', 'Sunroof', 'Heated seats'],
    pricePerDay: 40,
    doors: '4',
    passengers: '5',
    rating: 4.2,
    transmission: 'Automatic'
  },
  {
    make: 'Mitsubishi',
    model: 'Outlander',
    year: 2020,
    color: 'White',
    images: [
      'https://source.unsplash.com/600x600/?car&id=59&image=1',
      'https://source.unsplash.com/600x600/?car&id=59&image=2',
    ],
    licensePlate: '6789UVW',
    extras: ['GPS', 'Radio', 'Sunroof'],
    pricePerDay: 45,
    doors: '4',
    passengers: '5',
    rating: 4.3,
    transmission: 'Automatic'
  },
  {
    make: 'Genesis',
    model: 'G80',
    year: 2021,
    color: 'Blue',
    images: [
      'https://source.unsplash.com/600x600/?car&id=60&image=1',
      'https://source.unsplash.com/600x600/?car&id=60&image=2',
    ],
    licensePlate: '7890XYZ',
    extras: ['GPS', 'Radio', 'Sunroof', 'Leather seats'],
    pricePerDay: 70,
    doors: '4',
    passengers: '5',
    rating: 4.4,
    transmission: 'Automatic'
  },
  ]

  const userData = [
    {
      name: "John Doe",
      email: "johndoe@email.com",
      password: "password",
      photo: "https://source.unsplash.com/600x600/?portrait&id=1",
      driverLicense: "123456789",
    },
    {
      name: "Jane Smith",
      email: "janesmith@email.com",
      password: "password",
      photo: "https://source.unsplash.com/600x600/?portrait&id=2",
      driverLicense: "987654321",
    },
    {
      name: "Alice Johnson",
      email: "alicejohnson@email.com",
      password: "password",
      photo: "https://source.unsplash.com/600x600/?portrait&id=3",
      driverLicense: "456789123",
    },
    {
      name: "Bob Williams",
      email: "bobwilliams@email.com",
      password: "password",
      photo: "https://source.unsplash.com/600x600/?portrait&id=4",
      driverLicense: "321654987",
    },
    {
      name: "Sarah Davis",
      email: "sarahdavis@email.com",
      password: "password",
      photo: "https://source.unsplash.com/600x600/?portrait&id=5",
      driverLicense: "789123456",
    },
    {
      name: "Michael Brown",
      email: "michaelbrown@email.com",
      password: "password",
      photo: "https://source.unsplash.com/600x600/?portrait&id=6",
      driverLicense: "654987321",
    },
    {
      name: "Emily Wilson",
      email: "emilywilson@email.com",
      password: "password",
      photo: "https://source.unsplash.com/600x600/?portrait&id=7",
      driverLicense: "123789456",
    },
    {
      name: "David Taylor",
      email: "davidtaylor@email.com",
      password: "password",
      photo: "https://source.unsplash.com/600x600/?portrait&id=8",
      driverLicense: "987321654",
    },
    {
      name: "Olivia Anderson",
      email: "oliviaanderson@email.com",
      password: "password",
      photo: "https://source.unsplash.com/600x600/?portrait&id=9",
      driverLicense: "456123789",
    },
    {
      name: "James Wilson",
      email: "jameswilson@email.com",
      password: "password",
      photo: "https://source.unsplash.com/600x600/?portrait&id=10",
      driverLicense: "789456123",
    },
  ];

  

const addDataToDB = async() => {
    try {
        //Create Users
        await User.collection.drop();
        await User.insertMany(userData)
        console.log("Users added")

        //Create Cars
        await Car.collection.drop();
        await Car.insertMany(carsData)
        console.log("Car added")

        //create Rental refs
        await Rental.collection.drop();
        const users = await User.find();
        const cars = await Car.find();
        for (let i = 0; i < 8; i++) {
            const user = users[i];
            const car = cars[i];
            const startDate = new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
            const endDate = new Date(startDate.getTime() + Math.floor(Math.random() * 1000000000));
            const totalPrice = Math.floor(Math.random() * 1000);
            const rental = new Rental({
                car: car._id,
                user: user._id,
                startDate,
                endDate,
                totalPrice,
            });
            await rental.save();
        }
        for (let i = 0; i < 5; i++) {
          const user = users[1];
          const car = cars[i];
          const startDate = new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
          const endDate = new Date(startDate.getTime() + Math.floor(Math.random() * 1000000000));
          const totalPrice = Math.floor(Math.random() * 1000);
          const rental = new Rental({
              car: car._id,
              user: user._id,
              startDate,
              endDate,
              totalPrice,
          });
          await rental.save();
      }
        
        console.log("rentals added")
    } 
    catch (err) {
        console.error('Error seeding db', err)
    }
    finally {
        mongoose.connection.close()
    }
}

addDataToDB()