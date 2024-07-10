const static_username="admin";
const static_password="admin123";

const login=(req,res)=>{
    const {username,password}=req.body;
        try {
        if(username==static_username && password==static_password){
            res.json({message:"login successful"});
        }
        else{
            res.status(401).json({message:"invalid credentials"});
        }
    } catch (error) {
        console.log("error in login route",error.message)
    }
   
}

module.exports=login;