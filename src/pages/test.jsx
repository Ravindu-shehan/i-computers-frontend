import { useState } from "react"
import { createClient } from "@supabase/supabase-js/dist/index.cjs"

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqaHRmeGdhYnNkaGZqeXBlaWtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyMjc3NjksImV4cCI6MjEwNDgwMzc2OX0.h-IaFqlouac03WJZHcrFRl6TC__LqLeEzK20s8z5Vwg"
const supabaseUrl = "https://wjhtfxgabsdhfjypeikg.supabase.co/rest/v1/"

const supabase = createClient(supabaseUrl, supabaseKey)

export default function Test(){

    const [file , setFile] = useState(null)

    function uploadFile(){
        console.log(file)

        supabase.storage.from("images").upload(file.name, file, {
            upsert: false,
            cacheControl : 3600
        }).then(
            ()=>{
                const url = supabase.storage.from("images").getPublicUrl(file.name).data.publicUrl
            }
        )
    }
    

    
    return(
        <div className="w-full h-full bg-accent flex items-center justify-center">
           
           <input type="file" onChange={
            (e)=>{
                setFile(e.target.files[0])
            }
           }/>

           <button onChange={uploadFile} className="w-[100px] h-[40px] bg-accent text-white rounded-lg">
            Upload 
           </button>


        </div>
    )
}