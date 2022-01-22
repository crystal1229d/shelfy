const express = require('express');
const router = express.Router();
const { BookReport } = require("../models/BookReport");

//=================================
//          BookReport
//=================================

router.post("/", (req, res) => {

    // INSERT
    const bookReport = new BookReport(req.body);

    bookReport.save((err) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json( { success: true })
    });

});

router.post("/bookReports", (req, res) => {
    // GET
    let limit = req.body.limit ? parseInt(req.body.limit) : 20;
    let skip = req.body.skip ? parseInt(req.body.skip) : 0;

    let findArgs = {};

    BookReport
        .find(findArgs)
        .populate("writer")
        .skip(skip)
        .limit(limit)
        .exec((err, bookReportInfo) => {
            if (err) return res.status(400).json({ success: false, err })
            return res.status(200).json({
                success: true,
                bookReportInfo,
                dataSize: bookReportInfo.length 
            })
        })

})

module.exports = router;
