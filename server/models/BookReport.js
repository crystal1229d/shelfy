const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const bookReportSchema = mongoose.Schema({
    writer : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    isbn : {
        type:String, 
        ref: 'Book',
        trim: true
    },
    title : {
        type:String,
        maxlength:20
    },
    subTitle : {
        type:String,
        maxlength:20
    }, 
    report : {
        type:String,
        default: '' 
    },
    rating : {
        type: Number,
        default: 3.5
    },
    tag : {
        type:Array,
        default: [] 
    },
    thumbnail : {
        type:String,
        default: [] 
    },
    likes : {
        type: Number,
        default: 0
    },
    views : {
        type: Number,
        default: 0
    }
}, { timestamps: true })

bookReportSchema.index({
    writer: 'text',
    isbn: 'text',
    title: 'text',
    subTitle: 'text',
    tag: 'text'
}, {
    weights: {
        isbn: 4,
        title: 3,
        subTitle: 2,
        writer: 1 
    }
})

const BookReport = mongoose.model('BookReport', bookReportSchema);

module.exports = { BookReport }