const mongoose = require("mongoose")

const schema = mongoose.Schema

const bookingschema = new schema({
userid: { type: mongoose.Types.ObjectId,ref:'register_tb' },
roomid: { type: mongoose.Types.ObjectId,ref:'addroom_tb' },
// adults: { type: String },
// child: { type: String },
fromdate: { type: String },
// timein: { type: String },
todate: { type: String },
// timeout: { type: String },
amount: { type: String },
status: { type: String },

})
const bookingmodel = mongoose.model("booking_tb",bookingschema);
module.exports = bookingmodel;


