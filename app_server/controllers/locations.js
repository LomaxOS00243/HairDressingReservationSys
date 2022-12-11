

const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'still-woodland-90107.herokuapp.com/';
}


/* GET 'home' page */
const homelist = (req, res) => {
    const path = '/api/locations';
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {},
        qs : {
            lng : -0.7992599,
            lat : 51.378091,
            maxDistance : 20
        }
    };
    request(
        requestOptions,
        (err, response, body) => {
            let data = body;
            if (response.statusCode === 200 && data.length) {
                for (let i = 0; i < data.length; i++) {
                    data[i].distance = _formatDistance(data[i].distance);
                }
            }

        renderHomepage(req, res, data);
        }
    );
};
const renderHomepage = (req, res, responseBody) => {
    let message = null;
    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No barbers found nearby";
        }
    }
    
    res.render('location-list', { 
        title: 'Home',
        pageHeader: {
            title: 'SharpCutApp',
            strapline: 'Find the best barber near your area!'
        },
        
        barbers: responseBody,
        message: message
        });
        
};
const _formatDistance = function (distance) {
    if (distance && _isNumeric(distance)) {
      let thisDistance = 0;
      let unit = 'm';
      if (distance > 1000) {
        thisDistance = parseFloat(distance / 1000).toFixed(1);
        unit = 'km';
      } else {
        thisDistance = Math.floor(distance);
      }
      return thisDistance + unit;
    } else {
      return '0m';
    }
  };

    /* GET 'Signup form' page */
const signupForm = function(req, res){
    res.render('signup', { 
        pageHeader: {
            title: 'Sign Up',
            strapline: 'Create an account to receive appointments from awesome customers.'},
     });
};

    /* GET 'Login form' page */
const loginForm = function(req, res){
    res.render('login', { 
        pageHeader: {
            title: 'Login',
            strapline: 'Login to your account for your appointments.'},
     });
};
    /* GET 'Add review' page */
const addReview = function(req, res){
    res.render('index', { title: 'Add review' });
    };
    
module.exports = {
    homelist,
    signupForm,
    loginForm,
    addReview
    };
    