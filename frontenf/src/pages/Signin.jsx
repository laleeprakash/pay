import { Heading } from "../Components/Heading"
import { Inputbox } from "../Components/Inputbox"
import { Subheading } from "../Components/Subheading"
import { Warning } from "../Components/Warning"
import axios from "axios"
import { Button } from "./Button"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
const token=localStorage.getItem("token")
  console.log(token)  
function Signin(){
  const navigate= useNavigate()
  
  const [username,setusername]=useState("")

  return(
    <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-90 text-center">
      <Heading label={"Sign in"}/>
      <Subheading label={"Enter your credentials to access your account "}/>
      <Inputbox  onChange={(e)=>{setusername(e.target.value)}}
       label={"Email"} placeholder={"JohnDoe@gmail.com"}/>
      <Inputbox label={"Password"} placeholder={"JohnDoe@care"}/>
      <Button label={"Sign In"} onClick={ async ()=>{
         if( ! username.endsWith("@gmail.com")){
      alert("enter a valid email")
          return
        }
         await axios.get("http://localhost:3000/user/signin",{
          headers:{
            'Authorization':`Bearer ${token}`,
            "content-type":"application/json"

          }
        },{
          username:username
         } )
          navigate("/dashboard")
       
      }}/>
      <Warning label={"Don't have an account "} buttontext={"Sign Up"} to={"/signup"}/>
      
    </div>
    </div>
    </div>
  )

  
}
export default Signin