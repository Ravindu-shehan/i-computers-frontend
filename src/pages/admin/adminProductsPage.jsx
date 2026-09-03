import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminProductsPage(){
    return(
        <div className="w-full h-full overflow-y-scroll "> 
            <h1 className="text-center text-2xl font-bold p-[10px] border-b-4 border-white">Products Management</h1>
            <Link to="/admin/add-product" className="flex items-center gap-2 bg-amber-500 text-white p-2 mt-20 rounded-md hover:bg-amber-600 fixed bottom-10 right-15">
                <FaPlus /> Add Product
            </Link>
            
        </div>
    )
}