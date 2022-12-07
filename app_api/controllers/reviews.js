const mongoose = require('mongoose');
const Loc = mongoose.model('Barber');

const reviewsCreate = function (req, res) { 
    res
        .status(200)
        .json({"status" : "success"});
};
const reviewsReadOne = function (req, res) {
    Loc
      .findById(req.params.userid)
      .select('name reviews')

      .exec((err, barber) => {
        if (!barber) {
          return res
            .status(404)
            .json({
              "message": "barber not found"
            });
        } else if (err) {
          return res
            .status(400)
            .json(err);
        }
        //check if the result in barber has column reviews and that it has at least one element
        if (barber.reviews && barber.reviews.length > 0) {

            //create an object review that hold id of the result which is in the barber.reviews array
          const review = barber.reviews.id(req.params.reviewid);
          if (!review) {
            return res
              .status(400)
              .json({
                "message": "review not found"
            });
          } else {
            response = {
              barber : {
                name : barber.name,
                id : req.params.locationid
              },
              review
            };
            return res
              .status(200)
              .json(response);
          }
        } else {
          return res
            .status(404)
            .json({
              "message": "No reviews found"
          });
        }
      }
    );
 };
const reviewsUpdateOne = function (req, res) {
    res
        .status(200)
        .json({"status" : "success"});
 };
const reviewsDeleteOne = function (req, res) {
    res
        .status(200)
        .json({"status" : "success"});
 };

module.exports = {
  reviewsCreate,
  reviewsReadOne,
  reviewsUpdateOne,
  reviewsDeleteOne
};
