const mongoose=require('mongoose')
const doctorData=new mongoose.Schema({
  name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true 
}})
const doctorInfo=mongoose.model("DoctorInfo",doctorData)

const patientData=new mongoose.Schema({
 name: { type: String, required: true },
  disease: { type: String, required: true },
  wardNumber: { type: Number, required: true },
  admittedDate: { type: Date, required: true },
 
});
  
const doctorSchema=mongoose.model("doctorSchema",doctorInfo)
const patientSchema=mongoose.model("patientSchema",patientData)

module.exports={
doctorSchema,patientSchema
}