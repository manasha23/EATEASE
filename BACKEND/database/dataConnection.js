import mongoose from "mongoose"


export const dbConnection = () => {
const connect=mongoose.connect("mongodb://localhost:27017/MERN-ReactJS")

connect.then(() =>{
    console.log("Database connected successfully");
}) 
.catch(()=>{
    console.log("Database cannot be connected");
});
};