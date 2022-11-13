import * as express from "express"
import Contact from "../../src/interfaces/contact"

declare global {
    namespace Express {
      interface Request {
        userEmail: string
        inputData: any
      }
      
    }
}      