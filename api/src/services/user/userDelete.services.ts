import { AppDataSource } from "../../database"
import { User } from "../../entities/user.entity"
import AppError from "../../errors/appError"

export const userDeleteService = async (id:string) => {

    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOne({
        where: {
            id:id
        }
    })
    if (!user) {
        throw new AppError("User not found")
      }

      await userRepository.createQueryBuilder().delete().from(User).where("id = :id", { id }).execute();
}