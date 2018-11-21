const router = require('express').Router()
let Dog = require('../models/Dog')

// LOGGER
router.get('/', (req, res, next) => {
    console.log("Woof")
    next()
})
// GET ALL DOGS
router.get('/', (req, res, next) => {
    Dog.find({})
    .then(dogs => {
        res.send(dogs)
    })
    .catch(err => {
        res.status(400).send(err)
    })
})
//  GET DOGS BY ID
router.get('/:id', (req, res, next) =>{
    Dog.findById(req.params.id)
    .then(dog => {
        res.send(dog)
    })
    .catch(err => {
        res.status(400).send(err)
    })
})
// CREATE/POST A NEW DOG
router.post('/', (req, res, next) => {
    Dog.create(req.body)
    .then(dog => {
        res.send(dog)
    })
    .catch(err => {
        res.status(400).send(err)
    })
})
// EDIT A DOG
router.put('/:dogId', (req, res, next) => {
    Dog.findByIdAndUpdate(req.params.dogId, req.body, { new: true })
    .then(dog => {
        res.send(dog)
    })
.catch(err => {
    res.status(400).send(err)
})
})
// DELETE A DOG
router.delete('/:id', (req, res, next) => {
    Dog.findByIdAndDelete(req.params.id)
    .then(deletedDog => {
        res.send('Dog Deleted')
    })
    .catch(err => {
        res.status(400).send(err)
    })
})
module.exports = router