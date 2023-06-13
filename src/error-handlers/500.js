'use strict'

// error parameter not working
module.exports = function Error500(req,res){
    res.status(500).json({
        Errorcode: 500,
        message: 'Code Error',
        path : req.originalUrl 
    })

}