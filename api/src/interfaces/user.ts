
export interface createUser{
    name: string 
    email: string
    phone: string
    password:string
    
}

export interface creUser extends createUser{
    id:string
    create_at:Date
    update_at:Date
}

export interface updateUser{
    id:string
    name:string
    email:string
    phone:string
    password:string
    
}

export interface userLogin{
    email:string | any
    password:string | any
}

export interface updateUser2{
    name:string | any
    email:string | any
    phone:string | any
    password:string | any
}