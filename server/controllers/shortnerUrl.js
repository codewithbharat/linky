const ShortnerUrl = require('../models/shortnerUrl');
const shortid = require('shortid');
const validUrl = require('valid-url');



const shorten = async (req, res) => {
    const { url } = req.body;

    const urlCode = shortid.generate();

    if (validUrl.isUri(url)) {
        try {
            const item = await ShortnerUrl.findOne({ url });

            if (item) {
                res.status(200).json(item);
            } else {
                const item = new ShortnerUrl({
                    url,
                    hash: urlCode,
                    clicks: 0,
                    shortUrl: process.env.BASE_URL + '/' + urlCode,
                    date: new Date().now
                });

                await item.save();

                res.status(200).json(item);
            }
        } catch (err) {
            res.status(401).json('Invalid User Id');
        }
    } else {
        res.status(401).json('Invalid Url');
    }
};

const redirect = async (req, res) => {
    try {
        const item = await ShortnerUrl.findOne({ hash: req.params.hash });

        if (item) {
            item.clicks++;
            item.save();

            res.redirect(item.url);
        } else {
            res.status(404).json('No item found');
        }
    } catch (err) {
        res.status(401).json('Invalid User Id');
    }
};

module.exports = { shorten, redirect };