import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

export default function Login() {
    let navigate = useNavigate()
    let login = () => {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        console.log(username,password);
        if(username == "admin" && password == "123456"){
            alert("Xin chào ADMIN")
            navigate("/admin")
        }
        else{
            alert("Sai rồi, gõ lại đi")
            navigate("/")
        }
    }
    return (
        <>
            <div className="row">
                <div className="offset-4"></div>
                <div className="col-4">
                    <h1 className={'text-center'}>Login page</h1>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="username"
                               aria-describedby="emailHelp"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={login}>Submit</button>
                    <Link to={"/register"}><button type={"button"} className="btn btn-secondary">Register Page</button></Link>
                </div>
                <div className="offset-4"></div>
            </div>
        </>
    )
}