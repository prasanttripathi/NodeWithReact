const mongoose = require('mongoose');
const { Schema } = mongoose; //  this is equal to const Schema = mongoose.Schema;

const userSchema = new Schema({
	googleId: String
});

mongoose.model('users', userSchema);
