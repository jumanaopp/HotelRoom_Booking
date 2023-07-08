const express =  require('express')
const viewroomRouter = express.Router()
const addroommodel = require('../models/addroomtb')

viewroomRouter.get('/roomdetails',async function(req,res){
    try {
        const data = await addroommodel.find({ status: 0 })
       
        res.status(200).json({
            success:true,
            error:false,
            details:data,
            message:'room details list'
        })
    } catch(error){
console.log(error);
    }

})
viewroomRouter.get('/allroomdetails',async function(req,res){
    try {
        const data = await addroommodel.find()
       
        res.status(200).json({
            success:true,
            error:false,
            details:data,
            message:'room details list'
        })
    } catch(error){
console.log(error);
    }

})


viewroomRouter.get('/roomone/:name',async function(req,res){
    try {
        const id = req.params.name
        await addroommodel.findOne({_id:id}).then((data)=> {
            res.status(200).json({
                success:true,
                error:false,
                details:data,
                
                message:'room details'
            })

        })
    }catch {

    }
})

module.exports = viewroomRouter