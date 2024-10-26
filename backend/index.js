

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8080


//Below code is for testing server msg in browser
// app.get("/",(req, res) =>{
//     res.json({
//         massage: "Server Is Running"
//     })
// })

// Start CRUD Operation API

// Shema CRUD Operation
const schemaData = mongoose.Schema({
    name: String,
    email: String,
    mobile: String,

}) 

// Model CRUD Operation

const userModel = mongoose.model("sales", schemaData)

// Add Record  Crud Operation 

app.post("/sales/create", async(req, res) =>{
    console.log(req.body)
    const data = new userModel(req.body)
    await data.save()
    res.json({sucsess: true, massage : "Data save SucsessFully ", data : data})
})

// Fetch Data Crud Operation

app.get("/",async(req, res) => {
    const data = await userModel.find({})
    res.json({sucsess: true, data : data})
})

// Delete Data Crud Operation

app.delete("/delete/:id", async(req, res)=>{
    const id = req.params.id
    console.log(id)
    const data = await userModel.deleteOne({_id : id})
    res.json({sucsess: true, massage : "Data Deleted SucsessFully ", data : data})
})

// Update Data Crud Operation

app.put('/update/:id', async (req, res) => {
    try {
      const user = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Get Data based on ID for update
app.get('/:id', async (req, res) => {
    try {
      const user = await userModel.findById(req.params.id);
      res.json(user);
    } catch (err) {
      res.status(500).send('User not found');
    }
  });
// End CRUD Operation API

// Start SignUp form API

// Schema Signup form
const userData = mongoose.Schema({
    name: String,
    city: String,
    email: String,
    username: String,
    password: String,
    

}) 
// Model Signup form
    const userProfile = mongoose.model("userpro", userData)

// Add Signup form   

app.post("/userpro/create", async(req, res) =>{
    console.log(req.body)
    const data = new userProfile(req.body)
    await data.save()
    res.json({sucsess: true, massage : "Data save SucsessFully ", data : data})
})


//  connect to mongodb


            mongoose.connect ("mongodb://localhost:27017/crudoperation")

                   .then(() => {
                             console.log ("connect.ToDb")
                             app.listen(PORT,( ) => console.log ("Server is running"))
                   })
                   .catch((err) => console.log(err))


                   
