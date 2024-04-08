import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import item from "router/lib/layer";


export default function ListProductAdmin() {
    let [list, setList] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/students").then(res => {
            setList(res.data)
        })
    }, []);
    return (
        <>
            <div className="col-9">
                <h1>List Product Admin page</h1>
                <table className="table table-sm table-dark">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Hành đông</th>
                        <th scope="col">Điểm</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map((item, key) => (
                        <tr key={key}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.action}</td>
                            <td>{item.score}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>

        </>
    )
}