const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // console.log('hitting / route');
  // res.send('Hey! It works!');
  res.send(req.query);
});

router.get('/reverse/:name', (req, res) => {
  res.send('hey it works');
})

module.exports = router;
