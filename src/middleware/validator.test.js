'use strict'

const supertest = require('supertest')

const { app } = require('../server')

const req = supertest(app)

describe('Test the middlewares ', () => {

    it('if the name is in the query string', async () => {
        const res = await req.get('/person?name=');
        expect(res.status).toEqual(500);
    })
    it('test the query if string', async () => {
        const res = await req.get('/person?name=hamza')
        expect(res.body).toEqual({"name": "hamza"});
    })
    it('test the query if number', async () => {
        const res = await req.get('/person?name=6')
        expect(res.status).toBe(500);
    })

})