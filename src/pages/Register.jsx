import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "https://transportsitebackend.onrender.com/api/auth/register",
                {
                    name,
                    email,
                    password,
                }
            );

            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.message || "Register failed");
        }
    };

    return (
        <div className="register-container d-flex justify-content-center align-items-center">
            <div className="card register-card p-4 shadow-lg">
                <h2 className="text-center mb-4 fw-bold text-dark">
                    Create Account
                </h2>

                {error && (
                    <div className="alert alert-danger py-2 text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label className="form-label text-dark">Name</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

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

                    <button type="submit" className="btn btn-success w-100 register-btn">
                        Register
                    </button>
                </form>

                <p className="text-center mt-3 text-dark">
                    Already have an account?{" "}
                    <Link to="/login" className="login-link text-dark">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
