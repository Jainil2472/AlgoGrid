import { AiOutlineSearch,AiOutlineBell  } from "react-icons/ai";


function NavBar(){
    return(
    <>
    <div className="">
        <div className="flex flex-row w-full border-b justify-between border-gray-300">
            <div className="m-3 relative">
                <AiOutlineSearch className="left-3 absolute top-1/2 -translate-y-1/2" />
                <input type="search" placeholder="Search for problems..." className="h-10 w-2xs  p-2 pl-8 rounded-xl border-2 border-gray-300" />
            </div>
            <div className="flex flex-row border-b gap-1 border-gray-300">
                {/* <AiOutlineBell className="size-6 bg-"/> */}
            </div>
        </div>
        

    </div>

    
    </>);
}
export default NavBar;