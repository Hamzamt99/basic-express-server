'use strict'

module.exports = function logger(req,res,next){
    console.log(`This the method ${req.method} This is the path ${req.path}`)
    next();
}