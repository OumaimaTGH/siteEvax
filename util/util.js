const { StatusCodes } = require("http-status-codes");

module.exports = {
    RegisterAccess: (req,res,next)=>{
        if(process.env.REGISTER === "false"){
          return res.status(StatusCodes.NOT_FOUND).json({message: "NOT FOUND"})
        }else{
            return next();
        }
        
    }
}