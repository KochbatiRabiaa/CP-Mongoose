
const mongoose=require( "mongoose");




//Create a person:
const personSchema = new mongoose.Schema({
    name: {type:String, required:true},
    age: Number,
    favoriteFoods: [String]
  },
  {strict:false})
const person = mongoose.model('person', personSchema)

 //Create and Save a Record of a Model:
 /* const Joe = new person({name: 'Joe', age: 17, favoriteFoods: ['pizza', 'burger']});
  Joe.save(function (err) {
     if (err) return('err')})*/




  
  //  Create Many Records with model.create()

  /*const arrayOfPeople=[{name:"Alia",age:44,favoriteFoods:["Fruit", "Cereal", "Italian", "Chocolate"]},
                   {name:"Jashwa",age:17,favoriteFoods:["BBQ", "Salad", "Italian", "Chocolate"]}];

person.create(arrayOfPeople, (err) =>{
        if (err) return handleError(err);
    });*/


    //Use model.find() to Search Your Database
 
 /*const findPerson=async()=>{
    const data= await person.find()
    console.log(data)
} 
 findPerson()*/


 //Use model.findOne() 

/* const findOnePerson=async()=>{
    const dataOne= await person.findOne({name:"Alia"})
    console.log(dataOne)
} 
 findOnePerson()*/



// Use model.findById()
/*const findPersonById=async()=>{
    const dataId= await person.findById({_id:("6137a9c267e6fe938b527b68")})
    console.log(dataId)
} 
findPersonById()*/



//model.findOneAndUpdate()
/*const findAndUpdate=async()=>{
    const dataUpdate= await person.findOneAndUpdate({name:"Alia" }, {age:"20"},(err,data )=>{
        err?console.log('error',err):console.log(data)
    })
    console.log(dataUpdate)
} 
findAndUpdate()*/


//Delete One Document Using model.findByIdAndRemove
/*const findAndRemove=async()=>{
    const dataUpdate= await person.findByIdAndRemove({_id:("6137a9c267e6fe938b527b67")},(err,data )=>{
        err?console.log('error',err):console.log(data)
    })
    console.log(dataUpdate)
} 
findAndRemove()*/



//Delete Many Documents with model.remove()
/*const removePerson=async()=>{
    const dataRemove= await person.remove({ name:"Jashwa"}, (err,result)=>{
        err?console.log('error',err):console.log(result)
      
    })
    console.log(dataRemove)
} 
 removePerson()*/



//Chain Search Query Helpers to Narrow Search Results
/*const findUnique=async()=>{
    const dataUnique= await person.find()
    .sort('favoriteFoods ,-test')
    .limit(2)
    .select('chocolate') 
    
        
    
    console.log(dataUnique)
} 
findUnique()*/




  module.exports = mongoose.model('Person', personSchema)
