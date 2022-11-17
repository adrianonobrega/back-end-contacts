import { Entity, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Contact } from "./contact.entity";

@Entity("user")

export class User{
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    phone: string

    @CreateDateColumn()
    created_at: Date
    
    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(() => Contact, contact => contact.user,{onDelete:'CASCADE'})
    contact: Contact[]

}