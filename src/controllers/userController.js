const userModel = require("../models/userModel")
const bcrypt = require("bcrypt");
const mailUtil = require("../utils/mailUtil")
const jwt = require("jsonwebtoken")
const secret = "secret"

const loginUser = async(req,res) => {

    // here both email and password coming from front ens is stored in wmail and password
    const email = req.body.email
    const password = req.body.password
    console.log(email,password)
    // Matched email coming from frontend with stored email in database with findOne method 
    const foundUserFromEmail = await userModel.findOne({email:email}).populate("roleId")

    console.log(foundUserFromEmail);

    //Now if we had found email from database then compare password

    if (foundUserFromEmail != null) {
        const isMatched = bcrypt.compareSync(req.body.password, foundUserFromEmail.password)
        // 
        console.log("imsatcjed..",isMatched)
        if (isMatched == true) {
            res.status(200).json({
              message: "login success",
              data: foundUserFromEmail,
            });
          } else {
            res.status(404).json({
              message: "invalid cred..",
            });
          }
    }else{
        res.status(401).json({
            message:"Email not found"
        })
    }
    




}


const signUp = async (req,res) => {
    try {
        

        // Password encyption
        // Generates a salt (a random string) with a cost factor of 10.
        //The higher the cost factor, the more secure but slower the hashing process.
        const salt = bcrypt.genSaltSync(10)

        // Hashes the user's password (req.body.password) using the generated salt.
        // The hashSync method ensures that the operation is performed synchronously.
        // The result (hashedPassword) is a securely hashed version of the password, which can be safely stored in a database.
        const hashedPassword = bcrypt.hashSync(req.body.password,salt)

        // Here we are storing hashed password into body so that encrypted password is stored into database


        req.body.password = hashedPassword;

        const createdUser = await (await userModel.create(req.body)).populate("roleId")
        // const userRoleName = addedUser.data.roleId.name
        console.log(createdUser);
        
        //sending mail to user
        const mailResponse = await mailUtil.sendingMail(createdUser.email,"Welcome to Real Estate finder", "this is test mail")

        res.json({
            message:"User Signup to db succesfully",
            data:createdUser

        })
    } catch (error) {
        res.status(500).json({
            message:"error",
            data:error
        })
    }
}

const getUser = async (req,res) => {
    try {
        const allUserFetched = await userModel.find()

    res.status(201).json({
        message:"All user fetched...",
        data:allUserFetched
    })
    } catch (error) {

        res.status(401).json({
            message:"error",
            data:error
        })
        
    }
}

const deleteUser = async (req,res) => {
    const deletedUser = await userModel.findByIdAndDelete(req.params.userId)

    res.json({
        message:"User Data deleted",
        data:deletedUser
    })
}

const getUserById = async (req,res) => {
    const getOneUser = await userModel.findById(req.params.userId)

    res.json({
        message:"user fetched succesfully...",
        data:getOneUser
    })
}
const forgotPassword = async (req, res) => {
    const email = req.body.email;
    console.log(email);
    
    const foundUser = await userModel.findOne({ email: email });
  
    if (foundUser) {
      const token = jwt.sign(foundUser.toObject(), secret);
      console.log(token);
      const url = `http://localhost:5173/resetpassword/${token}`;
      const mailContent = `<html>
                            <a href ="${url}">reset password</a>
                            </html>`;
      //email...
      await mailUtil.sendingMail(foundUser.email, "reset password", mailContent);
      res.json({
        message: "reset password link sent to mail.",
      });
    } else {
      res.json({
        message: "user not found register first..",
      });
    }
  };
  
  const resetpassword = async (req, res) => {
    const token = req.body.token; //decode --> email | id
    const newPassword = req.body.password;
  
    const userFromToken = jwt.verify(token, secret);
    //object -->email,id..
    //password encrypt...
    const salt = bcrypt.genSaltSync(10);
    const hashedPasseord = bcrypt.hashSync(newPassword,salt);
  
    const updatedUser = await userModel.findByIdAndUpdate(userFromToken._id, {
      password: hashedPasseord,
    });
    res.json({
      message: "password updated successfully..",
    });
  };
  

module.exports = {
    signUp,
    getUser,
    deleteUser,
    getUserById,
    loginUser,
    forgotPassword,
    resetpassword,
}