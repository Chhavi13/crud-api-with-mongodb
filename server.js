require('./models/db');

const bodyParser=require('body-parser');
 const employees =require("./models/employee.model");

const express=require("express");
const app=express();
const port=3040;
app.use(express.json());

//for getting all the data from database
app.get('/employees',async(req,res)=>{
    try{
    const getEmpData =  await employees.find();
    res.send(getEmpData);
    }catch(e){
        res.send(e);
    }
});


//for get a particular record from db by id
app.get('/employees/:id',async(req,res)=>{
    try{
        const _id=req.params.id
        res.send(_id);

    }catch(e){

    }
})


app.post('/employees',(req,res)=>{
    console.log(req.body);
     const user =  new employees(req.body);
     user.save().then(()=>{
         res.send(user);
     }).catch((e)=>{
         res.send(e);
     })    

  
});


app.listen(port,()=>{
    console.log(`app listening at http://localhost:${port}` )
});


//app.use(bodyParser.urlencoded({extended: true})); 

