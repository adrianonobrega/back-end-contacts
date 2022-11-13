import { AppDataSource } from "../../database"
import { Contact } from "../../entities/contact.entity"

export const contactListService = async () => {

    const contactRepository = AppDataSource.getRepository(Contact)

    const contact = await contactRepository.find()

    const result = contact.map((item) => {
        const obj = {
            id:item.id,
            name:item.name,
            email:item.email,
            phone:item.phone,
            user: {
                id:item.user.id,
                name:item.user.name
            },
            created_at:item.created_at,
            updated_at:item.updated_at
        }
        return obj
    })
    return result
}