const express =  require('express')
const deleteroomRouter = express.Router()
const addroommodel = require('../models/addroomtb')


deleteroomRouter.get('/delete/:name', async function(req,res){
    try {
        const id = req.params.name;
         await addroommodel.deleteOne({_id:id}).then((data)=>
        { res.status(200).json({
            success:true,
            error:false,
            message:'deleted'
        })
         }
)}catch(error){

}

})

module.exports = deleteroomRouter