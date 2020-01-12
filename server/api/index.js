const router = require('express').Router();

router.use('/getBooks', require('./getBooks'));

router.use((req, res, next) => {
  const err = new Error('404 Not found.');
  err.status = 404;
  next(err);
})

module.exports = router;
