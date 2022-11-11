import { Request,Response } from "express"
import { contactCreateServices } from "../services/contact/contactCreate.services"
// import { contactListService } from "../services/contact/contactList.services"
// import { contactOneListService } from "../services/contact/contactOneList.services"
// import { contactUpdateService } from "../services/contact/contactUpdate.services"
import { contactDeleteService } from "../services/contact/contactDelete.services"

const contactCreateController = async (req: Request, res: Response) => {
    
    try{
   
           const {user_id} = req.params
           const {email,phone,name} = req.body
       
       const contact = await contactCreateServices({user_id,email,phone,name})
   
       res.status(201).json(contact)
       }
   
    catch(error){
       if(error instanceof Error){
           return res.status(400).json({
               message: error.message
               })
           }
       }
   }

   const contactDeleteController = async (req: Request, res: Response) => {
   
    const {id} = req.params
    try{
     const contact = await contactDeleteService(id)
 
     res.status(204).json(contact)
    }
 
     catch(error){
         if(error instanceof Error){
             return res.status(400).json({
                 message: error.message
             })
         }
     }
 }

   export{
    contactCreateController,
    contactDeleteController,

   }