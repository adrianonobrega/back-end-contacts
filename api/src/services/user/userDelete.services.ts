import { AppDataSource } from "../../database"
import { User } from "../../entities/user.entity"

export const userDeleteService = async (id:string) => {

    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOne({
        where: {
            id:id
        }
    })
    if (!user) {
        throw new Error("User not found")
      }

      await userRepository.createQueryBuilder().delete().from(User).where("id = :id", { id }).execute();
}