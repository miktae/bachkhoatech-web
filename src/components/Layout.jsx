import { Outlet, Link, NavLink, useResolvedPath, useMatch } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styling/Layout.css';

function CustomLink({ children, to }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <li className="nav-item">
            <NavLink className="nav-link"
                style={{
                    backgroundColor: match ? "blue" : "",
                    color: match ? "white" : "",
                }}
                to={to}
            >
                {children}
            </NavLink>
        </li>
    );
}

const Layout = () => {
    return (
        <>
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Bach Khoa Tech</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <CustomLink to="/">
                                <i className="fa-solid fa-house"></i>
                                <span className="nav-text">Trang chủ</span>
                            </CustomLink>
                            <CustomLink to="/lien-he">
                                <i className="fa-solid fa-address-book"></i>
                                <span className="nav-text">Liên hệ</span>
                            </CustomLink>
                            <CustomLink to="/ve-chung-toi">
                                <i className="fa-solid fa-address-card"></i>
                                <span className="nav-text">Về chúng tôi</span>
                            </CustomLink>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2 search-field" type="search" placeholder="Tìm kiếm" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;