const express = require('express')
const addroomRouter = express.Router()
const addroommodel = require('../models/addroomtb')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
     cb(null, '../client/public/assets/img/room')
  },
    filename: function (req, file, cb) {
    cb(null, req.body.name)
  }
})

const upload = multer({ storage: storage })

addroomRouter.post('/upload', upload.single('file'), (req,res)=>{
 return res.json("image uploaded")
})

addroomRouter.post('/saveroom',async function(req,res){
    try {
        console.log(req.body);
        data = {
            room:req.body.room,
            rate:req.body.rate,
            size:req.body.size,
            capacity:req.body.capacity,
            bed:req.body.bed,
            services:req.body.services,
            image:req.body.image,
            status:'0'
            
        }
        console.log(data);
        await addroommodel(data).save().then(()=>{
            return res.status(200).json({
                success:true,
                error:false,
                message:'Room Added'
            })
         })
     }catch (error) {
    
     } 
    })


    
module.exports =  addroomRouter