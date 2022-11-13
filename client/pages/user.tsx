import { useEffect, useState } from "react"
import { BsPencil, BsTrash } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { Header } from "../components/Header"
import { ModalContact } from "../components/ModalContact"
import { Api } from "../services/api"
import { Section } from "../styles/user"
import {ModalUpdateContact} from "../components/ModalUpdateContact"


type List = {
        id:string | any
   
        listContact:[],
        setListContact: () => {},
        name:string
        email:string
        phone:string
    
}

const User =  () => {

    const [user,setUser] = useState()
    const [letter,setLetter] = useState()
    const [modal,setModal] = useState<boolean>()
    const [listContact,setListContact] = useState<List[]>([])
    const [modalUpdate,setModalUpdate] = useState<boolean>()
    
    const token = localStorage.getItem('token')
    const user_id = localStorage.getItem('user_id')

    function returnDataUser(){
        
            Api.get(`users/${user_id}`, {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                setUser(res.data)
                const name = res.data.name.match(/\b(\w)/gi);
                if (name !== null && name !== undefined) {
                const letter1 = name[0]
                const letter2 = name[1]
                setLetter(letter1 + letter2)
                }
            })
                .catch((err) => console.log(err))
            
    }

   
    function returnDataContact(){
    
        Api.get(`contacts/${user_id}`, {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setListContact((listContact) => [
                ...res.data,
            ])
        })
            .catch((err) => console.log(err))
        
    }
       
    function modalOpen(){
        setModal(true)
    }

    useEffect(() => {
        returnDataContact()
        returnDataUser()
      },[])

    function removeList(contact_id: any){
        
        Api.delete(`contacts/${contact_id}`,{

            headers: {
                'Authorization': `Bearer ${token}`
                }
        }).then((res) => {
            returnDataContact()
            toast.success("Contato deletado com sucesso!")
          }).catch((error) => { 
            console.log(error)    
            toast.error("Contato não foi deletado, por favor tente novamente mais tarde")
          })
    }

    function openModalUpdate(){
        setModalUpdate(true)
    }
    
    return (
       <>
       <Header user={user} letter={letter} />
       <Section>
       <h1>Contatos Cadastrados</h1>

<button onClick={modalOpen}>Cadastrar Contato</button>
{modal === true && <ModalContact returnDataContact={returnDataContact} setModal={setModal}/>}

<ul>
{listContact.map((item) => (
    <>
     <li key={item.id}>
     
        <h6>Nome: {item?.name}</h6>
        <h6>Email: {item.email}</h6>
        <h6>Telefone: {item.phone}</h6>
        <BsTrash onClick={() => removeList(item.id)}/>
        <BsPencil onClick={openModalUpdate}/>
    </li>
    {modalUpdate === true && <ModalUpdateContact contact_id={item.id} returnDataContact={returnDataContact} setModalUpdate={setModalUpdate}/>}
    </>
   
))}
</ul>
       </Section>
       
       </>
    )
}

export default User