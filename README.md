 # kassaro_project
TITLE: " Travel Guide".
Project_2 Duration: "week" 
A README.md file with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc.

CREATOR: Alexandra Romanova 
COMPETENCIES: 
full CRUD app using the technologies such as : 
1. A working full-stack application, built by using Node.js, Mongoose, Express and EJS
2. Adhere to the MVC file structure: Models, Views, Controllers
3. Use a CSS framework like Skeleton or Bootstrap
4. one model with all 7 RESTful routes and full CRUD.

SET UP: 
 1. Wireframe , planning. 
Idea , style , layouts .

2. Connecting project to a browser . 
Installing inside the project trought the terminal  : npm i express ejs method-override 
mongoose. 
Pushing project with git hub and huroku sites. 
 
 3. Establish functionality .
  Creating files for 7 routes : index, show ,new , create, edit, update, delite, . 
 Test the index route in a browser ,make sure "mongod" and "nodemon" is running in a terminal.*
<!-- INDEX -->
 Creating Data base: => Seed the data: in a seed.js create an array with objet-data, than in server.js seed this data one time with a special function and comment this function out later.
 <!-- ****** -->
Creating a model for data : => creating Schema for our data in a model.js.

Make sure we added data to database and it showed in a browser. 
Example of index rote: 
 app.get('/' , (req, res) => {
  res.render('home/index.ejs');
});
<!-- SHOW -->
Create additional fole "destanation-controller.js" that will contain all other routes. Connect controller to cerver.js. 
Eample : 
app.get('/fruits/:index', (req, res) => {
    const currentFruit = fruits[req.params.index]
    res.render('show.ejs', { //second param must be an object
        fruit: currentFruit //there will be a variable available inside the ejs file called fruit, its value is fruit
    });
});     
Than I access the data in the view folder => show.ejs => that is your html that appear in a browser.
<%= %> run some javascript and insert the result of the javascript into the HTML.

  <!-- CREATE -->

  Example: 
  app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ // if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true
    } else { // if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    res.send(req.body)
})

Use cURL in the terminal to test a POST request** => curl -X POST -d name="kiwi" -d color="green" -d readyToEat="on" localhost:3000/fruits

<!-- EDIT -->
create a GET route which will just display an edit form for a single travel.
In my newlist.ejs I  created the form for edit button.
Example: 
<a  class="btn btn-secondary btn-sm btn-warning" 
                href="/desteny/newlist/<%=tripnew[j].id;%>/edit"> EDIT </a> 
Example: 
app.get('/fruits/:index/edit', (req, res)=>{
	res.render(
		'edit.ejs', //render views/edit.ejs
		{ //pass in an object that contains
			fruit: fruits[req.params.index], //the fruit object
			index: req.params.index //... and its index in the array
		}
	)
})
<!-- Update -->
In order to UPDATE, we use the http verb PUT.
Example: 
app.put('/fruits/:index', (req, res) => { // :index is the index of our fruits array that we want to change
	if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
		req.body.readyToEat = true
	} else { //if not checked, req.body.readyToEat is undefined
		req.body.readyToEat = false
	}
	fruits[req.params.index] = req.body //in our fruits array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
	res.redirect('/fruits'); //redirect to the index page
})
Make the edit page send a PUT request:=> edit.ejs
 the form needs to make a PUT request to our update route
Example: => for edit.ejs
<form action="/fruits/<%=index%>?_method=PUT" method="POST">

<!-- DELETE -->
In my newlist.ejs I  created the form for delete button.
Example: 
 <form  action="/desteny/newlist/<%=tripnew[j].id; %>?_method=DELETE" method="POST">
and in my controller folderI created a delete route.
Example: 
app.delete('/fruits/:id', (req, res)=>{
    Fruit.findByIdAndRemove(req.params.id, (err, deletedFruit)=>{
        res.redirect('/fruits');//redirect back to fruits index
    });
});

4. CSS style , googlefonts, flexbox , bootstrap frame weere used in this project .