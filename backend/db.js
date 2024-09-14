const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://221210025:aryaman14%40@cluster0.x4x702w.mongodb.net/arya");

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}