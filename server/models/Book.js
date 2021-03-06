const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    isbn: {
        type:String
    },
    title: {
        type:String,
        maxlength:60
    },
    author: {
        type: Array,
        default: []
    },
    // plot : {
    //     type:String,
    //     default: '' 
    // },
    // genre : {
    //     type:Array,
    //     default: [] 
    // },
    cover : {
        type:String,
        default: '' 
    },
}, { timestamps: true })

bookSchema.index({
    writer: 'text',
    isbn: 'text',
    title: 'text',
    author: 'text'
}, {
    weights: {
        isbn: 5,
        title: 4
    }
})

const Book = mongoose.model('Book', bookSchema);

module.exports = { Book }