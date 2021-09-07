const express=require('express')
const app=express()
const connect=require('./connect')

const personSchema=require('./person_schema')
const port=process.env.PORT||4000

connect();
personSchema();
app.listen(port, (err)=>{
    err? console.log('error',err):console.log(`Server is running on port ${port}`)
})
