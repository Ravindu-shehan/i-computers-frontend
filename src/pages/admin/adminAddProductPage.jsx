import { useState } from "react";
import axios from "axios";
import  toast  from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AdminAddProductPage(){

    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productAltNames, setProductAltNames] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productLabelledPrice, setProductLabelledPrice] = useState("");
    const [category, setCategory] = useState("Others");
    const [productBrand, setProductBrand] = useState("Standard");
    const [productModel, setProductModel] = useState("");
    const [productIsVisible, setProductIsVisible] = useState(true);
    const navigate = useNavigate();
    

    async function handleAddProduct(){
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("You must be logged in to add a product.");
                window.location.href = "/login"; // Redirect to login page
                return;
            }
            await axios.post(import.meta.env.VITE_API_URL + "/api/products",{
                productId: productId,
                name: productName,
                description: productDescription,
                altNames: productAltNames.split(","),
                price: productPrice,
                labelledPrice: productLabelledPrice,
                category: category,
                brand: productBrand,
                model: productModel,
                isVisible: productIsVisible,
                
            },{
                headers: {
                    Authorization: "Bearer " + token
                },
            })
            toast.success("Product added successfully!");
            navigate("/admin/products");
        }catch (error) {
            
            toast.error(error?.response?.data.message || "failed to add product.");
            return;
        }
    }

    return(
        <div className="w-full max-h-full flex flex-wrap items-start  border-black overflow-y-scroll hide-scroll-track">
            <h1 className="text-3xl font-bold m-1 w-full sticky top-0 bg-primary">Add new Product</h1>
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
                    <option value="1">Mobile Phones</option>
                    <option value="2">Accessories</option>
                    <option value="3">Computes</option>
                    <option value="4">Laptops</option>
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
                    <option value="2">Asus</option>
                    <option value="3">Dell</option>
                    <option value="4">HP</option>
                    <option value="5">Lenovo</option>

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
            <div className="w-full h-[80px] bg-white sticky bottom-0  rounded-b-2xl flex justify-end items-center p-4 gap-4 shadow-2xl"> 
                <button className="bg-red-400 text-white font-bold px-6 py-3 rounded-[10px] hover:bg-red-500 ">
                    Cancel
                </button>
                <button onClick={handleAddProduct} className="bg-accent text-white font-bold px-6 py-3 rounded-[10px] hover:bg-secondary">
                    Add Product
                </button>
                
            </div>
            
            

        </div>
    )
}