console.log("Running app.js ");





const express = require("express"); //express....
const mongoose = require("mongoose");
//Cors
const cors = require("cors")

//express object..
const app = express()

//using cors with express
app.use(cors(
   // {origin: "http://localhost:5173"  Only this domain can access the API }
    ))


//below line to accept data in json raw
app.use(express.json())// call json function here

const roleRoutes = require("./src/routes/roleRoute")
app.use(roleRoutes)

const userRoutes = require("./src/routes/userRoute")
app.use(userRoutes)

const stateRoutes = require("./src/routes/stateRoute")
app.use("/states",stateRoutes)

const cityRoutes = require("./src/routes/cityRoute")
app.use("/city", cityRoutes)

const areaRoutes = require("./src/routes/areaRoutes")
app.use("/area",areaRoutes)

const categoryRoutes = require("./src/routes/categoryRoute")
app.use("/category",categoryRoutes)

const propertyRoutes = require("./src/routes/propertyRoutes")
app.use("/property", propertyRoutes)

const inquiryRoutes = require("./src/routes/inquiryRoutes")
app.use("/inquiry", inquiryRoutes)

const adminRoutes=require("./src/routes/adminRoutes")
app.use("/admin",adminRoutes)

//connect to database
mongoose.connect("mongodb://127.0.0.1:27017/Muskanraorole").then(() => {
    console.log("Database connected....");
    
}).catch((res) => {
    console.log(res);
    console.log("Database not connected");
    
    
})


//server creation...
const PORT = 4001
app.listen(PORT,()=>{
    console.log("server started on port number ",PORT)
})



