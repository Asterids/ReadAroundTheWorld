const router = require('express').Router();
const axios = require('axios');

router.post('/', async (req, res, next) => {
  try {
    const { lat, lon } = req.body;
    const { data } = await axios.get(`https://www.mappit.net/bookmap/apis/?lat=${lat}&lon=${lon}&radius=10`);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
