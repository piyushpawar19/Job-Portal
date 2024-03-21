const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect("mongodb+srv://piyush-jobportal:jobportal@cluster0.0pdtyn8.mongodb.net/jobportal",{
            useNewUrlParser: true
        })
        console.log(`server is connected to database`);
    } catch (error) {
        console.log(error);
    }
}
// module.exports= { connectDB};
// exports.connectDB = connectDB;
module.exports = connectDB