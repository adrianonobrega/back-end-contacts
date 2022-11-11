import { AppDataSource } from "../../database"
import { User } from "../../entities/user.entity"
import { updateUser } from "../../interfaces/user"
import bcrypt from "bcrypt"

export const userUpdateService = async ({id,email,phone,password,name}: updateUser) => {

    const userRepository = AppDataSource.getRepository(User) 
    const findUser = await userRepository.findOne({
        where:{
            id:id
        }
    })
    if(!findUser){
        throw new Error("User not found")
    }
    const user = new User()
    user.id = user.id
    user.name = name || user.name
    user.email = email || user.email
    user.phone = phone || user.phone
    user.password = user.password = bcrypt.hashSync(password,10) || user.password

    const result = {
        id: user.id,
        email: user.email,
        phone: user.phone
    }
   
    await userRepository.createQueryBuilder().update(user).set(user).where("id = :id", {id: id}).execute()

    return result
}