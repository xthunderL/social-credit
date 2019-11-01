const mongoose = require('mongoose')
const validator=require('validator')

const Schema= mongoose.Schema;
const Userschema=new Schema({

    firstName:{

        type:String,
        required:true,
        trim:true

    },

    lastName:{

        type:String,
        required:true,
        trim:true

    },

    Email:{

        type:String,
        required:true,
        trim:true,
        unique:true,
        validateEmail(value){//Here validate is just a function
            if(!validator.isEmail(value)){

                throw new Error('Invalid Email')

            }
        }

    },

    Gender:{

        type:String,
        required:true

    },

    Phone:{

        type:Number,
        required:true,
        trim:true,

        validatePhone(value){
            if(!validator.isMobilePhone(value)){
                throw new Error('Invalid Phone')
            }
        }
    },

    userName:{

        type:String,
        required:true,
        trim:true,
        unique:true

    },

    uniqueIdentity:{

        type:String,
        unique:true,
        trim:true,
        required:true

    },

    Password:{

        type:String,
        required:true,
        minlength:7,
    
                validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
     },

     DOB:{
         type:Date,
         required:true
        }

    })

    //module.exports=mongoose.Model('User',Userschema)
    //OR
    const User=mongoose.model('User',Userschema)
    module.exports=User
