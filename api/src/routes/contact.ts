import { Router } from "express";
import { contactCreateController } from "../controller/contact.controller";
// import { contactListController } from "../controller/contact.controllers";
// import { contactListOneController } from "../controller/contact.controllers";
// import { contactUpdateController } from "../controller/contact.controllers";
// import { contactDeleteController } from "../controller/contact.controllers";
// import {authUser} from "../middlewares/authUser.middleware";

export const contactRoutes = Router()

contactRoutes.post("/:id",contactCreateController)
// contactRoutes.get("/",authUser,contactListController)
// contactRoutes.patch("/:id",authUser,contactUpdateController)
// contactRoutes.delete("/:id",authUser,contactDeleteController)
// contactRoutes.get("/:id",authUser,contactListOneController)