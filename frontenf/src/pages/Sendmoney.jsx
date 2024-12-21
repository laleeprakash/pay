import { useSearchParams } from "react-router-dom"
import { Heading } from "../Components/Heading"
import { Subheading } from "../Components/Subheading"
import { Button } from "./Button"
import axios from "axios"
function Sendmoney(){
  const [searchparams]=useSearchParams()
  const id=searchparams.get("id")
  const name=searchparams.get("name");
  return(
    <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-96 text-center">
        <Heading label={"Send Money"}/>
        <Subheading label={"make your payment"}/>
       <div className="flex items-center space-x-4">
        <div className="mx-7 w-12 h-12 rounded-full bg-green-500 items-center justify-center">
          <span className="font-semibold text-4xl text-white">
            {name[0].toUpperCase()}</span>
        </div>
        <h2 className=" px-6 text-4xl font-semibold">{name.toUpperCase()}</h2>
       </div>
       
       <div className="flex  justify-start px-5"> <Subheading label={"Amount (in Rs)"}/> 
      
       </div>
       <input className=" text-center text-3xl mb-4 border rounded-sm border-green-400 " type="number"/>
   
      <div className="mb-4">
      <Button  label={"Make it"}/> 
      </div>
      
        </div>
        </div>
        </div>
  )
}
export default Sendmoney