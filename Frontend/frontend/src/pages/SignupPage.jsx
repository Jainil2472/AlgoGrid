import Logo from "#/assets/algogrid_logo.svg";
import { Link } from "react-router-dom";
import Buttons from "#/component/Button.jsx"
function Signup() {
    
  return (
    <>
    <div className="min-h-screen w-full bg-[#F4F7F6] overflow-x-hidden">
        <nav className="px-4 py-4">
            <img src={Logo} alt="AlgoGrid" className="w-28 sm:w-36 md:w-44" />
        </nav>

        <main className="px-4 pb-8">
            <div className="flex flex-col items-center">

                <div className="w-40 sm:w-52 md:w-64 lg:w-72 mb-4">
                    <img src={Logo} alt="AlgoGrid" className="w-full" />
                </div>

                <div className="w-full max-w-lg bg-white shadow-xl rounded-xl px-6 py-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#111827] mb-8">Join The Grid</h1>

                    <form className="space-y-5">
                    <input type="text" placeholder="Full Name" className="w-full h-11 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4F86C6] focus:border-[#4F86C6]" />

                    <input type="text" placeholder="Username" className="w-full h-11 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4F86C6] focus:border-[#4F86C6]" />

                    <input type="email" placeholder="Email" className="w-full h-11 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4F86C6] focus:border-[#4F86C6]" />

                    <input type="password" placeholder="Password" className="w-full h-11 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4F86C6] focus:border-[#4F86C6]" />

                    <button type="submit" className="w-full h-11 bg-primary text-white rounded-md border-2 border-primary transition-all duration-300 hover:bg-white hover:text-primary">Create Account</button>
                    </form>
                </div>
                <div className="w-full max-w-md flex justify-between mt-5 text-sm">
                    <div className="order-first pl-3 ">
                        <Link to="/login" className="text-primary hover:underline">Login</Link>
                    </div>
                    <div className="order-last pr-2">
                        <Link to="/" className="text-primary hover:underline">Back to Home</Link>
                    </div>

                </div>
            

            </div>
        </main>
    </div>
    </>
  );
}

export default Signup;