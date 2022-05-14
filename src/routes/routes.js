import { useRoutes } from "react-router-dom";

import '../css/style.css';
import '../css/bootstrap.min.css';

import Home from "../pages/home";
import AllPosts from "../pages/post/AllPost";
import AddNew from "../pages/post/AddNew";
import Edit from "../pages/post/Edit";
import Preview from "../pages/post/Preview";

const Rutes = () => {

    const element = useRoutes([
        {path: '/', element: <Home/>},
        {path: '/all-posts', element: <AllPosts/>},
        {path: '/all-posts/create', element: <AddNew/>},
        {path: '/all-posts/:id', element: <Edit/>},
        {path: '/all-posts/preview', element: <Preview/>},
    ]);

    return element;
}

export default Rutes;
