'use strict';


function validator(req, res, next) {
    const name = req.query.name;

    if (!name) {
        next('no name exists')
    } else {
        next();
    }
}
module.exports = validator;