
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Route, Router, Routes} from "react-router";

function App() {

    return (
        <>
            <div className="container-fluid">
                <Routes>
                    <Route path={''} element={<Login></Login>}></Route>
                    <Route path={'register'} element={<Register></Register>}></Route>
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