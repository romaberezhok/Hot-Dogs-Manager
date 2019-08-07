const express = require('express');
const hotDog = require('../controllers/hotDogController');

const router = express.Router();

// Get all hot dogs
router.get('/hotdogs', hotDog.getAll);

// Get a single hot dog
router.get('/hotdog/:hotDogId', hotDog.getOne);

// Add a new hot dog
router.post('/hotdog/add', hotDog.add);

// Delete a single hot dog
router.delete('/hotdog/:hotDogId', hotDog.delete);

// Update a hot dog
router.put('/hotdog/:hotDogId', hotDog.update);

module.exports = router;