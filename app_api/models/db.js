const mongoose = require('mongoose');

const dbURI = "mongodb+srv://<name>:<password>@serverlessinstance0.qpbx3aj.mongodb.net/sharpcut?retryWrites=true&w=majority";

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
