import NavBar from "#/component/NavBar";
import SideBar from "#/component/SideBar.jsx";
import Button from "../component/Button";


function HomePage(){
return(
    <>
    <div className="flex ">
        <SideBar />
        <div className="flex flex-col grow">
            <nav className="flex-auto">
                <NavBar />
            </nav>
            <main className="bg-[#F4F7F6] h-full">
                <div className="text-4xl font-normal pl-4 pt-5">
                    {/* Homepage */}
                </div>
                <div className="h-auto   m-10 bg-white min-w-11/12 rounded-lg border border-gray-200 shadow-md  ">
                    <div className="text-4xl p-3 pl-5 ">
                        Problem of the Day: <br />
                        problem statement 
                    </div>
                    <div className="pl-5 mb-5">
                        <Button size="md"> Slove</Button>
                    </div>
                </div>
                <div className="flex flex-row w-full justify-between">

                    <div className="flex flex-col ml-10 mt-10">
                        <div className="flex flex-row w-[1%]  justify-between">
                            <div className=" text-xl font-medium  ">
                                Recent Submissions
                            </div>
                            <div>
                                <Button variant="last" size="sm">sd</Button>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div>
                            i am 
                    </div>

                </div>
            </main>
        </div>
    </div>


    </>
    )
}export default HomePage;