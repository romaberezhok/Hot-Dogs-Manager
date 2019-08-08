const HotDog = require('../models/HotDog')

module.exports = {
    getAll: async (req, res) => {
        try {
            const hotDogs = await HotDog.find();
            res.json(hotDogs);
        } catch(err) {
            res.json({message: err})
        }
    },
    getOne: async (req, res) => {
        try {
            const hotDog = await HotDog.findById(req.params.hotDogId);
            res.json(hotDog);
        } catch(err) {
            res.json({message: err})
        }   
    },
    add: async (req, res) => {
        const hotDog = new HotDog({
            title: req.body.title,
            description: req.body.description,
            ingredients: req.body.ingredients
        });

        try {
            const savedHotDog = await hotDog.save();
            res.json(savedHotDog)
        } catch(err) {
            res.json({message: err});
        }
    },
    delete: async (req, res) => {
        try{
            const deletedHotDog = await HotDog.findByIdAndDelete(req.params.hotDogId);
            res.json(deletedHotDog);
        } catch(err) {
            res.json({message: err})
        }
    },
    update: async (req, res) => {
        try {
            const updatedHotDog = await HotDog.findByIdAndUpdate(req.params.hotDogId, {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                    ingredients: req.body.ingredients
                }
            }, {
                new: true,
                omitUndefined: true
            });
            res.json(updatedHotDog)
        } catch(err) {
            res.json({message: err})
        }
    }
}

