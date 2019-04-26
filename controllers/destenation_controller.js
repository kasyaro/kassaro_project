const express = require('express')
//connection to schema .
const travel = require('../models/model.js')

const router = express.Router()


//***INDEX Route */ http://localhost:3000/desteny/trips
//this finding our trips index.ejs and show it.
router.get('/trips', (req, res) => {
    travel.find({}, (error, allTrips)=>{
        res.render('index.ejs', {
            trip: allTrips
        });
    })
})

//** */ NEW (CLIENT create)http://localhost:3000/desteny/new
router.get('/new', (req, res) => {
    res.render('new.ejs')
})
// CREATE (SERVER)
router.post('/', (req, res) => {
    
    travel.create(req.body, (error, createdTravel)=>{
        if (error) {
            res.send(error)
        } else {
            res.redirect('/trips');
        }
    });
})


module.exports = router