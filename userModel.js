const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const JWT= require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: [true, "name is required"],
    },
    lastname: {
      type: "string",
    },
    email: {
      type: "string",
      required: [true, "email is required"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: "string",
      required: [true, "password is required"],
      select: true,
    },
    location: {
      type: "string",
      default: "India",
    },
  },
  { timestamps: true }
);

//middleware
userSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

//json web token
userSchema.methods.createJWT = function(){
    const key = 'qskdkkjfjl458@3*&';
    return JWT.sign({userId : this._id},key,{expiresIn:'1d'});
}

module.exports = mongoose.model("User", userSchema);
