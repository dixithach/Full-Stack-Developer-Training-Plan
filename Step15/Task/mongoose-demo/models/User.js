// models/User.js
const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: { type: String },
  city: { type: String },
  zip: { type: String }
}, { _id: false }); // embedded subdocument, no separate _id

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    unique: true, // creates unique index
    lowercase: true
  },
  age: { type: Number, min: 0 },
  role: {
    type: String,
    enum: ['user','admin','moderator'],
    default: 'user'
  },
  address: addressSchema,
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true // adds createdAt and updatedAt automatically
});

// virtual field (not stored in DB)
userSchema.virtual('isAdult').get(function() {
  return this.age >= 18;
});

// example of document middleware
userSchema.pre('save', function(next) {
  // `this` is the doc being saved
  // e.g., update a clean name or set defaults
  this.name = this.name.split(' ')
    .map(s => s[0].toUpperCase() + s.slice(1))
    .join(' ');
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
