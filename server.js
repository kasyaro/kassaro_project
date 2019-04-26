//__________________
//Dependencies
//___________________
const express = require('express');
const app = express ();
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const db = mongoose.connection;
//connection to Schema 
const travel = require('./models/model.js')
//connection to seed  data. newTrip used for creating seed data function here.
const newTrips = require('./models/seed.js')
//connection to our controller routes
const tripController = require('./controllers/destenation_controller')
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/trips'+ `creative`;

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});



// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo => same as: " mongoose.connection.once('open', ()=>..."
db.on('open' , ()=>{
    console.log('connected to mongo')
});

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

//controller :
//to get to index.ejs you will use :=>localhost:3000/desteny/trips.
app.use('/desteny', tripController)

//___________________
// Routes
//___________________
//localhost:3000
app.get('/' , (req, res) => {
  res.render('home/index.ejs');
});
//**add seed data to db */
// once we went to localhost:3000/seed in abroweser it adds seed data ;
// than we commentit this function.
// app.get('/seed', (req, res) => {
//     travel.create(newTrips, (err, seedItems)=> {
//         res.send(seedItems)
//     })
// })
//**remark => if we need to replace db => we can do it it directly in terminal:1.type=>'mongo'; 2.'show dbs'; 3.'use "collection name" '; 4. 'db.dropDatabase()'; 5. after we back to seed.js and correct data ; 6. run function to add seed data again (make sure only one time , so not to seed data second round) */
//********************** */
//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on trip port:', PORT));