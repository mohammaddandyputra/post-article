import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Sidebar from "../../components/Sidebar";

const Table = () => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/post/publish/10/0`)
        .then(res => {
            setPost(res.data.data)
        })
    }, []);


    return (
        <div id="container">

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button type="button" id="sidebarCollapse" className="btn btn-light">
                        <i className='bx bxs-left-arrow'></i>
                    </button>
                </div>
            </nav>

            <div className="card">
                <div className="card-header text-center font-weight-bold">
                    All Posts
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12 overflow-auto">
                            <table id="table-form" className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Content</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {post.map(
                                        (data, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{data.title}</td>
                                                    <td>{data.content}</td>
                                                    <td>{data.category}</td>
                                                    <td>{data.status}</td>
                                                </tr>
                                            )
                                        }
                                    )}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Preview = () => {
    return (
        <div className="wrapper">
            <Sidebar/>
            <Table/>
        </div>
    )
}

export default Preview;