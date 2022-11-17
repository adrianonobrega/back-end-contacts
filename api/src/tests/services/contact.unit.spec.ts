import { DataSource } from "typeorm";
import { AppDataSource } from "../../database";
import {createUser} from "../../interfaces/user"
import {userCreateServices} from "../../services/user/userCreate.services"
import {v4 as uuidv4} from "uuid"
import AppError from "../../errors/appError"
import {contactCreateServices} from "../../services/contact/contactCreate.services"
import {contactListService} from "../../services/contact/contactList.services"
import {contactListOneService} from "../../services/contact/contactListOne.services"
import {contactUpdateService} from "../../services/contact/contactUpdate.services"
import {userLogin} from "../../interfaces/user"
import {createContact} from "../../interfaces/contact"
import {contactDeleteService} from "../../services/contact/contactDelete.services"
import {updateContact} from "../../interfaces/contact"

describe("Manipulate user", () => {

    
    const user : createUser = {
        name:"test",
		email:"test@gmail.com",
	    password:"1234",
	    phone:"(83)006454454"
    }

    const contact : createContact = {
        user_id:"",
        name:"jose",
		email:"jose@gmail.com",
	    phone:"(83)006454454"
    }

    let contactUpdate : updateContact = {
        id:"",
        name:"jose",
		email:"jose@gmail.com",
	    phone:"(83)006454454"
    }

    let connection: DataSource

    beforeAll(async () => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => {
            console.error("Error during Dara Source initialization", err)
        })
    })

    afterAll(async() => {
        await connection.destroy()
    })

    

    test("Should be able to create an contact",async () =>{
        const newUser = await userCreateServices(user)
        contact.user_id = newUser.id
        const newContact = await contactCreateServices(contact)
        contactUpdate.id = newContact.id
        expect(newContact).toHaveProperty("id")
        expect(newContact.name).toBe("jose")
       
    })

    test("Should be able to thown an error in case of contact not found",async () =>{
       try {
        const contact_id = uuidv4()
        await contactDeleteService(contact_id)
       }
       catch(err){
        if(err instanceof AppError){
            expect(err.message).toBe("Contact not found")
        }
        
       }
        
     })

     test("must be able to update a contact",async () =>{
        const Contact = await contactUpdateService(contactUpdate)
        expect(Contact).toHaveProperty("id")
        expect(Contact.phone).toBe("(83)006454454")
        
     })

     
})
