let express = require('express')
let bp = require('body-parser')
let server = express()
let port = 3000

require('./server-assets/db/mlab-config')

// MIDDLEWARE
server.use(express.static(__dirname + '/public')) 
server.use(bp.json())
server.use(bp.urlencoded({ extended: true}))


// REGISTER ROUTES
let catRoutes = require('./server-assets/routes/cat-routes')
let dogRoutes = require('./server-assets/routes/dog-routes')


server.use('/api/cats', catRoutes)
server.use('/api/dogs', dogRoutes)


// default error/ CATCH ALL
server.get('*', (req, res, next) => {
    res.status(404).send('NO MATCHING ROUTE')
})



server.listen(port, () => {
    console.log('Server running on port:', port)
})