'use strict';

const { server } = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
    it('should respond with a 404', () => {
      return mockRequest
        .get('/bananas')
        .then(results => {
          expect(results.status).toBe(404)
        }).catch(console.error);
    })
    it('should respond with a 500', () => {
        return mockRequest
        .get('/person')
        .then(results => {
            expect(results.status).toBe(500) 
        }).catch(console.error);
    })
})