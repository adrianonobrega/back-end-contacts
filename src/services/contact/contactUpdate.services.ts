import { AppDataSource } from "../../database"
import { updateContact } from "../../interfaces/contact"
import { Contact } from "../../entities/contact.entity"
import AppError from "../../errors/appError"

export const contactUpdateService = async ({id,email,phone,name}: updateContact) => {

    const contactRepository = AppDataSource.getRepository(Contact) 

    const contactOne = await contactRepository.findOne({
        where:{
            id:id
        }
    })

    if(!contactOne){
        throw new AppError("Contact not found")
    }

    const contact = new Contact()
    contact.id = contact.id
    contact.email = email || contact.email
    contact.phone = phone || contact.phone
    contact.name = name || contact.name
   
    await contactRepository.createQueryBuilder().update(contact).set(contact).where("id = :id", {id: id}).execute()

    return contact

}