const express = require('express');
const router = express.Router();
const URL = require ('../models/urlSchema')

router.get('/:urlID', async (req, res) => {
    try {
        const url = await URL.findOne({urlID: req.params.urlID});
        if (url){
            url.clicks++;
            url.save();
            return res.redirect(url.urlOriginal)
        } else {
            res.status(404).json('Not found');
        }
    } catch (error) {
        console.log(error);
        res.status(500).json('Server error')
    }
})

module.exports = router