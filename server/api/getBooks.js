const router = require('express').Router();
const axios = require('axios');

const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_MAPS_KEY,
  Promise: Promise
});

router.post('/', async (req, res, next) => {
  try {
    const { address } = req.body;

    const { json: { results } } = await googleMapsClient.geocode({ address }).asPromise()
    const [{
      geometry: {
        location: { lat, lng }
      }
    }] = results;

    const { data } = await axios.get(`https://www.mappit.net/bookmap/apis/?lat=${lat}&lon=${lng}&radius=10`);

    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
