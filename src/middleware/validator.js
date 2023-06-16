'use strict'

module.exports = function validator(req, res, next) {
    let query = req.query.name;
    if(isNaN(+query)){   
        req.query = query;
        next();
        console.log(query)
    }else {
        next(500)
    }
}