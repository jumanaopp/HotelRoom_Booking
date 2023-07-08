const express =  require('express')
const updateroomRouter = express.Router()
const addroommodel = require('../models/addroomtb')


updateroomRouter.post('/edit/:name', async function(req,res){
    try{
        const id = req.params.name
    const data = await addroommodel.findOne({_id:id})
    console.log(data);
    }catch(error) {

    }
})
updateroomRouter.post('/update/:name',async function(req,res){
    try {
        const id = req.params.name
        console.log(id);
    var updates = {
            room:req.body.room,
            rate:req.body.rate,
            size:req.body.size,
            capacity:req.body.capacity,
            bed:req.body.bed,
            services:req.body.services,
        
    };
    await addroommodel.updateOne({_id:id},{$set:updates}).then((data)=>{
        res.status(200).json({
            success:true,
            error:false,
            // details:data,
            message:'updated'
        })

    })
    }catch(error){

    }
})

module.exports = updateroomRouter