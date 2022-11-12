import { yupResolver } from "@hookform/resolvers/yup"
import Link from "next/link"
import { useRouter } from "next/router"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'
import * as yup from 'yup'
import {Formik,Form,Field, useField} from "formik"
import {Api} from "../services/api"
import {Input} from "../components/Input/index"
import {SectionAll} from "../styles/login"

interface inputRegistration{
    name:string
}


const Login = () => {

    const schema = yup.object().shape({
        email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
        password: yup.string().required('Senha obrigatória')
    })

    const initialValues : inputRegistration = {email:""}

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });



    const navigate = useRouter()
    const submit = (data: any) => {
        console.log(data,"dataaaaaaaa")
        Api.post(`users/login`, data)
            .then((res => {

                const { token, id } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user_id", id)
                toast.success("Login efetuado com sucesso")
                navigate.push("/user")
            }))
            .catch((err => {
                toast.error("Email ou senha invalidos")
                console.log(err)

            }))
    }

    return (
        <>

            <SectionAll>
               
                <h1>Login</h1>
                <Formik 
                     initialValues={initialValues}
                     onSubmit={submit}
                >
                     <Form>
                     <h5>Usuario</h5>
                    <Input
                        label="Usuario"
                        type="text"
                        placeholder="Digitar Usuario"
                        name="email"
                        error={errors.email?.message}
                    ></Input>
                    
                    <Input
                        label="Senha"
                        type="password"
                        placeholder="Digitar Senha"
                        name="password"
                        error={errors.password?.message}
                    ></Input>


                    <Link href="/senha"><h6>Esqueci minha senha</h6></Link>
                    <button>Entrar</button>
                     </Form>
                    
                </Formik>


                <h4>Ainda não possui conta?</h4>
                <button>Cadastrar</button>

            </SectionAll>
        </>

    )
}

export default Login