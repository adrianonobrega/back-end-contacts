import { AppDataSource } from "../../database"
import { User } from "../../entities/user.entity"

export const userListService = async () => {

    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    if(!users){
        throw new Error("Email already exists")
      }

   const user = users.map((user) => {
    const obj = {
      id:user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      created_at: user.created_at,
      updated_at:user.updated_at
    }
    return obj
   })

    return user
}