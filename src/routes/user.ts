import { Router } from "express";
import { userCreateController } from "../controller/user.controller";
import { userListController } from "../controller/user.controller";
import { userListOneController } from "../controller/user.controller";
import { userUpdateController } from "../controller/user.controller";
import { userDeleteController } from "../controller/user.controller";
import { userLoginController} from "../controller/user.controller";
import  authUser  from "..//middleware/authUser.middleware";
import { validate } from "../middleware/validatedMiddleware";
import { userCreateSchema,userUpdateSchema,userLoginSchema } from "../schemas/userSchema";



export const userRoutes = Router()

userRoutes.post("/",validate(userCreateSchema),userCreateController)
userRoutes.post("/login",validate(userLoginSchema),userLoginController)
userRoutes.get("/",authUser,userListController)
userRoutes.patch("/:id",validate(userUpdateSchema),authUser,userUpdateController)
userRoutes.delete("/:id",authUser,userDeleteController)
userRoutes.get("/:id",authUser,userListOneController)