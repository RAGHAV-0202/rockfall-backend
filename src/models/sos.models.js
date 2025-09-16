import mongoose from "mongoose";

const sosSchema = new mongoose.Schema({
    userId: {  
        type : Number ,
        required : true , 
    },
    location : {
        type : String ,
        required : true,
    },
    lat : {
        type : String ,
        required : false
    },
    long : {
        type : String ,
        required : false        
    }
} , {
    timestamps: true
})

const Sos = mongoose.model("Sos" , sosSchema)

export default Sos