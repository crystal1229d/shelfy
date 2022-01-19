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

module.exports = router;
