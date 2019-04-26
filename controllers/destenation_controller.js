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
//INDEX route for client list trips.
router.get('/newlist', (req, res) => {
    travel.find({}, (error, newTrips)=>{
        res.render('newlist.ejs', {
            trip: newTrips
        });
    })
})

//** */ NEW (CLIENT create)
//take to the page : http://localhost:3000/desteny/new
router.get('/new', (req, res) => {
    res.render('new.ejs')
})
// CREATE (SERVER)
router.post('/newlist', (req, res) => {
    //created new travel(model) in db.
    travel.create(req.body, (error, createdTravel)=>{
        console.log(req.body)
        if (error) {
            res.send(error)
        } else {
            res.redirect('/desteny/newlist');
        }
    });
})

//******* SHOW ROUTE */
router.get('/desteny/show/:id', (req,res) => {
    travel.findById(req.params.id, (err, showTrip)=> {
        res.render('show.ejs', {
            trip: showTrip
        })
    })
    })
    

module.exports = router