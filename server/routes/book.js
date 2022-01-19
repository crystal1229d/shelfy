const express = require('express');
const router = express.Router();
const { Book } = require("../models/Book");

//=================================
//             Book
//=================================

router.post("/", (req, res) => {

    // INSERT
    const book = new Book(req.body);

    book.save((err) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json( { success: true })
    });

});

router.post("/books", (req, res) => {

    // GET
    let limit = req.body.limit ? parseInt(req.body.limit) : 20;
    let skip = req.body.skip ? parseInt(req.body.skip) : 0;
    
    let findArgs = {};

    Book
        .find(findArgs)
        .populate("writer")
        .skip(skip)
        .limit(limit)
        .exec((err, bookInfo) => {
            if (err) return res.status(400).json({ success: false, err })
            return res.status(200).json({
                success: true,
                bookInfo,
                dataSize: bookInfo.length
            })
        })

})

router.get('/books_by_id', (req, res) => {

    let type = req.query.type;
    let bookIds = req.query.id 

    if (type === 'array') {

    }

    Book
        .find({ _id: { $in: bookIds }})
        .populate('writer')
        .exec((err, bookInfo) => {
            if (err) return res.status(400).json({ success: false, err })
            return res.status(200).json({
                success: true,
                bookInfo,
                dataSize: bookInfo.length 
            })
        })


})

module.exports = router;
