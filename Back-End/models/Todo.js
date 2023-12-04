import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
})

const TodoModel = mongoose.model("Todotask",TodoSchema)

export {TodoModel}