'use strict';
//bring in our validator function
const validatorMiddleware = require('../middleware/validator');

describe('validator middleware', () => {
    //lets talk about what it does in here

    it('allow requests with a name to go through', () => {
        //now give it a request object
        let req = { query: { name: 'Test'} };
        //need a rresponse because it takes in  a req, res, next
        let res = {};
        //I want to see if next is called
        let next  = jest.fn();//built into jest to spy on the next method
        //call validator middleware

        validatorMiddleware(req, res, next);
        expect(next).toHaveBeenCalledWith(); //no parameters
    });
});
