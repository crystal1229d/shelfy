const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const bookStatisticSchema = mongoose.Schema({
    isbn : {
        type:String, 
        trim: true
    },
    number_of_reading : {
        type: Number,
        default: 0
    },
    number_of_reports : {
        type: Number,
        default: 0
    },
    number_of_views : {
        type: Number,
        default: 0
    },
    number_of_likes : {
        type: Number,
        default: 0
    }
}, { timestamps: true })

bookStatisticSchema.index({
    isbn: 'text'
}, {
    weights: {
        isbn: 1
    }
})

const BookStatistic = mongoose.model('BookStatistic', bookStatisticSchema);

module.exports = { BookStatistic }