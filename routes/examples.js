'use strict';
const User = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
  const { email, name } = req.body;
  const user = new User({ name, email });
  return user.save()
    .then(user => res.status(201).send(user))
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  return User.findById(req.params.id)
    .then(user => res.status(200).send(user))
    .catch(err => next(err));
});

module.exports = router;
