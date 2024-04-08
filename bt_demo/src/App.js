
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Route, Router, Routes} from "react-router";
import Admin from "./pages/admin/Admin";
import Home from "./pages/home/Home";
import ListProductAdmin from "./pages/admin/product/ListProductAdmin";
import ListOrder from "./pages/home/order/ListOrder";
import ListOrderAdmin from "./pages/admin/order/ListOrderAdmin";
import ListUserAdmin from "./pages/admin/user/ListUserAdmin";

function App() {

    return (
        <>
            <div className="container-fluid">
                <Routes>
                    <Route path={''} element={<Login></Login>}></Route>
                    <Route path={'register'} element={<Register></Register>}></Route>
                    <Route path={'admin'} element={<Admin></Admin>}>
                        <Route path={''} element={<ListProductAdmin/>}></Route>
                        <Route path={'order'} element={<ListOrderAdmin/>}></Route>
                        <Route path={'user'} element={<ListUserAdmin/>}></Route>
                    </Route>
                    <Route path={'home'} element={<Home></Home>}></Route>

                </Routes>

            </div>
        </>
    );
}

export default App;
//npm i react-router-dom

//BrowserRouter
//Routes
//Route
//useParams
//useNavigate
//Link

//Outlet
// => Redux ToolKit async thunk
// => X