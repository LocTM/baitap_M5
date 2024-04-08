import Navbar from "../../components/Navbar";
import {Outlet} from "react-router";
import Logo from "../../components/Logo";
import Banner from "../../components/Banner";

export default function Home() {
    return (
        <>

            <div className="row">
                <Logo></Logo>
                <Banner></Banner>
                <Navbar></Navbar>
            </div>
        </>
    )
}