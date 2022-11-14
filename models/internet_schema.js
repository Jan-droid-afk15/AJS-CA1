const { Schema, model } = require('mongoose');
//Internet Schema
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
            
        }
    },
    { timestamps: true }
);

module.exports = model('Internet', internetSchema);