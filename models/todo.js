let mongoose = require('mongoose')

let todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required:'Name cannot be blank'
    },
    completed: {
        type: Boolean,
        defalt: false
    },
    created_data: {
        type: Date,
        default: Date.now
    }
})

let Todo = mongoose.model('Todo', todoSchema)

module.exports  = Todo