const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase : true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true  
    },
    createdAt: { 
        type: String,
        default: new Date().toLocaleString()
    }
});


module.exports = mongoose.model('User', userSchema) 


