import { Route,Routes } from "react-router-dom";
import Header from "../components/header";
import ProductPage from "./productPage";

export default function HomePage(){
    return(
        <div className="w-full h-screen bg-blue-400">
           <Header/>
           <Routes>
            <Route path="/" element={<div>Home page Content</div>}/>
            <Route path="/about" element={<div>About Page Content</div>}/>
            <Route path="/contact" element={<div>Contact Page content</div>}/>
            {/*products */}
            <Route path="/products" element={ProductPage}/>
            <Route path="/*" element={<div>404 not found</div>}/>
           </Routes>
        </div>
    )
}                               