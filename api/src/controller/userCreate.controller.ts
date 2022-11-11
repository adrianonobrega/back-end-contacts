import { Request,Response } from "express"
import { userCreateServices } from "../services/user/userCreate.services"
import {userListService} from "../services/user/userList.services"
// import { userOneListService } from "../services/user/userOneList.services"
// import { userUpdateService } from "../services/user/userUpdate.services"
import { userDeleteService } from "../services/user/userDelete.services"
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

   const userListController = async (req: Request, res: Response) => {
   
    try{
     const users = await userListService()
 
     res.status(200).json(users)
    }
 
     catch(error){
         if(error instanceof Error){
             return res.status(400).json({
                 message: error.message
             })
         }
     }
 }
 
//  const userListOneController = async (req: Request, res: Response) => {
 
//      const {id} = req.params
//      try{
//       const users = await userOneListService(id)
  
//       res.status(200).json(users)
//      }
  
//       catch(error){
//           if(error instanceof Error){
//               return res.status(400).json({
//                   message: error.message
//               })
//           }
//       }
//   }
 
//   const userUpdateController = async (req: Request, res: Response) => {
     
//      try{
    
//           const {id} = req.params  
//           const {email,phone,password} = req.body
        
//         const newUser = await userUpdateService({id,email,phone,password})
    
//         res.status(201).json(newUser)
//         }
    
//      catch(error){
//         if(error instanceof Error){
//             return res.status(400).json({
//                 message: error.message
//                 })
//             }
//         }
//     }
 
    const userDeleteController = async (req: Request, res: Response) => {
 
     const {id} = req.params
     try{
      const users = await userDeleteService(id)
  
      res.status(204).json(users)
     }
  
      catch(error){
          if(error instanceof Error){
              return res.status(400).json({
                  message: error.message
              })
          }
      }
  }

//   const userLoginController = async (req: Request, res: Response) => {
  
//       try{
     
            
//              const {email,password} = req.body
         
//          const token = await userLoginServices({email,password})
     
//          res.status(201).json(token)
//          }
     
//       catch(error){
//          if(error instanceof Error){
//              return res.status(400).json({
//                  message: error.message
//                  })
//              }
//          }
//      }


   export{userCreateController,userDeleteController,userListController} 