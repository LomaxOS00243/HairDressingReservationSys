const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlReviews = require('../controllers/reviews');

// locations

router
  .route('/locations')
  .get(ctrlLocations.barberReadAll)
  .post(ctrlLocations.barberDetailsCreate);

router
  .route('/locations/:userid')
  .get(ctrlLocations.barberDetailsReadOne)
  .put(ctrlLocations.barberDetailsUpdateOne)
  .delete(ctrlLocations.barberDeleteOne);
  
// reviews
router
  .route('/locations/:userid/reviews')
  .post(ctrlReviews.reviewsCreate);

router
  .route('/locations/:userid/reviews/:reviewid')
  .get(ctrlReviews.reviewsReadOne)
  .put(ctrlReviews.reviewsUpdateOne)
  .delete(ctrlReviews.reviewsDeleteOne);

module.exports = router;
