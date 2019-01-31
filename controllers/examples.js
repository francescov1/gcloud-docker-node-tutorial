'use strict';
const User = require('../models/user');

module.exports = {

  createUser: function(req, res, next) {
    const { email, name } = req.body;

    const user = new User({ name, email });
    return user.save()
      .then(user => res.status(201).send(user))
      .catch(err => next(err));
  },

  getUser: function(req, res, next) {
    return User.findById(req.params.id)
      .then(user => res.status(200).send(user))
      .catch(err => next(err));
  }
  
};
