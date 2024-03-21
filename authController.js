const userModel = require("../models/userModel");

const registerController = async (req, res,next) => {

    const { name, email, password } = req.body;
    //validate
    if (!name) {
      next('Please enter name');
    }
    if (!email) {
      next('Please enter a valid email')
    }
    if (!password) {
      next('password required')
    }

    // const existingUser = await userModel.findOne({ email });

    // if (existingUser) {
    //   next("Email already registered Please login")
    // }

    const user = await userModel.create({name,email,password});
    //token creation
    const token = user.createJWT();
    res.status(201).send({
        success:true,
        message:"User Created successfully",
        user,
        token
    });

};

module.exports = registerController;
