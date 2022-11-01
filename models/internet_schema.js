const { Schema, model } = require('mongoose');

const internetSchema = Schema(
    {
        country: {
            type: String,
           
        },
        broadband: {
            type: String,
            
        },
        mobile: {
            type: String
            
        },
    },
    { timestamps: true }
);

module.exports = model('Internet', internetSchema);