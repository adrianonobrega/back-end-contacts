import { NextFunction, Request, Response } from 'express'
import * as yup from 'yup'
import AppError from '../errors/AppError'


export const validate =
  (schema: yup.AnyObjectSchema) =>
  async (request: Request, response: Response, next: NextFunction) => {
    const body = request.body

    try {
      const data = await schema.validate(body, {
        abortEarly: false,
        stripUnknown: true,
      })
      request.inputData = data

      next()
    } 
    catch (e) {

      const err = (e as any).errors.map((item: any) => item)
      console.log(err)
      next(new AppError((e as any).errors, (e as any).statusCode))
    }
  }