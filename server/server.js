const express = require('express')
const  mongoose  = require('mongoose')
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.json())
app.use(express.urlencoded({extended:true}))

const registerRouter = require('./src/routes/registerRouter')
const loginRouter = require('./src/routes/loginRouter')
const bookingRouter = require('./src/routes/bookingRouter')
const addroomRouter = require('./src/routes/addroomRouter')
const viewroomRouter = require('./src/routes/viewroomRouter')
const deleteroomRouter = require('./src/routes/deleteroomRouter')

const updateroomRouter = require('./src/routes/updateroomRouter')

// const viewbookingRouter = require('./src/routes/viewbookingRouter')
const profileRouter = require('./src/routes/profileRouter')
const reviewRouter = require('./src/routes/reviewRouter')

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader( 
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });
app.use('/register',registerRouter)

app.use('/login',loginRouter)
app.use('/booking',bookingRouter)

app.use('/addroom',addroomRouter)
app.use('/viewroom',viewroomRouter)
app.use('/deleteroom',deleteroomRouter)

app.use('/updateroom',updateroomRouter)

app.use('/profile',profileRouter)
app.use('/addreview',reviewRouter)

const MONGODB_URL="mongodb+srv://opjumana:opjumana@cluster0.eppylda.mongodb.net/hotelBooking?retryWrites=true&w=majority"
const port=8000;
mongoose.connect(MONGODB_URL).then(()=>{
  app.listen(port,()=>{
    console.log("server started at http://localhost:8000");
  })
}).catch((error)=>{
  console.log('${error} did not connect')
})