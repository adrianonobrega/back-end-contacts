import { Router } from "express";
import { contactCreateController } from "../controller/contact.controller";
import { contactListController } from "../controller/contact.controller";
import { contactListOneController } from "../controller/contact.controller";
// import { contactUpdateController } from "../controller/contact.controllers";
import { contactDeleteController } from "../controller/contact.controller";
// import {authUser} from "../middlewares/authUser.middleware";

export const contactRoutes = Router()

contactRoutes.post("/:id",contactCreateController)
contactRoutes.get("/",contactListController)
// contactRoutes.patch("/:id",authUser,contactUpdateController)
contactRoutes.delete("/:id",contactDeleteController)
contactRoutes.get("/:id",contactListOneController)