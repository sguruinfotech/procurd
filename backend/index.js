

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

// schema
const schemaData = mongoose.Schema({
    name: String,
    email: String,
    mobile: String,

}) 

// Model

const userModel = mongoose.model("sales", schemaData)

// Add Record

app.post("/create", async(req, res) =>{
    console.log(req.body)
    const data = new userModel(req.body)
    await data.save()
    res.json({sucsess: true, massage : "Data save SucsessFully ", data : data})
})

// Fetch Data

app.get("/",async(req, res) => {
    const data = await userModel.find({})
    res.json({sucsess: true, data : data})
})

// Delete Data

app.delete("/delete/:id", async(req, res)=>{
    const id = req.params.id
    console.log(id)
    const data = await userModel.deleteOne({_id : id})
    res.json({sucsess: true, massage : "Data Deleted SucsessFully ", data : data})
})

// Update Data

app.put("/update", async(req, res)=>{
    console.log(req.body)
    const { id, ...rest} = req.body
    console.log(rest)
    const data = await userModel.updateOne({_id : id}, rest)
    res.json({sucsess: true, massage : "Data Updated SucsessFully ", data : data})

})

//  connect to mongodb


            mongoose.connect ("mongodb://localhost:27017/crudoperation")

                   .then(() => {
                             console.log ("connect.ToDb")
                             app.listen(PORT,( ) => console.log ("Server is running"))
                   })
                   .catch((err) => console.log(err))


                   
