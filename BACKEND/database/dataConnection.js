import mongoose from "mongoose"


export const dbConnection = () => {
const connect=mongoose.connect("mongodb+srv://manasashettigar0123:b6VyHqEjdAQa5NMO@cluster0.c1kiykt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

connect.then(() =>{
    console.log("Database connected successfully");
}) 
.catch(()=>{
    console.log("Database cannot be connected");
});
};
