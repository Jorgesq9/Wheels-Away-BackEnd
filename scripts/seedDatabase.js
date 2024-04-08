require('../db/index')
const mongoose = require('mongoose');
const Car = require('../models/Car.model')
const User = require('../models/User.model')
const Rental = require('../models/Rental.model')
const carsData = [
  {
    make: 'Opel',
    model: 'Corsa',
    year: 2020,
    color: 'Blue',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/opel-corsa-5d-white-2021.png',
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
    make: 'Peugeot',
    model: '208',
    year: 2018,
    color: 'Red',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/peugeot-208-5d-white-2021.png',
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
    make: 'Peugeot',
    model: '308',
    year: 2019,
    color: 'Black',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/peugeot-308-5d-black-2021.png',
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
    make: 'Seat',
    model: 'Arona',
    year: 2021,
    color: 'White',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/seat-arona-suv-white-2021.png',
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
    make: 'Seat',
    model: 'Ateca',
    year: 2017,
    color: 'Yellow',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/seat-ateca-suv-white-2023.png',
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
    make: 'Skoda',
    model: 'Karoq',
    year: 2019,
    color: 'Silver',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/skoda-karoq-sport-5d-grau-2020.png',
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
    model: '1 Series',
    year: 2020,
    color: 'Black',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/bmw-1er-5d-schwarz-2020.png',
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
    make: 'Cupra',
    model: 'Leon',
    year: 2021,
    color: 'White',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/cupra-leon-5d-black-2021.png',
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
    make: 'Peugeot',
    model: '308',
    year: 2020,
    color: 'Gray',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/peugeot-308-5d-black-2021.png',
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
    make: 'Audi',
    model: 'A1 Sportback',
    year: 2019,
    color: 'Blue',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/audi-a1-sportback-grau-2019.png',
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
    make: 'Skoda',
    model: 'Kodiaq',
    year: 2020,
    color: 'Red',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/skoda-kodiaq-suv-white-2021.png',
    ],
    licensePlate: '2345JKL',
    extras: ['GPS', 'Radio', 'Sunroof'],
    pricePerDay: 35,
    doors: '4',
    passengers: '5',
    rating: 4.5,
    transmission: 'Manual'
  },
  {
    make: 'Skoda',
    model: 'kodiaq',
    year: 2019,
    color: 'Green',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/skoda-kodiaq-5d-schwarz-2020.png',
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
    make: 'Volvo',
    model: 'XC40',
    year: 2020,
    color: 'Black',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/volvo-xc40-suv-silver-2023.png',
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
    make: 'Audi',
    model: 'Q5',
    year: 2021,
    color: 'Blue',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/audi-q5-suv-black-2021.png',
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
    make: 'BMW',
    model: '7 Series',
    year: 2020,
    color: 'Silver',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/bmw-7-4d-blue-2023.png',
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
    make: 'Fiat',
    model: '500',
    year: 2020,
    color: 'White',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/fiat-500-2d-weiss-2020.png',
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
    make: 'VW',
    model: 'Golf',
    year: 2020,
    color: 'Red',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/vw-golf-4d-grey-2022.png',
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
    make: 'MINI',
    model: 'Cooper',
    year: 2019,
    color: 'Black',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/mini-cooper-se-3d-silver-2022.png',
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
    make: 'Ford',
    model: 'Focus State',
    year: 2020,
    color: 'Yellow',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/ford-focus-sw-silver-2020.png',
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
    make: 'BMW',
    model: '2 Series Active',
    year: 2021,
    color: 'Red',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/bmw-2-activ-tourer-grey-2022.png',
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
    make: 'Mazda',
    model: 'CX-30',
    year: 2020,
    color: 'White',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/mazda-cx-30-4d-grau-2021.png',
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
    make: 'Mazda',
    model: '6 Estate',
    year: 2021,
    color: 'Blue',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/mazda-6-kombi-rot-2018.png',
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
    make: 'DS',
    model: '7',
    year: 2020,
    color: 'Red',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/citroen-ds7-5d-weiss-2019.png',
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
    make: 'Mitsubishi',
    model: 'Eclipse',
    year: 2019,
    color: 'Silver',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/mitsubishi-eclipse-cross-suv-4d-silver-2023.png',
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
    make: 'Skoda',
    model: 'Superb',
    year: 2020,
    color: 'White',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/skoda-superb-stw-grey-2022.png',
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
    make: 'Tesla',
    model: 'Model Y Performance',
    year: 2021,
    color: 'Blue',
    images: [
      'https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/tesla-y-4d-suv-weiss-2021.png',
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