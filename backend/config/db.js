import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://manojmangodb:Manoj1882000@cluster0.vdur5qv.mongodb.net/food-del ').then(()=>console.log("DB Connected"))
}