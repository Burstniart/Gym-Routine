const mongoose = require ('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    //userNewUrlParser: true // Error thing
})
    .then(db => console.log('DB online'))
    .catch(err => console.log(err));
