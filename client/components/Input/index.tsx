import { Field } from "formik";
import  Input  from "../../interfaces/input";


export const Input = ({label,name,placeholder,type,error}:Input) => {


    return (
  <>
   <div>{!!error && <span> {error}</span>}</div>
  <label htmlFor={name}>{label}</label>
  <Field type={type}id={name} name={name} placeholder={placeholder}/>
      
  </>
    );
  };