const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prayerSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    date: {
        type: Number
    },
}, {
        timestamps: true,

    });

module.exports = Prayer = mongoose.model('prayer', prayerSchema);