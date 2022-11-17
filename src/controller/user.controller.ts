import { Request,Response } from "express"
import { userCreateServices } from "../services/user/userCreate.services"
import {userListService} from "../services/user/userList.services"
import { userListOneService } from "../services/user/userListOne.services"
import { userUpdateService } from "../services/user/userUpdate.services"
import { userDeleteService } from "../services/user/userDelete.services"
import { userLoginServices } from "../services/user/userLogin.services"

    const userCreateController = async (req: Request, res: Response) => {
        const {name, email,phone,password} = req.body
        const newUser = await userCreateServices({name, email,phone,password})
        res.status(201).json(newUser)
}

    const userListController = async (req: Request, res: Response) => {
        const users = await userListService()
        res.status(200).json(users)
}
 
    const userListOneController = async (req: Request, res: Response) => {
        const {id} = req.params
        const users = await userListOneService(id)
        res.status(200).json(users)
}
 
    const userUpdateController = async (req: Request, res: Response) => {
        const {id} = req.params  
        const {email,phone,password,name} = req.body
        const newUser = await userUpdateService({id,email,phone,password,name})
        res.status(200).json(newUser)   
}
 
    const userDeleteController = async (req: Request, res: Response) => {
        
        const {id} = req.params
        const users = await userDeleteService(id)
        res.status(204).json(users)
}
        
        
    const userLoginController = async (req: Request, res: Response) => {   
        const {email,password} = req.body        
        const token = await userLoginServices({email,password})    
        res.status(201).json(token)
}


   export{
    userCreateController,
    userDeleteController,
    userListController,
    userLoginController,
    userListOneController,
    userUpdateController
} 