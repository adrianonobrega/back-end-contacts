import { Router } from "express";
import { contactCreateController } from "../controller/contact.controller";
import { contactListController } from "../controller/contact.controller";
import { contactListOneController } from "../controller/contact.controller";
import { contactUpdateController } from "../controller/contact.controller";
import { contactDeleteController } from "../controller/contact.controller";
import {authUser} from "../middleware/authUser.middleware";
import { validate } from "../middleware/validatedMiddleware";
import { contactSchema,contactUpdateSchema } from "../schemas/contactSchema";


export const contactRoutes = Router()

contactRoutes.post("/:id",validate(contactSchema),authUser,contactCreateController)
contactRoutes.get("/",authUser,contactListController)
contactRoutes.patch("/:id",validate(contactUpdateSchema),authUser,contactUpdateController)
contactRoutes.delete("/:id",authUser,contactDeleteController)
contactRoutes.get("/:id",authUser,contactListOneController)