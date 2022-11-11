import { Router } from "express";
import { userCreateController } from "../controller/userCreate.controller";
// import { userListController } from "../controller/user.controllers";
// import { userListOneController } from "../controller/user.controllers";
// import { userUpdateController } from "../controller/user.controllers";
import { userDeleteController } from "../controller/userCreate.controller";
// import { userLoginController} from "../controller/user.controllers";
// import  {authUser}  from "../middlewares/authUser.middleware";

export const userRoutes = Router()

userRoutes.post("/",userCreateController)
// userRoutes.post("/login",userLoginController)
// userRoutes.get("/",authUser,userListController)
// userRoutes.patch("/:id",authUser,userUpdateController)
userRoutes.delete("/:id",userDeleteController)
// userRoutes.get("/:id",authUser,userListOneController)