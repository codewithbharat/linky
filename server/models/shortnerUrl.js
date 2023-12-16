const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shortnerUrlSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    hash: {
        type: String,
        required: true,
    },

    clicks: {
        type: Number,
        required: true,
        default: 0,
    },

    shortUrl: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now,
    }

});

module.exports = mongoose.model('ShortnerUrl', shortnerUrlSchema);