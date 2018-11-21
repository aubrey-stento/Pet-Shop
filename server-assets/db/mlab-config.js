let mongoose = require('mongoose')
// this is the only line that will change from project to project vv
const connectionString = 'mongodb://student:student1@ds041157.mlab.com:41157/petshop'
let connection = mongoose.connection

// establishes connection to database
mongoose.connect(connectionString, {
    useNewUrlParser: true
})

// console log any error coming from the databse
connection.on('error', err =>{
    console.log("DATABASE ERROR: ", err)
})


// confirms connection to database
connection.once('open', () => {
    console.log("Connected to Database")
})