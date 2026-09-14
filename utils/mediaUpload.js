import { createClient } from "@supabase/supabase-js/dist/index.cjs"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqaHRmeGdhYnNkaGZqeXBlaWtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyMjc3NjksImV4cCI6MjEwNDgwMzc2OX0.h-IaFqlouac03WJZHcrFRl6TC__LqLeEzK20s8z5Vwg";
const supabaseUrl = "https://wjhtfxgabsdhfjypeikg.supabase.co/rest/v1/";

const supabase = createClient(supabaseUrl, supabaseKey);


export default function uploadFile(file){
    return new Promise(
        (resolve, reject)=>{

            if(file == null){
                reject("No file provided")
                return
            }

            const timestamp = new Date().getTime()
            const fileName = timestamp + "-" + file.name

            supabase.storage.from("images").upload(fileName, file, {
                upsert : false,
                cacheControl : 3600
            }).then(
                ()=>{
                    const url = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl
                    resolve(url)
                }
            ).catch(
                ()=>{
                    reject("Failed to upload file")
                }
            )
        }
    )
}