const express = require("express")
require("dotenv").config()
const port = process.env.myport
const {connection} = require("./Config/db")
const {userModel} = require("./model/User.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Working")
})


app.post("/signup", (req, res)=>{
    const {name, email, password, phone_number}= req.body;
    
    bcrypt.hash(password, 2, async function(err, hash) {
        // Store hash in your password DB.
    
        if(err){
            res.send("somthing went wrong please try again latter")
        }else{
            const user= new userModel({
       name,         
       email,
       password: hash,
       phone_number,
       
            })
    
            try {
                await user.save()
                res.send("signup successfull")
            } catch (error) {
                console.log(error)
            }
           
        }
    });
    
        res.send("Signup")
    })
    

    app.post("/login", async (req, res)=>{
        const{email,password}=req.body;
        const user= await userModel.findOne({email})
        //
      
     
        if(!user){
           res.send("sign up first")
        }else{
           const hashed_password= user.password
           bcrypt.compare(password, hashed_password, function(err, result) {
              // result == true
     
              if(result){
                 let token = jwt.sign({ user_id : user._id  }, "Yashika");
                 res.send({msg : "login successful", token:token})
              }else{
                 res.send("login failed,invalid credential")
              }
          });
        }
       
    })





app.listen (port, async()=> {
     try {
        await connection()
    console.log("port is working")
     } catch (error) {
        console.log("not connected with port")
     } 
})