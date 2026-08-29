import { useState } from "react"

export default function Test(){

    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(true)
    

    
    return(
        <div className="w-full h-full bg-accent flex items-center justify-center">
            <h1>{isVisible}</h1>
            <button onClick={
                ()=>{
                    setIsVisible(!isVisible)
                }
            } className="w-[50px] h-[50px] bg-red-600 text-white">{isVisible?"x":"o" }</button>
            { isVisible && <div className="w-100 h-100 bg-amber-50 flex items-center justify-center flex-col" >
                <h1 className="text-[55px]">{count}</h1>
                <div className="w-full h-[50px]  gap-2 flex justify-center items-center">
                    <button onClick={
                        ()=>{
                            setCount(count-1)

                        }
                    } className="w-[100px] h-[45px] bg-red-600 text-white">
                        Decrement
                    </button>
                    <button onClick={
                        ()=>{
                             setCount(count+1)
                        }
                        }className="w-[100px] h-[45px] bg-green-600 text-white">
                        Increment
                    </button>
                </div>
            </div>}

        </div>
    )
}