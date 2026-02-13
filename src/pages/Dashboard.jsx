import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./Home";
import "./Dashboard.css";

const Dashboard = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="dashboard-wrapper">

            {/* Welcome Section */}
            <div className="dashboard-hero d-flex justify-content-center align-items-center">
                <motion.div
                    className="welcome-card text-center p-4"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-white">
                        Welcome, {user?.name} 👋
                    </h1>

                    <p className="text-light mb-3">
                        {user?.email}
                    </p>

                    <button
                        className="btn btn-danger logout-btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </motion.div>
            </div>

            {/* Home Content Below */}
            <Home />

        </div>
    );
};

export default Dashboard;
