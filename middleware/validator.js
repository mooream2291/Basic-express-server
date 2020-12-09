'use strict';


function validator(req, res, next) {
  if(req.query.name) {
    res.status(200).json(req.query);
    next();
  } else {
    next(res.status(500).json('no name exists'));
  }
}
module.exports = validator;