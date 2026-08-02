import Signup from "#/pages/SignupPage.jsx"
import Login from "#/pages/LoginPage.jsx"
import Navbar from "#/component/NavBar.jsx"
import SideBar from "#/component/SideBar.jsx"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "#/pages/HomePage"

function PublicRoutes(){
    return(

        <>

        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <Routes>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            <Routes>
                <Route path="/navbar" element={<Navbar />}/>
            </Routes>
            <Routes>
                <Route path="/sidebar" element={<SideBar />}/>
            </Routes>
            <Routes>
                <Route path="/home" element={<HomePage/>} />
            </Routes>
        
        </BrowserRouter>
        </>
    )
}
export default PublicRoutes;