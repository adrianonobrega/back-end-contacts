import { Router } from "express";
import { userCreateController } from "../controller/user.controller";
import { userListController } from "../controller/user.controller";
import { userListOneController } from "../controller/user.controller";
import { userUpdateController } from "../controller/user.controller";
import { userDeleteController } from "../controller/user.controller";
import { userLoginController} from "../controller/user.controller";
import  {authUser}  from "..//middleware/authUser.middleware";


export const userRoutes = Router()

userRoutes.post("/",userCreateController)
userRoutes.post("/login",userLoginController)
userRoutes.get("/",authUser,userListController)
userRoutes.patch("/:id",authUser,userUpdateController)
userRoutes.delete("/:id",authUser,userDeleteController)
userRoutes.get("/:id",authUser,userListOneController)