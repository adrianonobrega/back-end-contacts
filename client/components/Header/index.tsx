
import Link from "next/link"
import {SectionAll,SectionLi,Img,SectionButton,Div} from "./styles"
import { useState,useEffect } from "react"
import { AuthContext } from "../../providers/auth"
import { useContext } from "react"


interface HeaderInt{
    user:object | any
    letter: string | any
}


export const Header = ({user,letter}:HeaderInt) => {

    const [modal,setModal] = useState(false)

    const {auth} = useContext(AuthContext)

    return (

        <SectionAll>
           
       <SectionLi>
       
          <div></div>
          {auth === false ? <SectionButton><Link legacyBehavior href="/login"><h4>Fazer Login</h4></Link>
          <Link href="/registration"><button>Cadastrar</button></Link>
          </SectionButton>
          : 
          <>
          <Div>
            <h2>
                {letter}
            </h2>
            </Div>
            <h6>{user?.name}</h6>
           
            
          </>
          }
       </SectionLi>
        </SectionAll>
    )      
}