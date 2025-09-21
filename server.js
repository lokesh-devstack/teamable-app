//import the express
const express = require('express')
// instantiate the express library
const app = express ()
//import the bodyParser library
// parse the http request sent from the frontend
const bodyParser = require('body-parser')

//parse request body of any request into JSON
app.use(bodyParser.json)

//serve the index.html file on the very first payload 
app.use('/', express.static(__dirname + '/dist'))
//what does this really mean? help me understand?
//ANSWER:
//The line basically tells the express app to serve static files from a specific folder 
//in this case, the root directory of the project

//logic to start the application on a specific port 
app.listen(3000, function (){
    console.log("App listening on port 3000")
})



