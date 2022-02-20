const express = require('express')
const router = express.Router()
const {nanoid} = require('nanoid')
const urlSchema = require('../models/urlSchema')
const urlValidator = require('../functions/validate')

router.post('/short', async (req, res)=>{
    //base URL in the env file
    const base = process.env.BASE;
    //generate a new string for short url from imported nanoid module
    const urlID = nanoid();
    //destructure the url original as body of request
    const {urlOriginal} = req.body;

    //check if the original URL is valid 
    if (urlValidator.validateUrl(urlOriginal)){
        try {
            //check if the URL already exists
            let url = await urlSchema.findOne({urlOriginal});
            //if it does, return it in json format
            if(url){
                res.json(url);
            }else{
            //if no, create a new short url out of base and generated ID
                const urlShort = `${base}/${urlID}`;
                //create a new url object in URL schema database
                url = new urlSchema({
                    urlOriginal,
                    urlShort,
                    urlID,
                    date: new Date(),
                });
                //save the url and return the response
                await url.save();
                res.json(url);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json('Server error')
        }
    }else {
        res.status(400).json('Invalid URL')
    }
});

module.exports = router;