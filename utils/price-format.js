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