export interface createContact{
    user_id:string
    name:string
    email: string
    phone: string
    
}

export interface creContact extends createContact{
    id:string
    create_at:Date
    update_at:Date
}

export interface listOneContact{
    user_id : string
    contact_id :string
}

export interface updateContact{
    id:string
    name:string
    email: string
    phone: string
}

export interface Contact{
    name:string
    email: string
    phone: string
}