const express = require('express')
const profileRouter = express.Router()
const bookingmodel = require('../models/bookingtb')
const { default: mongoose } = require('mongoose')
const objectId = mongoose.Types.ObjectId
const jwt =  require("jsonwebtoken")
const checkAuth = require('../middleware/check-auth')

// user router
profileRouter.get('/view-bookings',checkAuth, async (req, res) => {
try {
  const id = req.userData.userid
    const bookingDetails = await bookingmodel.aggregate([
        {
          '$lookup': {
            'from': 'addroom_tbs', 
            'localField': 'roomid', 
            'foreignField': '_id', 
            'as': 'room'
          }
        },
        {
          '$lookup': {
            'from': 'register_tbs', 
            'localField': 'userid', 
            'foreignField': '_id', 
            'as': 'user'
          }
        },
        {
            '$unwind':'$room'
        },
        {
            '$unwind':'$user'
        },
        {
          '$match':{
            'userid':new objectId(id)
          }
        },
        {
            '$group':{
                '_id':'$_id', 
                'username':{'$first':'$user.name'},
                'fromdate':{'$first':'$fromdate'},
                'todate':{'$first':'$todate'},
                'room':{'$first':'$room.room'},
                'image':{'$first':'$room.image'},
                
            }
        }
      ])
      if(bookingDetails[0]){
        return res.status(200).json({
            success:true,
            error:false,
            data:bookingDetails
        })
      }
} catch (error) {
    
}


})


// admin view booking router
profileRouter.get('/viewbooking',checkAuth, async (req, res) => {
      try {
        const id = req.userData.userid
          const bookingDetails = await bookingmodel.aggregate([
              {
                '$lookup': {
                  'from': 'addroom_tbs', 
                  'localField': 'roomid', 
                  'foreignField': '_id', 
                  'as': 'room'
                }
              },
              {
                '$lookup': {
                  'from': 'register_tbs', 
                  'localField': 'userid', 
                  'foreignField': '_id', 
                  'as': 'user'
                }
              },
              {
                  '$unwind':'$room'
              },
              {
                  '$unwind':'$user'
              },
              
              {
                  '$group':{
                      '_id':'$_id',      //bookingid matches
                      'username':{'$first':'$user.name'},
                      'phoneno':{'$first':'$user.phno'},
                      'fromdate':{'$first':'$fromdate'},
                      'todate':{'$first':'$todate'},
                      'image':{'$first':'$room.image'},
                      'room':{'$first':'$room.room'},
                      
                  }
              }
            ])
            if(bookingDetails[0]){

              
              return res.status(200).json({
                  success:true,
                  error:false,
                  data:bookingDetails
              })
            }
      } catch (error) {
          
      }

      
    })
    profileRouter.get('/deletebooking/:id',async function(req,res){
      try {
        const id = req.params.id;
         await bookingmodel.deleteOne({_id:id}).then((data)=>
        { res.status(200).json({
            success:true,
            error:false,
            message:'Booking deleted'
        })
         }
)}catch(error){

}

})
      
            
      
      
module.exports = profileRouter;