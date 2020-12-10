//like constructor functions
//pretty new, didn't exist until recently

//make a constructor function for cats

const Cats = function (name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.speak = function() {
        console.log(`${this.name} says meow`);
    }
}

const chief = new Cats('chief', 'black and white', 9);

//turn the new Cat into a class

class Cat {
    constructo(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }

    speak = function() {
        console.log(`${this.name} says meow`);
    }
}

const bendy = new Cats('bendy', 'black', 3);
bendy.speak();
//what do classes do that constructors dont? They can be extended

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak = function() {
        console.log(`${this.name} is speaking`);
    }
}

class Dog extends Animal {
    constructor(props){
        //props is just an object that is going to hold all of my arguments
        super(props); //this takes all of my properties from animal and puts them into dog class
        this.breed = props.breed;
    }
}

const cookie = new Dog({breed: 'mutt', name: 'cookie', age: 9});
cookie.speak();

//we will use a library called router to modularize our routes
//this will make our rode really clean and really radable

//create a server.js

//express server

'use srtict';

//bring in dependencies
//npm i to install them
require('dotenv').config();
const express = require('express');
//to initialize
const app = express();
//require middleware
const logger = require('./middleware/logger');
const notFoundHandler = require('./error-handler/404');
const serverError = require('./error-handler/500'); 
//still need route for 500 error handler

//create PORT

const PORT = process.env.PORT;

//demo port to test proof of life
app.use(logger);
//app.use needs to be aobve route, middleware won't work unless it comes before route in the code
//real world purpose of the logger: debugging
app.get('/demo', demoCllbackHandler);

function demoCallbackHandler(req, res, next) {
    res.status(200).send('alive');
}

//CRUD - CREATE - READ - UPDATE  - DELTE
//REST - post     get    put      delete
//I want to be able to create a route where someone can hit my API and get all of the information
//waht kind of route would i make?

app.get('/bananas', getBananas);
//get one banana
app.get('/bananas/: id', getOneBanana)
app.post('/bananas', createBanana);
app.delete('/bananas/: id', deleteBanana);
app.put('/bananas', updateBanana);

//RESTful route handlers
function getBananas(req, res) {
    const allBananas = bananas.get()
    res.status(200).json(allBananas);
}
//create a banan model directoy
//in this file:
class BananaModel {
    //need a db to hold all of my bananas
    //classes are just a factory,they are not making the thing
    constructor(){
        this.id = 0;
        this.db = [];
    }
    // [{ id: x, ...record}, {id: x, ...record}]
    //what this means is that, I have this object with a key of id, but I know there are other keys and values in this record (but I don't knwo what they are yet, so ...record says take everything else and put it in here)

    get(id){
        if(id){
            //this would be for the getOneBanana
         return this.db.find(record => record.id === id)//this find the first thing that matches //this says when we get an id find a record hat exactly matches that id
        } else {
            //this would be for getAllBananas
            return this.db;
        } 
        }

        create(obj) {
            obj.id = ++this.id;
            this.db.push(obj);
            //if you create something waht do you expect to get in return? the object
            //so return obj
            return obj;
        }
        update(id, obj){
            if (!id) {return null}
                
                //TODO: figure out how to update an object
                return obj;
        }

        delete(id) {
            if(!id) {return null}

            //TODO" figure out delete, should expect a service message to be returned
            return null;

            //send something back to the user that lets them know there is no id
        }
    }
}

function getOneBanana(req, res) {
    const id = req.params.id;
    const oneBanana = bananas.get(id);
    res.status(200).json(oneBanana);
}

function createBanana(req, res) {
    const obj = req.body;
    const newBanana = bananas.create(obj)//this object comes from the request, specifically the body
    res.status(200).json(newBanana);
}

function deleteBanana(req, res) {
    const getId = req.params.id
    res.status(200).send('deleting banana');
}

function UpdateBanana(req, res) {
    res.status(200).send('update banana');
}
app.use('*', notFoudnHandler);
app.use(serverError);
//ADD ENV FILE W/ PORT NUMBER

//how do I turn it on?: 

module.exports = {
    server: app,
    start: port => {
        if(!PORT) { throw new Error('missing port');}
        app.listen(PORT, () => {
            console.log(`listening on ${PORT}`);
        })
    }
}
//challenge yourself to refactor your code

//from index.js
'use strict';

const server = require(''./src/server');

server.start(process.env.PORT)

//first do proof of life to make sure that our server is workig//create a demo route
//lets make a logger middleware that logs our routes

//create a middleware folder
//create a logger.js file to log routes

//in logger.js

'use strict';

module.exports = (req, res, next) => {
    console.log(`METHOD: ${req.method}, path: ${REQ.PATH}`);
    next();

    //then need to rewuire it in myserver to make it work
}

//create an error-handler folder
//create a 404.js and a 500.js

//in 404.js

'use strict';

function notFoundHandler (req, res, next) {
    res.status(404).send('resource not found');
}

module.exports = notFoundHandler;

//then brin into server

//in 505.js

'use strict';

function serverError(err, req, res, next) {
    res.stutus(500).send('server error', err);
}

module.exports = serverError;

//create a routes folder
//create a banana-routes.js

const express = require('express');
const Bananas = require('../models/banana');
const bananas = new Bananas();
//making a new instance from my bananas facotry, now i can call get method on that instance

const router = express.Router();
//everywhere that I have app I will replace with the word "router"
//put banana routes in this folder and take out of server.js

//do module.exports(router);

//to bring into server:
//in server.js
const bananaRoute = require('./routes/banana-routes');
//my middleware
app.use(express.json());
app.use(logger);
app.use(bananaRoutes);
