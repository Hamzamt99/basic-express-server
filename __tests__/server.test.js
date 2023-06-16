'use strict'

const supertest = require('supertest')

const { app } = require('../src/server')

const req = supertest(app)

describe('Test the Error Handlers', () => {

    it('Bad Route 404', async () => {
        const res = await req.get('/notfound');
        expect(res.status).toEqual(404);
    })
    it('Bad Method 404', async () => {
        const res = await req.post('/person/name');
        expect(res.status).toEqual(404);
    })
})
