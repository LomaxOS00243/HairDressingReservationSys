const mongoose = require('mongoose');
const Loc = mongoose.model('Barber');

const _buildLocationList = function(req, res, results, stats) {
  let barbers = [];
  results.forEach((doc) => {
    barbers.push({

      name: doc.obj.name,
      rating: doc.obj.rating,
      price: doc.obj.price,
      address: doc.obj.address,
      city: doc.obj.city,
      distance: doc.dis,
      phoneNumber: doc.obj.phoneNumber,
      services: doc.obj.services,
      available: doc.obj.available,
      _id: doc.obj._id
    });
  });
  return barbers;
};

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
  const maxDistance = parseFloat(req.query.maxDistance);
  const point = {
    type: "Point",
    coordinates: [lng, lat]
  };
  const geoOptions = {
    spherical: true,
    maxDistance: 20000,
    num: 10
  };
  if ((!lng && lng !==0 ) || (!lat && lat !== 0) || !maxDistance) {
    console.log('locationsListByDistance missing params');
    res
      .status(404)
      .json({
        message : 'lng, lat and maxDistance query parameters are all required'
      });
    return;
  }
  Loc.geoNear(point, geoOptions, (err, results, stats) => {
    const barbers = _buildLocationList(req, res, results, stats);
    console.log('Geo Results', results);
    console.log('Geo stats', stats);
    res
      .status(200)
      .json(barbers);
  });
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
const barberReadAll = function (req, res) {
  Loc
    .find()
    .exec((err, barbers) => {
      if (!barbers) {
        return res
          .status(404)
          .json({
            "message": "barbers not found"
          });
      }else if (err) {
        return res
          .status(404)
          .json(err);
      }
      res
        .status(200)
        .json(barbers);
    });
};


module.exports = {
  barberListByDistance,
  barberDetailsCreate,
  barberDetailsReadOne,
  barberDetailsUpdateOne,
  barberDeleteOne,
  barberReadAll
};
