import { useState } from "react"

export default function Test(){

    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(true)
    

    
    return(
        <div className="w-full h-full bg-accent flex items-center justify-center">
           
           <input type="file" onChange={
            (e)=>{
                console.log(e.target.files[0])
            }
           }/>


        </div>
    )
}