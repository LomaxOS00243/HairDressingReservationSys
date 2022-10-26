
/* GET 'home' page */
const homelist = function(req, res){
    res.render('location-list', { 
        title: 'Home',
        pageHeader: {
            title: 'SharpCutApp',
            strapline: 'Find the best barber near your area!'},
        locations: [{
                name: 'Lomax theSharper',
                rating: 3,
                adultPrice: 50.00,
                childrenPrice: 30.00,
                address: '125 High Street, Reading, RG6 1PS',
                distance: '200m',
                phoneNumber: '089 123 4567',
                services: ['Haircut', 'Shave', 'Beard Trim'],
                status: 'No'
            },
            {
                name: 'Yuzu Tayishi',
                rating: 4,
                adultPrice: 50.00,
                childrenPrice: 30.00,
                address: '125 High Street, Reading, RG6 1PS',
                distance: '100m',
                phoneNumber: '089 123 4567',
                services: ['Haircut', 'Shave', 'Beard Trim'],
                status: 'Yes'
            },
            {
                name: 'Larissa Queen',
                rating: 5,
                adultPrice: 40.00,
                childrenPrice: 20.00,
                address: '21 Princess Street, Tralee, RG6 1PS',
                distance: '500m',
                phoneNumber: '089 123 4567',
                services: ['Haircut', 'Shave', 'Beard Trim'],
                status: 'No'
            
        }]
        });
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
    