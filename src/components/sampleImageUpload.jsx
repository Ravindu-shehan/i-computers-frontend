import { useState } from "react"
import uploadFile from "../../..mediaUpload.js"




export default function Test(){

    const [file , setFile] = useState(null)

   async function upload(){
    try{
        const url = await uploadFile(file)
        console.log(url)
    }catch(err){
        console.log(err)
        
    }
    
   }
    

    
    return(
        <div className="w-full h-full bg-accent flex items-center justify-center">
           
           <input type="file" onChange={
            (e)=>{
                setFile(e.target.files[0])
            }
           }/>

           
          

           <button onChange={upload} className="w-[100px] h-[40px] bg-accent text-white rounded-lg">
            Upload 
           </button>


        </div>
    )
}