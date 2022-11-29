const mongoose = require('mongoose');

const dbURI = "mongodb+srv://LomaxOsomba:King56629@serverlessinstance0.qpbx3aj.mongodb.net/barbers?retryWrites=true&w=majority";

try{
    mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.connection.on('connected', () => {
        console.log('Mongoose is connected');
    });
}
catch (error){
    console.log("Could not connect to the database. Exiting now...", error);
}
require('./locations');