import Logo from "#/assets/algogrid_logo.svg"
import {Link} from "react-router-dom" 
import SideBar from "#/component/SideBar.jsx"
import Buttons from "#/component/Button.jsx"
function Login(){

    return(

        <>
        <div className="flex flex-row">

        
        
        
        <div className="bg-[#F4F7F6] min-h-screen w-screen">
            <nav className="px-4 py-4 sm:px-8">
                <div className="w-70">
                    <img src={Logo} alt="AlgoGrid" className="w-40 sm:w-52 md:w-40"/>
                </div>
            </nav>

            <main>
                <div className="flex flex-col items-center px-4">
                    <div className="  ">
                        <img src={Logo} alt="AlgoGid" className="w-44 sm:w-56 md:w-72 mb-6  " />
                    </div>
                    <div className=" items-center border-0 border-gray-800  h-full w-full max-w-md p-8 bg-white shadow-xl rounded-xl">
                        <div>
                            <h1 className="text-3xl   font-bold text-[#111827] mb-8 text-center">
                                Welcome Back
                            </h1>
                        </div>
                        <div>
                            <form action="" className="space-y-5">
                                <div>
                                    
                                    <div className="pt-5">
                                        <input type="email" placeholder="Email" className=" h-11 w-full p-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#4F86C6] focus:border-[#4F86C6] transition-all duration-500" />
                                    </div>
                                    <div className="pt-5">
                                        <input type="password" placeholder="Password" className="h-11 w-full px-4 p-3 border bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#4F86C6] focus:ring-2 focus:ring-[#4F86C6] transition-all duration-500" />
                                    </div>
                                    <div className="pt-3 flex justify-end ">
                                        <Link className="text-sm text-primary hover:underline">Forgot password?</Link>    
                                    </div>  
                                    <div className="pt-5 pb-10">  
                                        <Buttons variant="primary"> Login</Buttons>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-full max-w-md flex justify-between mt-5 text-sm">
                        <div className="order-first pl-3 ">
                            <Link to="/signup" className="text-primary hover:underline">Crate Account</Link>
                        </div>
                        <div className="order-last pr-2">
                            <Link to="/" className="text-primary hover:underline">Back To Home</Link>
                        </div>

                    </div>
                </div>
            </main>
        </div>
        </div>
        </>
    )
}
export default Login