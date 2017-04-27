const express = require('express');
const tvHandlers = require('./tv');

module.exports = {
  tv: tvHandlers(express.Router())
};
