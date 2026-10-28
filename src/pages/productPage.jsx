import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export default function ProductPage(){

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(
        ()=>{
            if(loading){
                axios.get(import.meta.VITE_API_URL + "/products")
                .then(
                    (response)=>{
                        setProducts(response.data)
                        setLoading(false)
                    }
                ).catch(
                    ()=>{
                        toast.error("Failed to fetch products. please try again.")
                        setLoading(false)
                    }
                )
            }
        },[loading]
    )
    return(
        <div className="">
            {products.map(
                (item)=>{
                    return(
                        <div>{item.name}</div>
                    )
                }
            )}
            
        </div>
    )
}