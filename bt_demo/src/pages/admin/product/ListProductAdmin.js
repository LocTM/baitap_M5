import {useEffect, useState} from "react";


export default function ListProductAdmin() {
    let [list, setList] = useState([])
    useEffect(() => {
        axios
    }, []);
    return (
        <>
            <div className="col-9">
                <h1>List Product Admin page</h1>
            </div>

        </>
    )
}