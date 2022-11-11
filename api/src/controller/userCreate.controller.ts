import { Request,Response } from "express"
import { userCreateServices } from "../services/user/userCreate.services"
// import {userListService} from "../services/user/userList.services"
// import { userOneListService } from "../services/user/userOneList.services"
// import { userUpdateService } from "../services/user/userUpdate.services"
// import { userDeleteService } from "../services/user/userDelete.services"
// import { userLoginServices } from "../services/user/userLogin.services"

const userCreateController = async (req: Request, res: Response) => {
    
    try{
        const {name, email,phone,password} = req.body
        const newUser = await userCreateServices({name, email,phone,password})
        res.status(201).json(newUser)
       }
   
    catch(error){
       if(error instanceof Error){
           return res.status(400).json({
               message: error.message
               })
           }
       }
   }


   export{userCreateController} 