import { Request,Response } from "express"
import { contactCreateServices } from "../services/contact/contactCreate.services"
import { contactListService } from "../services/contact/contactList.services"
import { contactListOneService } from "../services/contact/contactListOne.services"
import { contactUpdateService } from "../services/contact/contactUpdate.services"
import { contactDeleteService } from "../services/contact/contactDelete.services"
import  AppError  from "../errors/appError"

const contactCreateController = async (req: Request, res: Response) => {
    const {user_id} = req.params
    const {email,phone,name} = req.body
    const contact = await contactCreateServices({user_id,email,phone,name})
    res.status(201).json(contact)
}

   const contactDeleteController = async (req: Request, res: Response) => {
    const {id} = req.params
    const contact = await contactDeleteService(id)
    res.status(204).json(contact)
 }

 const contactListController = async (req: Request, res: Response) => {
    const contact = await contactListService()
    res.status(200).json(contact)
 }

 const contactListOneController = async (req: Request, res: Response) => {
    const {user_id} = req.params
    const contact = await contactListOneService(user_id)
    res.status(200).json(contact)
 }

 const contactUpdateController = async (req: Request, res: Response) => {
    const {id} = req.params  
    const {email,phone,name} = req.body
    const contact = await contactUpdateService({id,email,phone,name})
    res.status(200).json(contact)
   }

   export{
    contactCreateController,
    contactDeleteController,
    contactListController,
    contactListOneController,
    contactUpdateController
   }