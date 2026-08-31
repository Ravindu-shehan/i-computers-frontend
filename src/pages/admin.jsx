import { Route, Routes, Link  } from "react-router-dom";


export default function AdminPage(){
    return(
        <div className="w-[100%-300px] h-full bg-red-400 flex">
            
            <div className="w-75 h-full flex bg-amber-50 flex-col ">
                <Link to="/admin/">Orders</Link>
                <Link to="/admin/products">Products</Link>
                <Link to="/admin/users">Users</Link>
                

            </div>
            <Routes>
                <Route path="/" element={<h1>orders Page</h1>}/>
                <Route path="/products" element={<h1>Products Page</h1>}/>
                <Route path="/users" element={<h1>Users Page</h1>}/>
            </Routes>
            
        </div>
    )
}