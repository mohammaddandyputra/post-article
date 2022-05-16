import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import Sidebar from "../../components/Sidebar";

const Form = () => {

    const navigate = useNavigate()
    const [posts, setPosts] = useState({
        // title: 'tesssssssssssssssssssssssssssssssssssssssssssss',
        // content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        // category: 'tes',
        // status: 'Draft',
        title: '',
        content: '',
        category: '',
        status: '',
    })

    const handleChange = (event) => {
        const newData = { ...posts }
        newData[event.target.name] = event.target.value
        setPosts(newData);
    }

    const handleSubmit = (e, value) => {
        e.preventDefault();

        axios.post(`${process.env.REACT_APP_BASE_URL}/post`, {
            title: posts.title,
            content: posts.content,
            category: posts.category,
            status: value
        })
        .then(res => {
            if(res.data.status == "error"){
                swal(`${res.data.message}`, "You clicked the button!", "error");
            }
            else{
                swal(`${res.data.message}`, "You clicked the button!", "success");
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
                <div className="card-header text-center fw-bold">
                    Add New
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group mt-2 mb-2">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" name="title" id="title" value={posts.title} onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className="form-group mt-2 mb-2">
                                <label htmlFor="content">Content</label>
                                <textarea type="text" className="form-control" name="content" id="content" value={posts.content} onChange={(e) => handleChange(e)}></textarea>
                            </div>
                            <div className="form-group mt-2 mb-2">
                                <label htmlFor="category">Category</label>
                                <input type="text" className="form-control" name="category" id="category" value={posts.category} onChange={(e) => handleChange(e)}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-sm-1">
                            <div className="d-flex">
                                <button className="btn btn-primary mx-2" onClick={(e) => handleSubmit(e, 'Publish')}>Publish</button>
                                <button className="btn btn-secondary" onClick={(e) => handleSubmit(e, 'Draft')}>Draft</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AddNew = () => {
    return (
        <div className="wrapper">
            <Sidebar/>
            <Form/>
        </div>
    )
}

export default AddNew;