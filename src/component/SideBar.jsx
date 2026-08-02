import Logo from "#/assets/algogrid_logo.svg"
// import {Home} from "simple-icons"
import {AiOutlineHome, AiOutlineCode, AiOutlineSetting, AiOutlineTrophy, AiOutlineUser, AiOutlineHistory} from "react-icons/ai"

function Navbar(){

    return(
        <>
        <aside className="bg-white border-r border-gray-300 flex flex-col justify-between w-72 h-screen pb-6 ">
            <div >
                <div className="w-20 lg:w-60 sm:w-40 md:w-50">
                    <img src={Logo} alt="AlgoGrid" />
                </div>
                <div className="pr-2 pt-7 pl-2">
                    <button className="group w-full h-13  hover:bg-blue-50  hover:rounded-xl transition-all duration-200">
                        <div className="flex flex-row ml-8">
                            <AiOutlineHome className="size-6 mt-1  group-hover:text-logo  text-gray-600 transition-colors duration-200" />

                            <span className="text-xl ml-5 mt-0.5 font-medium   group-hover:text-logo text-gray-600 transition-colors duration-200">
                            Home
                            </span>
                        </div>
                    </button>
                    <button className="group w-full h-13 hover:bg-blue-50 hover:rounded-xl transition-all duration-200">
                        <div className="flex flex-row ml-8">
                            <AiOutlineCode   className="size-6 mt-1  group-hover:text-logo text-gray-600 transition-colors duration-200" />

                            <span className="text-xl ml-5 mt-0.5 font-medium text-gray-600 group-hover:text-logo transition-colors duration-200">
                            Problems
                            </span>
                        </div>
                    </button>
                    <button className="group w-full h-13 hover:bg-blue-50 hover:rounded-xl transition-all duration-200">
                        <div className="flex flex-row ml-8">
                            <AiOutlineTrophy    className="size-6 mt-1  group-hover:text-logo text-gray-600 transition-colors duration-200" />

                            <span className="text-xl ml-5 mt-0.5 font-medium text-gray-600 group-hover:text-logo transition-colors duration-200">
                            Leaderboard
                            </span>
                        </div>
                    </button>
                    <button className="group w-full h-13 hover:bg-blue-50 hover:rounded-xl transition-all duration-200">
                        <div className="flex flex-row ml-8">
                            <AiOutlineHistory  className="size-6 mt-1  group-hover:text-logo text-gray-600 transition-colors duration-200" />

                            <span className="text-xl ml-5 mt-0.5 font-medium text-gray-600 group-hover:text-logo transition-colors duration-200">
                            Submissions
                            </span>
                        </div>
                    </button>
                </div>
            </div>

            <div className="pr-2 pl-3 flex flex-col gap-1">
                
                    <button className="group w-full h-13 hover:bg-blue-50 hover:rounded-xl transition-all duration-200">
                        <div className="flex flex-row ml-8">
                            <AiOutlineUser   className="size-6 mt-1  group-hover:text-logo text-gray-600 transition-colors duration-200" />

                            <span className="text-xl ml-5 mt-0.5 font-medium text-gray-600 group-hover:text-logo transition-colors duration-200">
                            Profile
                            </span>
                        </div>
                    </button>
                    <button className="group w-full  h-13 hover:bg-blue-50 hover:rounded-xl transition-all duration-200">
                        <div className="flex flex-row ml-8">
                            <AiOutlineSetting    className="size-6 mt-1  group-hover:text-logo text-gray-600 transition-colors duration-200" />

                            <span className="text-xl ml-5 mt-0.5 font-medium text-gray-600 group-hover:text-logo transition-colors duration-200">
                            Settings
                            </span>
                        </div>
                    </button>
            </div>       

        </aside>
        </>
    )
}
export default Navbar;