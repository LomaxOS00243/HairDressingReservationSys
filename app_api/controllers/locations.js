const mongoose = require('mongoose');
const Loc = mongoose.model('Barber');

const barberDetailsCreate = function (req, res) {
    Loc.create({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        rating: req.body.rating,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        services: req.body.services,
        price: [{
          adult: req.body.adult,
          child: req.body.child}],
        coords: [
          parseFloat(req.body.lng), 
          parseFloat(req.body.lat)
        ],
        openingTimes: [{
            days: req.body.days1,
            opening: req.body.opening1,
            closing: req.body.closing1,
            closed: req.body.closed1,
        }, {
            days: req.body.days2,
            closed: req.body.closed2,
        }],
        /*reviews: [{ 
          author: req.body.author, 
          rating: req.body.rating, 
          reviewText: req.body.reviewText, 
          createdOn: req.body.createdOn 
        }],*/
        available: req.body.available
    }, (err, barber) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(barber);
        }
    });
 };
const barberListByDistance = function (req, res) { 
    const lng = parseFloat(req.query.lng);
    const lat = parseFloat(req.query.lat);
    const near = {
      type: "Point",
      coordinates: [lng, lat]
    };
    const geoOptions = {
      distanceField: "distance.calculated",
      key: 'coords',
      spherical: true,
      maxDistance: 20000,
      limit: 10
    };
    if (!lng || !lat) {
      return res
        .status(404)
        .json({
        "message": "lng and lat query parameters are required"
      });
    }
    try {
      const results = Loc.aggregate([
        {
          $geoNear: {
            near,
            ...geoOptions
          }
        }
      ]);
      const users = results.map(result => {
        return {
          id: result._id,
          name: result.name,
          address: result.address,
          rating: result.rating,
          facilities: result.facilities,
          distance: `${result.distance.calculated.toFixed()}m`
        }
      });
      res
      .status(200)
      .json(users);
  }catch (err) {
    res
      .status(404)
      .json(err);
  }
};
const barberDetailsReadOne = function (req, res) { 
  if(req.params && req.params.userid) {
    Loc
      .findById({_id: req.params.userid})
        .exec((err, user) => {
          if (!user) {
            return res
              .status(404)
              .json({
                "message": "user id not found"
              });
          }else if (err) {
            return res
              .status(404)
              .json(err);
          }
          res
            .status(200)
            .json(user);
        });
      }else{
        res
          .status(404)
          .json({
            "message": "No user id in request"
          });
      }

};
const barberDetailsUpdateOne = function (req, res) { 
    res
        .status(200)
        .json({"status" : "success"});
};
const barberDeleteOne = function (req, res) { 
    res
        .status(200)
        .json({"status" : "success"});
};

module.exports = {
  barberListByDistance,
  barberDetailsCreate,
  barberDetailsReadOne,
  barberDetailsUpdateOne,
  barberDeleteOne
};
