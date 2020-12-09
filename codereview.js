app.get('/person', validate, (req, res) => {
    //we are expecting something back from the user, how to we accept something from the query?
    //they are sending it witht he key of name
    let output = {
        name: req.query.name
        //I am expecting that something formt he front end url is going to send me something with req.query.name

    }
    res.status(200).json(person);
    //display query name/response back out to them//we need json because we are sending it bak as json because that is the format that we are deciding to send it in//json is better for sending data like objects

    //anytime you are transmitting data you want it to be in json, this is stadnard within the tech community

    //how can I test to see if this works?

    //1. turn on server

    //2. http :3000/person name==george// http pie?//this is the same thing as check localhost in the browser...in http pie you can see your auth process and see your headers, you cna send yourself info in your headers

    //3. Now we need middleware to validate that they sent us a name
})

//middleware

function validate(req, res, next) {
    //the job of this middleware is to make sure the client sent us a name (so the specified request matches the response)
    const name = req.query.name;
    if(!name) { next('name required') } //put something in the next to throw an error//next is built into express//what is called an abort case
    //happy case= else
    //if we get the name we want to post it to the person object
    else { next(); }
    //Now I need to make it work on the person path
    //add validate function as a parameter to person route
    //now I want to modularize it by adding it to its own file
}

IN NEW File
'use strict';

//paste function

//add module.exports = validate;

//in server 

const validate = requoire('./validate');

//you want to bail as soon as possible if there is an error- called an escape clause//when you're writing your program always write your failure clauses first

//validate test
it('should respond properly on request to /person with a name', async() => {
//not only do we want a 200 status but we also want the data back
//to test data: we need to give it data
//create data that we want it to have
const data = { name: 'test' }
//I want my pretend server to make a request on the person route and query for my data
//how will i know if this is the right way to test for my data? read jest documentation
const response = await mockRequest.get('/person').query(data);
expect(response.status).toBe(200);
expect(response.body).toEqual(data);
})

//How would we write a test for an error case?

it('should throw an error if no person is int he query', async() => {
    const data = {}
    const response = await mockRequest.get('/person').query(data);
    expect(response.status).toBe(500);
    })
//HOW WOULD YOU LOOK FOR A WRONG METHOD?

//when does the method come into play? When we do our test.

//validate test to test our validate function
// create a validate.test.js file

'use strict';
//bring in our validator function
const validatorMiddleware = require('../lib/validate');

describe('validator middleware', () => {
    //lets talk about what it does in here

    it('allow requests with a name to go through', () => {
        //now give it a request object
        let request = { query: { name: 'Test'} };
        //need a rresponse because it takes in  a req, res, next
        let res = {};
        //I want to see if next is called
        let next  = jest.fn();//built into jest to spy on the next method
        //call validator middleware

        validatorMiddleware(req, res, next);
        expect(next).toHaveBeenCalledWith(); //no parameters
    })
}
//need to add .test in validate.js

