const express=require("express")
const mongoose=require("mongoose")
const { patientSchema } = require("./models")
const cors=require(cors)
const {doctorSchema}=require("./models")
const params=require('params')
const jwt=require("jasonwebtoken")
const bcrypt=require('bcrypt')




app.use(express.json())
app.use(cors())

app.post('/patients',async(req,res)=>{})

app.get('/patients',async(req,res)=>{
res.json({
    message:"'Hospital Patient Management API is running"
})})
app.put('/patients/:id',async(req,res)=>{

res.json({
    message:"add details"
})
})
app.delete('/patients/:id',async(req,res)=>{
  const userId=req.params.id
  await deleteOne({
    _id:userId
  })
  res.json({
    message:"user is deleted"
  })
 })

 
app.post('/signup',async(req,res)=>{

  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: 'name, email and password are required' });

  


  const hashedPassword=await bcrypt.hash(password,5)

   await userModel.create({

    email: email,
    password: hashedPassword,
    name:name,

   })

    res.json({
      message:"user signedup succesfully"
    })
}
 })


 app.post('/signin',async(req,res)=>{
    try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'email and password are required' });

    const doctor = await Doctor.findOne({ email });
    if (!doctor) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });



    
  } catch (err) {
    console.error('Signin error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});
  
    

    const decoded=await bcrypt.compare(password,user.password)

    if(!decoded){
      res.json({
        message:"wrong password"
      })
    }

      const token= jwt.sign({
                _id : user._id
              },"JWT_SECRET")
              
              res.json({
                message : "signed in",
                token : token
              })
            
 
app.listen(PORT, async () => {
    try {
        console.log(`server is running on port ${PORT}`)
        mongoose.connect('mongodb://localhost:27017/hospital-management')
            .then(() => console.log('Connected to MongoDB'))
            .catch(err => console.error('MongoDB connection error:', err));
    } catch (err) {
        console.log(`something went wrong while running the server`)
        console.log(err.message)
    }
})





 

