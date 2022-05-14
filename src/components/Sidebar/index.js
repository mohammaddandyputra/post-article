import { Link } from "react-router-dom"

const Sidebar = () => {

    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Post Article</h3>
            </div>
            <ul className="lisst-unstyled components">
                <li className="">
                    <a href="#MasterSubmenu" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle text-decoration-none text-white">
                        <i className="bx bxs-dashboard icon"></i>
                        <span>Posts</span>
                    </a>
                    <ul className="collapse lisst-unstyled" id="MasterSubmenu">
                        <li>
                            <Link to="/all-posts" className="text-decoration-none text-white">
                                <i className="bx bxs-chevron-right icon"></i>
                                <span>All Posts</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/all-posts/create" className="text-decoration-none text-white">
                                <i className="bx bxs-chevron-right icon"></i>
                                <span>Add New</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/all-posts/preview" className="text-decoration-none text-white">
                                <i className="bx bxs-chevron-right icon"></i>
                                <span>Preview</span>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar
