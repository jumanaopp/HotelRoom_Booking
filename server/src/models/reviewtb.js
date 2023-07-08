const mongoose = require('mongoose')

const schema = mongoose.Schema
const reviewschema = new schema({
        name : {type:String},
       email : {type:String},
       review: {type:String}
})
const reviewmodel = mongoose.model("review_tb",reviewschema);
module.exports = reviewmodel;