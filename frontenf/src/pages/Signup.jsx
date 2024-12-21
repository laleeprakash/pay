import { useState } from "react"
import { Heading } from "../Components/Heading"
import { Inputbox } from "../Components/Inputbox"
import { useNavigate } from "react-router-dom"
import { Subheading } from "../Components/Subheading"
import { Warning } from "../Components/Warning"
import  axios from "axios"
import { Button } from "./Button"

function Signup(){
  const navigate=useNavigate()
  const [firstName,setfirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [username,setusername]=useState("")
  const [passsword,setpassword]=useState("")
  const handlesignup = 

    async ()=>{
      if( ! username.endsWith("@gmail.com")){
        alert("invaild email please enter a vaild email")
        return
      }
      const res =   await axios.post("http://localhost:3000/user/signup",{
        username,
        lastName,
        firstName,
        passsword
      });
      localStorage.setItem("token",res.data.token)

      navigate("/signin")  
    }
  
  return(
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-90 text-center">
        <Heading label={"Sign Up"}/> 
        <Subheading label={"Enter you are info to create an account"}/>
        <Inputbox onChange={ (e) =>{
        setfirstName(e.target.value)}}
        label={"FirstName"} placeholder={"John"}/>
        <Inputbox onChange={(e)=>{setLastName(e.target.value)}}
        label={"LastName"} placeholder={"Doe"}/>
        <Inputbox onChange={(e)=>{setusername(e.target.value)}}
        label={"Email"} placeholder={"JohnDoe@gmail.com"}/>
        <Inputbox  onChange={(e)=>{setpassword(e.target.value)}}
        label={"Password"} placeholder={"JohnDoe@care"}/>
        <Button onClick={handlesignup} label={"Sign Up"}/>
        <Warning label={"Already have an account ? "}  buttontext={"Signin"}to={"/signin"}/>
        </div>
      </div>
    </div>
  )
 
}

export default Signup
