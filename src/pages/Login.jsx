import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import Navbar from "../components/Navbar/Navbar";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "https://transportsitebackend.onrender.com/api/auth/login",
                {
                    email,
                    password
                }
            );

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            if (res.data.user.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/dashboard");
            }

        } catch (err) {
            console.log(err);
            alert("Invalid email or password");
        }
    };


    return (
        <>
            <Navbar />
            <div className="login-container d-flex justify-content-center align-items-center">
                <div className="card login-card p-4 shadow-lg">
                    <h2 className="text-center mb-4 fw-bold text-dark">Welcome to Dharmik carriage </h2>

                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label className="form-label text-dark">Email</label>
                            <input
                                type="email"
                                className="form-control custom-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label text-dark">Password</label>
                            <input
                                type="password"
                                className="form-control custom-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100 login-btn">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
