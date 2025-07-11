import mongoose from "mongoose";
const foodschema = new mongoose.Schema({
    name: {type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category :{type:String,required:true}
})
const foodmodel = mongoose.models.food || mongoose.model("food" , foodschema)
export default foodmodel;