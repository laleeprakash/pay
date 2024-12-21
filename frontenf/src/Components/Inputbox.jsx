export function Inputbox({label,placeholder,onChange}){
  return(
    <div className="p-1">
      <div className=" p-2 text-sm font-medium text-left py-2 ">
        {label}
      </div>
     <input onChange={onChange} placeholder={placeholder} className="w-80 p-1 rounded-sm	 border-4 border-spacing-6"/>
    </div>
  )
}