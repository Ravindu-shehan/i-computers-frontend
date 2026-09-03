export default function AdminAddProductPage(){
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");

    return(
        <div className="w-full h-full flex">
            <div className="w-[50%] h-[120px] flex ">
                <label className="text-xl font-bold m-2">Product ID</label>
                <input 
                    placeholder="EX: ID001" 
                    className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 flex-1 focus:outline-white"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                />
            </div>
            <div className="w-[50%] h-[120px] flex ">
                <label className="text-xl font-bold m-2">Product Name</label>
                <input 
                    placeholder="EX: ID002" 
                    className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 flex-1 focus:outline-white"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
            </div>
            
        </div>
    )
}