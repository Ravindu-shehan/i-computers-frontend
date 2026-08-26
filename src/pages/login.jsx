import { Link } from "react-router-dom";

export default function LoginPage(){
    return(
        <div className="w-full h-full bg-[url(/bgnew.jpg)] bg-cover bg-center bg-no-repeat flex items-center justify-center">
            <div className="w-[50%] h-full flex flex-col items-center justify-center">

                <img src="/logo.jpg" className="w-75 h-75 object-cover" />
                <h1 className="text-4xl font-bold mt-5 text-white">I Computers</h1>

            </div>
            
            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-140 h-162.5 backdrop-blur-md flex flex-col justify-center items-center shadow-2xl rounded-2xl">

                    <h1 className="font-semibold text-[45px] text-secondary">Welcome to  i Computers</h1>

                    <input type="email" placeholder="Email" className="m-5 p-3 w-[90%] h-12.5 rounded-lg border border-secondary outline-none"/>
                    
                    <input type="password" placeholder="Password" className="m-5 p-3 w-[90%] h-12.5 rounded-lg border border-secondary outline-none"/>
                     <p className="w-full bg-amber-50 text-center">Forgot Password? <Link to="/reset" className="text-accent" >
                     Reset
                     </Link>
                     </p>

                    <button className="m-5 p-3 w-[90%] h-12.5 bg-accent rounded-lg text-white font-bold">Login</button>
                    <button className="m-5 p-3 w-[90%] h-12.5 border-accent rounded-lg text-white font-bold">Login with Google</button>
                    <p className="w-full bg-amber-50 text-center">Don't have an account? <Link to="/register" className="text-accent" >
                    Register
                    </Link>
                    </p>

                    
                    

                </div>
                
            </div>
            
        </div>
    )
}