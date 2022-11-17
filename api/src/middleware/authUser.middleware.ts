import { Request,Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import "dotenv/config"
    
     const authUser = (req: Request, res: Response, next: NextFunction) => {
       
            const token = req.headers.authorization?.split(" ")[1]
            
            console.log(token)

            jwt.verify(
              token as string, 
              process.env.JWT_SECRET as string,
              (err: any, decoded: any) => {
                
                req.userEmail = decoded.email
                return next()
            })
    
       
    }

    export default authUser