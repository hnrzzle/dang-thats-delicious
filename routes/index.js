const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // console.log('hitting / route');
  // res.send('Hey! It works!');
  res.send(req.query);
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  console.log(reverse);
  res.send(reverse);
});

module.exports = router;
