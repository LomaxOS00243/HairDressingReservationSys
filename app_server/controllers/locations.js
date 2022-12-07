

//https://localservices01.herokuapp.com/
//create a call of api with request module
//request module is a module that allows us to make http calls
const request = require('request');
//create a function that will be called when the user clicks on the button
//this function will make a call to the api
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://localservices01.herokuapp.com/';
}

const _formatDistance = function (distance) {
    let thisDistance = 0;
    let unit = 'm';
    if (distance > 1000) {
        thisDistance = parseFloat(distance / 1000).toFixed(1);
        unit = 'km';
    } else {
        thisDistance = Math.floor(distance);
    }
    return thisDistance + unit;
};

const renderHomepage = (req, res, responseBody) => {
    let message = null;
    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No places found nearby";
        }
    }
    res.render('location-list', { 
        title: 'Home',
        pageHeader: {
            title: 'SharpCutApp',
            strapline: 'Find the best barber near your area!'},
        locations: responseBody,
        });
};


/* GET 'home' page */
const homelist = function(req, res){
    const path = '/api/locations';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
        qs: {
            lng: -0.9690884,
            lat: 51.455041,
            maxDistance: 20
        }
    };
    request(
        requestOptions,
        (err, response, body) => {

        renderHomepage(req, res, body);
        }
    );
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
    