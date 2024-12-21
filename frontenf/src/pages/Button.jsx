export function Button({label,onClick}){
  return <div>
    <button className="cursor-pointer p-1 w-60 text-center bg-black rounded-3xl text-white" onClick={onClick}>{label}</button>
  </div>
}