import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    await mongoose.connect("mongodb+srv://aryan1707:7766040569@cluster0.0tsxkoe.mongodb.net/food-del");
    console.log("DB CONNECTED");
  } catch (error) {
    console.error("DB CONNECTION ERROR:", error.message);
    process.exit(1);
  }
};
