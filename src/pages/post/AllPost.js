import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

import Sidebar from "../../components/Sidebar";

const Table = () => {

    const navigate = useNavigate()
    const [post, setPost] = useState([])
    const [paginate, setPaginate] = useState(10)
    const [countStatus, setCountStatus] = useState(0)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/post`)
        .then(res => {
            setCountStatus(res.data)
        })
    }, []);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/post/${paginate}/0`)
        .then(res => {
            setPost(res.data.data)
        })
    }, []);

    const handleFilterSubmit = (e, status) => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/post/filter/${status}/${paginate}/0`)
        .then(res => {
            setPost(res.data.data)
        })
    }

    const handleChangeTrash = (e, id) => {
        e.preventDefault();

        swal({
            title: "Apakah anda yakin?",
            text: "Status data ini akan berubah menjadi Trash!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                axios.post(`${process.env.REACT_APP_BASE_URL}/post/trash/${id}`)
                .then(res => {
                    swal(`${res.data.message}`, {
                        icon: "success",
                    })
                })
                navigate('/all-posts', {replace: true});
            }
        });
    }

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
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-primary" onClick={(e) => handleFilterSubmit(e, 'Publish')}>
                                    Publish
                                    <span className="badge badge-light">{countStatus.countPublish}</span>
                                </button>
                                <button type="button" className="btn btn-primary" onClick={(e) => handleFilterSubmit(e, 'Draft')}>
                                    Draft
                                    <span className="badge badge-light">{countStatus.countDraft}</span>
                                </button>
                                <button type="button" className="btn btn-primary" onClick={(e) => handleFilterSubmit(e, 'Trash')}>
                                    Trash
                                    <span className="badge badge-light">{countStatus.countTrash}</span>
                                </button>
                            </div>
                            <table id="table-form" className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Content</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
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
                                                    <td>
                                                        <Link to={`/all-posts/${data.id}`} className="btn btn-primary btn-sm">Edit</Link>
                                                        <button className="btn btn-danger" onClick={e => handleChangeTrash(e, data.id)}>Trash</button>
                                                    </td>
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

const AllPosts = () => {
    return (
        <div className="wrapper">
            <Sidebar/>
            <Table/>
        </div>
    )
}

export default AllPosts;