import * as express from "express"
import Contact from "../../src/interfaces/contact"

declare global {
    namespace Express {
      interface Request {
        user: {
          id: string;
        };
        userEmail: string
        inputData: any
      }
      
    }
}      