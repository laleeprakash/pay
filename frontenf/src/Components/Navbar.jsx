import { useId } from "react";
import { useNavigate } from "react-router-dom";
function Navbar(){
  const navigate=useNavigate()
return (
  <div className="w-full h-10 border  border-black-400 rounded-md">
  <ul className="flex flex-row justify-evenly text-pink-400 text-2xl ">
    <li className="cursor-pointer " >
      Home
    </li>
    <li className="cursor-pointer" onClick={(e)=>{navigate("/update?id=")}}>
      Update
    </li>
    <li className="cursor-pointer " onClick={(e)=>{navigate("/signin"),localStorage.removeItem("token")}}>Logout</li>
  </ul>
  </div>
)
}
export default Navbar;