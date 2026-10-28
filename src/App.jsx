import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/admin";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import Test from "./components/test";
import { Toaster } from "react-hot-toast";
import ProductPage from "./pages/productPage";

export default function App() {
  return(
    <div className="w-full h-screen bg-primary text-secondary">
      <Toaster position="top-right"/>
      <Routes>
        <Route path="/*" element= {<HomePage/>}/>
        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/product" element={ProductPage}/>

      </Routes>

    </div>
  )
}





