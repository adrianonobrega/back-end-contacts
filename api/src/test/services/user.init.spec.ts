import { DataSource } from "typeorm";
import { AppDataSource } from "../../database";
import {createUser} from "../../interfaces/user"
import {userCreateServices} from "../../services/user/userCreate.services"
import {v4 as uuidv4} from "uuid"
import AppError from "../../errors/appError"
import {userDeleteService} from "../../services/user/userDelete.services"
import {userLoginServices} from "../../services/user/userLogin.services"
import {userLogin} from "../../interfaces/user"
import {userListOneService} from "../../services/user/userListOne.services"
import {userUpdateService} from "../../services/user/userUpdate.services"
import {updateUser} from "../../interfaces/user"



describe("Manipulate user", () => {

    
    const user : createUser = {
        name:"test",
		email:"test@gmail.com",
	    password:"1234",
	    phone:"(83)006454454"
    }

    let userUpdate : updateUser = {
        id:"",
        name:"adri",
		email:"test@gmail.com",
	    password:"1234",
	    phone:"(83)006456654"
    }

    const loginData : userLogin = {
        email: "test@gmail.com",
		password: "1234",
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

    

    test("Should be able to create an user",async () =>{
       const newUser = await userCreateServices(user)
       userUpdate.id = newUser.id
       expect(newUser).toHaveProperty("id")
       expect(newUser.name).toBe("test")
       expect(newUser).not.toHaveProperty("password")
       
    })

    test("Should be able to thown an error in case of user not found",async () =>{
       try {
        const user_id = uuidv4()
        await userDeleteService(user_id)
       }
       catch(err){
        if(err instanceof AppError){
            expect(err.message).toBe("User not found")
        }
        
       }
        
     })

     test("Must be able to return a user by ID",async () =>{
        
        const listOneUser = await userListOneService(userUpdate.id)
        expect(listOneUser).toHaveProperty("id")
        expect(listOneUser.name).toBe("test")
        expect(listOneUser).not.toHaveProperty("password")
        
     })

     test("must be able to update a user",async () =>{
        const listOneUser = await userUpdateService(userUpdate)
        expect(listOneUser).toHaveProperty("id")
        expect(listOneUser.phone).toBe("(83)006456654")
        expect(listOneUser).not.toHaveProperty("password")
        
     })

     test("must be able to login a user",async () =>{
        const listOneUser = await userLoginServices(loginData)
        expect(listOneUser).toHaveProperty("token")
         
     })
     
})