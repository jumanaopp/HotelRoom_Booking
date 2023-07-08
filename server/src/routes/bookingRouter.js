const express = require('express')
const bookingRouter = express.Router()
const bookingmodel = require('../models/bookingtb')
const jwt =  require("jsonwebtoken")
const checkAuth = require('../middleware/check-auth')
const addroommodel = require('../models/addroomtb')


bookingRouter.post('/savebooking/:id', checkAuth, async (req, res) => {
    try {

        const {fromdate,todate, payment, room_id } = req.body
        console.log("roomid-->", room_id);
        const result = await bookingmodel.create({ fromdate, todate, payment,status:'1', userid: req.userData.userid, roomid: req.body.room_id })
        console.log(result);
        if (result) {
            const id = req.params.id
            // const userid = new objectId(id)
            const user = await addroommodel.updateOne({ _id: room_id }, { $set: { status: 1 } })
            return res.status(200).json({
                success: true,
                error: false,
                message: 'Thanks for booking'
            })
        }

    } catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message: 'something went wrong'
        })
    }
})

module.exports =  bookingRouter