const express = require('express');
const db = require('../data/db-config');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cars = await db('cars');
        if(!cars) {
            res.status(404).json({message: 'There were no cars found'});
        } else {
            res.status(200).json(cars);
        }
    } catch(err) {
        res.status(500).json({message: `There was an error retrieving the cars: ${err}`});
    }

});

router.post('/', async (req, res) => {
    const newCar = req.body;
    if(!newCar.vin || !newCar.make || !newCar.model || !newCar.mileage) {
        res.status(400).json({message: 'You must include a vin, make, model, and mileage. transmissionType and title are optional'})
    } else {
        try {
            const [newId] = await db('cars').insert(newCar);
            if(!newId > 0) {
                res.status(500).json({message: 'Car was not added. Try again'});
            } else {
                newCar.id = newId;
                res.status(201).json({car: newCar});
            }
        } catch(err) {
            res.status(500).json({message: `There was an error adding the car: ${err}`});
        }
        

    }
});

router.get('/automatic', async (req, res) => {
    try {
        const automaticCars = await db('cars').where({transmissionType: 'A'});
        if(!automaticCars) {
            res.status(404).json({message: 'No automatic cars found'});
        } else {
            res.status(200).json(automaticCars);
        }
    } catch(err) {
        res.status(500).json({message: `There was an error retrieving automatic cars: ${err}`});
    }
})

router.get('/manual', async (req, res) => {
    try {
        const manualCars = await db('cars').where({transmissionType: 'M'});
        if(!manualCars) {
            res.status(404).json({message: 'No manual cars found'});
        } else {
            res.status(200).json(manualCars);
        }
    } catch(err) {
        res.status(500).json({message: `There was an error retrieving manual cars: ${err}`});
    }
})

module.exports = router;