const dotenv=require("dotenv");
dotenv.config();

const mongoose=require("mongoose");
// const mongoURI="mongodb://127.0.0.1:27017/inotebook";
const mongoURI=process.env.MONGO_URI;
mongoose.set('strictQuery', true);
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to database");
    })
}

module.exports=connectToMongo

