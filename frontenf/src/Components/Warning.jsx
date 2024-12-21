import { Link } from "react-router-dom";
export function Warning({label, buttontext,to}){
  return(
  <div className="py-2 text-sm flex justify-center p-3">
    <div>
    {label}
    </div>
    <Link className="pointer underline pl-1 cursor-pointer" to={to}>{buttontext}</Link>
  </div>
  )
}