import { Router } from "express";
import { userCreateController } from "../controller/userCreate.controller";
import { userListController } from "../controller/userCreate.controller";
import { userListOneController } from "../controller/userCreate.controller";
import { userUpdateController } from "../controller/userCreate.controller";
import { userDeleteController } from "../controller/userCreate.controller";
import { userLoginController} from "../controller/userCreate.controller";
// import  {authUser}  from "../middlewares/authUser.middleware";

export const userRoutes = Router()

userRoutes.post("/",userCreateController)
userRoutes.post("/login",userLoginController)
userRoutes.get("/",userListController)
userRoutes.patch("/:id",userUpdateController)
userRoutes.delete("/:id",userDeleteController)
userRoutes.get("/:id",userListOneController)