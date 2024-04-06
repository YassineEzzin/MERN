require('dotenv').config()
const express = require('express')
const workoutsRoutes = require('./routes/workouts.js')
const mongoose = require('mongoose')


// express app 
const app = express()

// middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path , req.method)
    next()
})
// routes
app.use('/api/work',workoutsRoutes)

// connect to mongoose and app listen on port 
mongoose.connect(process.env.MONG_URL).then((
 
)=>{
            // listen to app 
              app.listen(process.env.PORT,()=>{
             console.log('from server !! and mongoose')
             })

})
.catch((err)=>{
console.log(err)
})


