/**
 * hook.js
 * @author Vivian
 * @version 1.0.0
 * copyright 2014-2016, gandxiaowei@gmail.com all rights reserved.
 */
const express = require('express');
const router = express.Router();

router.post('/', (req, res, next)=> {
  let {type} = req.query;
  switch (type) {
    case 'github':
      break;
    case 'gitlab':
      break;
    default:
      break;
  }
  res.send({type: type});
});

module.exports = router;
