import { useState } from "react";

export default function AdminAddProductPage(){
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productAltNames, setProductAltNames] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productLabelledPrice, setProductLabelledPrice] = useState(0);
    const [productImage, setProductImage] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productStock, setProductStock] = useState(0);

    return(
        <div className="w-full max-h-full flex flex-wrap items-start">
            <div className="w-[50%] h-[120px] flex flex-col">
                <label className="text-xl font-bold m-2">Product ID</label>
                <input 
                    placeholder="EX: ID001" 
                    className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 flex-1 focus:outline-white"
                    
                    onChange={(e) => {setProductId(e.target.value)}}
                />
            </div>
            <div className="w-[50%] h-[120px] flex flex-col ">
                <label className="text-xl font-bold m-2">Product Name</label>
                <input 
                    placeholder="john doe" 
                    className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 flex-1 focus:outline-white"
                    
                    onChange={(e) => {setProductName(e.target.value)}}
                />
            </div>
            <div className="w-full h-[170px] flex flex-col">
                <label className="text-xl font-bold m-2">Product Description</label>
                <textarea 
                    placeholder="Text-here" 
                    className="border-4 border-accent rounded-[10px] h-[100px] p-2 m-2 flex-1 focus:outline-white"
                    
                    onChange={(e) => {setProductDescription(e.target.value)}}
                />
            </div>
            <div className="w-full h-[120px] flex flex-col ">
                <label className="text-xl font-bold m-2">Alternative Names</label>
                <input 
                    placeholder="john doe" 
                    className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 flex-1 focus:outline-white"
                    
                    onChange={(e) => {setProductAltNames(e.target.value)}}
                />
            </div>
            <div className="w-[50%] h-[120px] flex flex-col ">
                <label className="text-xl font-bold m-2">Product Price</label>
                <input 
                    placeholder="$50" 
                    className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 flex-1 focus:outline-white"
                    
                    onChange={(e) => {setProductPrice(parseFloat(e.target.value) || 0)}}
                />
            </div>
            <div className="w-[50%] h-[120px] flex flex-col ">
                <label className="text-xl font-bold m-2">Labelled Price</label>
                <input 
                    placeholder="$50" 
                    className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 flex-1 focus:outline-white"
                    
                    onChange={(e) => {setProductLabelledPrice(parseFloat(e.target.value) || 0)}}
                />
            </div>
            

            </div>
        </div>
    )
}