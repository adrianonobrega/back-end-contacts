import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { Contact } from '../interfaces/contact'

export const contactSchema: SchemaOf<Contact> = yup.object().shape({
  name: yup.string().required().min(2).max(50),
  email: yup.string().email().required().max(50),
  phone: yup.string().required().max(15),
})

export const contactUpdateSchema: SchemaOf<Contact> = yup.object().shape({
    name: yup.string().min(2).max(50),
    email: yup.string().email().max(50),
    phone: yup.string().max(15),
  })