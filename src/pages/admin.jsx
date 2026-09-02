import { Route, Routes, Link  } from "react-router-dom";
import { FaList } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import AdminProductsPage from "./admin/adminProductsPage";

export default function AdminPage(){
    return(
        <div className="w-full h-full border-4 flex bg-accent">
            
            <div className="w-75 h-full flex bg-accent flex-col text-white">
                <h1 className="text-center text-2xl font-bold p-[10px] border-b-4 mt-6 border-white">Admin Panel</h1>
                <Link className="flex w-full  p-[10px] gap-3 justify-center items-center hover:bg-amber-50 hover:text-accent " to="/admin/"><FaList />Orders</Link>
                <Link className="flex w-full  p-[10px] gap-3 justify-center items-center hover:bg-amber-50 hover:text-accent" to="/admin/products"><MdOutlineShoppingBag />Products</Link>
                <Link className="flex w-full  p-[10px] gap-3 justify-center items-center hover:bg-amber-50 hover:text-accent" to="/admin/users"><FaRegUser />Users</Link>
                

            </div>
            <div className=" w-[calc(100%-300px)] h-full border-8 p-4 border-accent rounded-[20px] bg-primary">
            <Routes>
                <Route path="/" element={<h1>orders Page</h1>}/>
                <Route path="/products" element={<AdminProductsPage />} />
                <Route path="/users" element={<h1>Users Page</h1>}/>
            </Routes>
            </div>
            
        </div>
    )
}