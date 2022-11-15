
/* GET 'home' page */
const homelist = function(req, res){
    res.render('location-list', { title: 'Home' });
    };

    /* GET 'Signup form' page */
const signupForm = function(req, res){
    res.render('signup', { title: 'Sign Up' });
};

    /* GET 'Login form' page */
const loginForm = function(req, res){
    res.render('login', { title: 'Login' });
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
    