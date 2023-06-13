'use strict'

module.exports = function validator(req, res, next) {
    let param = req.params.name;
    if(isNaN(+param)){   
        req.query = param;
        next();
    } 
    next(500)
}