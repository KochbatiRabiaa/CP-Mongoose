const mongoose=require('mongoose')
require('dotenv').config()
const connect=()=>{
    mongoose.connect(process.env.mongodbUrl)
    .then(()=>console.log('you are connected'))
    .catch((err)=>console.log('error.,err'))
}


module.exports=connect;