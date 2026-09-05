import { useState } from "react";

export default function AdminAddProductPage(){
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productAltNames, setProductAltNames] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productLabelledPrice, setProductLabelledPrice] = useState(0);
    const [category, setCategory] = useState("Others");
    const [productBrand, setProductBrand] = useState("Standard");
    const [productModel, setProductModel] = useState("");
    const [productIsVisible, setProductIsVisible] = useState(true);
    const [productImage, setProductImage] = useState("");
    const [productStock, setProductStock] = useState(0);

    return(
        <div className="w-full max-h-full flex flex-wrap items-start overflow-scroll">
            <h1 className="text-3xl font-bold m-4 w-full">Add new Product</h1>
            <div className="w-[50%] h-[120px] flex flex-col">
                <label className="text-xl font-bold m-2">Product ID</label>
                <input 
                    placeholder="EX: ID001" 
                    className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 flex-1 focus:outline-white"
                    value={productId}
                    onChange={(e) => {setProductId(e.target.value)}}
                />
            </div>
            <div className="w-[50%] h-[120px] flex flex-col ">
                <label className="text-xl font-bold m-2">Product Name</label>
                <input 
                    placeholder="john doe" 
                    className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 flex-1 focus:outline-white"
                    value={productName}
                    onChange={(e) => {setProductName(e.target.value)}}
                />
            </div>
            <div className="w-full h-[170px] flex flex-col">
                <label className="text-xl font-bold m-2">Product Description</label>
                <textarea 
                    placeholder="Text-here" 
                    className="border-4 border-accent rounded-[10px] h-[100px] p-2 m-2 flex-1 focus:outline-white"
                    value={productDescription}
                    onChange={(e) => {setProductDescription(e.target.value)}}
                />
            </div>
            <div className="w-full h-[120px] flex flex-col ">
                <label className="text-xl font-bold m-2">Alternative Names</label>
                <input 
                    placeholder="john doe" 
                    className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 flex-1 focus:outline-white"
                    value={productAltNames}
                    onChange={(e) => {setProductAltNames(e.target.value)}}
                />
            </div>
            <div className="w-[50%] h-[120px] flex flex-col ">
                <label className="text-xl font-bold m-2">Product Price</label>
                <input 
                    placeholder="$50" 
                    className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 flex-1 focus:outline-white"
                    value={productPrice}
                    onChange={(e) => {setProductPrice(parseFloat(e.target.value) )}} type="number"
                />
            </div>
            <div className="w-[50%] h-[120px] flex flex-col ">
                <label className="text-xl font-bold m-2">Labelled Price</label>
                <input 
                    placeholder="$50" 
                    className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 flex-1 focus:outline-white"
                    value={productLabelledPrice}
                    onChange={(e) => {setProductLabelledPrice(parseFloat(e.target.value) )}} type="number"
                />
            </div>
             <div className="w-[25%] h-[120px] flex flex-col ">
                <label className="text-xl font-bold m-2">Category</label>
                <select 
                    className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 flex-1 focus:outline-white"
                    value={category}
                    onChange={(e) => {setCategory(e.target.value)}} >
                
                    <option value="">Select a category</option>
                    <option value="1">Electronics</option>
                    <option value="2">Clothing</option>
                    <option value="3">Home & Kitchen</option>
                </select>
            </div>
            <div className="w-[25%] h-[120px] flex flex-col ">
                <label className="text-xl font-bold m-2">Brand</label>
                <select
                    className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 flex-1 focus:outline-white"
                    value={productBrand}
                    onChange={(e) => {setProductBrand(e.target.value)}}>
                
                    <option value="">Select a brand</option>
                    <option value="1">Apple</option>
                    <option value="2">Samsung</option>
                </select>
                
            </div>
            <div className="w-[25%] h-[120px] flex flex-col ">
                <label className="text-xl font-bold m-2">Model</label>
                <input 
                    placeholder="inspiration-15"
                    className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 flex-1 focus:outline-white"
                    value={productModel}
                    onChange={(e) => {setProductModel(e.target.value)}}
                />
            </div>
            <div className="w-[25%] h-[120px] flex flex-col ">
                <label className="text-xl font-bold m-2">Visible</label>
                <select 
                    className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 flex-1 focus:outline-white"
                    value={productIsVisible.toString()}
                    onChange={(e) => {setProductIsVisible(e.target.value === "true")}} > 
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
            </div>
            <div className="w-[50%] h-[80px] flex flex-col ">

            </div>
            
            

        </div>
    )
}