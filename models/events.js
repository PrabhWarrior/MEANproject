var mongoose=require('mongoose');
module.exports = mongoose.model('event', {
   title: {type : String, default: ''},
   discription:{type : String, default: ''},
   details:{

    start:{type:String,default :''},
    end:{type:String,default:''},

   }
    });
    