const express = require('express')
const reviewRouter = express.Router()

const reviewmodel = require('../models/reviewtb')


reviewRouter.post('/savereview',async function(req,res){
    try {
        console.log(req.body);
        data = {
           name:req.body.name,
            email:req.body.email,
            review:req.body.review
            
        }
        console.log(data);
        await reviewmodel(data).save().then(()=>{
            return res.status(200).json({
                success:true,
                error:false,
                message:'Review saved'
            })
         })
     }catch (error) {
    
     } 
    })

    reviewRouter.get('/allreviews',async function(req,res){
        try {
            const id= req.params.name
            await bookingmodel.findOne().then((data)=> {
                res.status(200).json({
                    success:true,
                    error:false,
                    details:data,
                    
                    message:''
                })
    
            })
        }catch {
    
        }
    })
module.exports =  reviewRouter