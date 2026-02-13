import { useNavigate, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const token = localStorage.getItem("token"); // ✅ check login

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <motion.nav
            className="navbar navbar-expand-lg custom-navbar fixed-top"
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container">
                <Link className="navbar-brand fw-bold text-white" to="/">
                    🚍 TranspoX
                </Link>

                <button
                    className="navbar-toggler bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === "/" ? "active-link" : ""}`}
                                to="/"
                            >
                                Home
                            </Link>
                        </li>

                        {/* Show Admin only if logged in */}
                        {token && (
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname === "/login" ? "active-link" : ""}`}
                                    to="/login"
                                >
                                    Admin
                                </Link>
                            </li>
                        )}

                        {/* If logged in → show Logout */}
                        {token ? (
                            <li className="nav-item">
                                <button
                                    className="nav-link btn btn-link text-white"
                                    onClick={handleLogout}
                                    style={{ textDecoration: "none" }}
                                >
                                    Logout
                                </button>
                            </li>
                        ) : (
                            /* If NOT logged in → show Login */
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>
                        )}

                    </ul>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
