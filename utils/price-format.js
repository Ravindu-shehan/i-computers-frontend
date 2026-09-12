export default function getFormattedPrice(price){

    if(price==null){
        return "N/A"
}

const priceInNumber = Number(price);

if(isNaN(priceInNumber)){
    return "N/A"
}else{
    return  priceInNumber.toLocaleString("en-Us", { minimumFractionDigits: 2, maximumFractionDigits: 2})
}

}

//https://wjhtfxgabsdhfjypeikg.supabase.co/rest/v1/
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqaHRmeGdhYnNkaGZqeXBlaWtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyMjc3NjksImV4cCI6MjEwNDgwMzc2OX0.h-IaFqlouac03WJZHcrFRl6TC__LqLeEzK20s8z5Vwg