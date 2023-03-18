const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.connect(process.env.DB);

db.on('error', console.error.bind(console, 'MongoDB Connection Error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

module.exports = db;
