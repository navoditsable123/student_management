import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-warning fs-3" to="home">Online Education</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-info fs-bold fs-5" aria-current="page" to="home">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active text-info fs-bold fs-5" aria-current="page" to="about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active text-info fs-bold fs-5" aria-current="page" to="gallery">GALLERY</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active text-info fs-bold fs-5" aria-current="page" to="add">ADDSTUDENT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active text-info fs-bold fs-5" aria-current="page" to="show">SHOW</NavLink>
                            </li>



                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;