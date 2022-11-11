import { AppDataSource } from "../../database"
import { Contact } from "../../entities/contact.entity"
import { User } from "../../entities/user.entity"

export const contactListOneService = async (user_id:string) => {

    const contactRepository = AppDataSource.getRepository(Contact)
    const userRepo = AppDataSource.getRepository(User)

    const user = await userRepo.findOne({
        where: {
            id:user_id
        }
    })

    if(!user){
        throw new Error("User not found")
    }
   
   const contacts = await contactRepository.find()

   const contactOne = contacts.filter((item) => item.user.id === user.id)

   const contact = contactOne.map((item) => {
        const obj = {
            id: item.id,
            name: item.name,
            email: item.email,
            phone: item.phone,
            user: {
                id:item.user.id,
                name:item.user.name
            },
            created_at:item.created_at,
            updated_at:item.updated_at
        }
        return obj    
   })
  return contact
   
}