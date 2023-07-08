const mongoose = require("mongoose")

const schema = mongoose.Schema

const addroomschema = new schema({
room: { type: String },
rate: { type: String },
size: { type: String },
capacity: { type: String },
bed: { type: String },
services: { type: String },
image:{type:String},
status:{type:String}
})
const addroommodel = mongoose.model("addroom_tb",addroomschema );
module.exports = addroommodel;


