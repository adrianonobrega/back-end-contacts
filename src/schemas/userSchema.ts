import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { createUser,updateUser2,userLogin } from '../interfaces/user'

export const userCreateSchema: SchemaOf<createUser> = yup.object().shape({
  name: yup.string().required().min(2).max(50),
  email: yup.string().email().required().max(50),
  password: yup.string().required().min(4).max(60),
  phone: yup.string().required().max(15),
})

export const userUpdateSchema: SchemaOf<updateUser2> = yup.object().shape({
  name: yup.string().min(2).max(50),
  email: yup.string().email().max(50),
  password: yup.string().min(4).max(60),
  phone: yup.string().max(15)
})

export const userLoginSchema:SchemaOf<userLogin> = yup.object().shape({
  email: yup.string().email().max(50),
  password: yup.string().min(4).max(60),
})