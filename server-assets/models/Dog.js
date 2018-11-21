let mongoose = require('mongoose')
let Schema = mongoose.Schema

// DEFINE THE DOG SCHEMA
let schema = new Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    breed: { type: String, default: 'Mixed'},
    age: { type: Number},
    color: [{ type: String}],
    gender: { type: String, required: true}
})

module.exports = mongoose.model('Dog', schema)