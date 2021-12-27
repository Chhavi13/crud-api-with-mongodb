const mongoose=require('mongoose');
var employeeSchema= new mongoose.Schema({
    fullame:{
        type:String
    },
    email:{
        type:String
    },
    
    mobile:{
        type:String
    },
    
    city:{
        type:String
    }

});

const employees =new mongoose.model("employees",employeeSchema);
module.exports=employees;