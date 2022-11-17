import { createContact } from "../../interfaces/contact";
import { AppDataSource } from "../../database";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";

export const contactCreateServices = async ({user_id,email,phone,name}: createContact) => {

    const contactRepository = AppDataSource.getRepository(Contact)
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id:user_id
        }
    })

    const contacts = await contactRepository.find()
    const alreadyExistsEmail = contacts.find((contact) => contact.email === email)
    const phoneExistsEmail = contacts.find((contact) => contact.phone === phone)

    if(!user){
        throw new AppError("User not found")
      }
 
    if(alreadyExistsEmail){
      throw new AppError("Email already exists")
    }

    if(phoneExistsEmail){
        throw new AppError("Phone already exists")
      }

      const contact = new Contact()
      contact.id = contact.id
      contact.name = name
      contact.email = email
      contact.phone = phone
      contact.user = user
      await contactRepository.save(contact)

      const result = {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        user:{
          id:user.id,
          name:user.name,
          created_at:user.created_at,
          updated_at: user.updated_at
        },
        created_at:contact.created_at,
        updated_at: contact.updated_at
      }
      return result
}