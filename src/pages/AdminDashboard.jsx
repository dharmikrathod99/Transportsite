// src/pages/DashboardLayout.jsx
import "./DashboardLayout.css";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DashboardLayout = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        uid: "",
        date: "",
        gokm: "",
        comekm: "",
        totlekm: "",
        city: "",
        weight: "",
        rent: "",
    });
    const [editId, setEditId] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const BASE_URL = "https://transportsitebackend.onrender.com";

    // =========================
    // FETCH USERS FROM BACKEND
    // =========================
    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.get(`${BASE_URL}/api/userdata`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            setUsers(res.data);
        } catch (err) {
            console.error("Fetch Error:", err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // =========================
    // HANDLE FORM INPUT
    // =========================
    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedForm = { ...formData, [name]: value };

        // Calculate total km
        const go = parseFloat(name === "gokm" ? value : formData.gokm);
        const come = parseFloat(name === "comekm" ? value : formData.comekm);

        if (!isNaN(go) && !isNaN(come)) {
            const total = come - go;
            updatedForm.totlekm = total;

            // Calculate rent automatically
            if (!isNaN(total)) {
                const rentValue = ((total - 60) * 31) + 3500;
                updatedForm.rent = rentValue > 0 ? rentValue : 3500;
            }
        }

        setFormData(updatedForm);
    };

    // =========================
    // HANDLE SUBMIT
    // =========================
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");

            if (editId) {
                await axios.put(`${BASE_URL}/api/userdata/${editId}`, formData, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setEditId(null);
            } else {
                await axios.post(`${BASE_URL}/api/userdata`, formData, {
                    headers: { Authorization: `Bearer ${token}` },
                });
            }

            setFormData({
                uid: "",
                date: "",
                gokm: "",
                comekm: "",
                totlekm: "",
                city: "",
                weight: "",
                rent: "",
            });

            fetchUsers();
        } catch (err) {
            console.error("Submit Error:", err);
        }
    };

    // =========================
    // HANDLE EDIT
    // =========================
    const handleEdit = (user) => {
        setFormData({
            uid: user.uid,
            date: user.date,
            gokm: user.gokm,
            comekm: user.comekm,
            totlekm: user.totlekm,
            city: user.city,
            weight: user.weight,
            rent: user.rent,
        });
        setEditId(user._id);
    };

    // =========================
    // HANDLE DELETE
    // =========================
    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`${BASE_URL}/api/userdata/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchUsers();
        } catch (err) {
            console.error("Delete Error:", err);
        }
    };

    // =========================
    // SIDEBAR TOGGLE
    // =========================
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    // =========================
    // LOGOUT
    // =========================
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="dashboard-container">
            {/* Navbar */}
            <nav className="dashboard-navbar">
                <button className="toggle-btn" onClick={toggleSidebar}>
                    ☰
                </button>
                <h4 className="brand">🚍 TranspoX Admin</h4>
            </nav>

            {/* Sidebar */}
            <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                <ul>
                    <button className="cst-btn" onClick={toggleSidebar}>
                        Dashboard
                    </button>
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                    <li onClick={handleLogout} className="logout">
                        Logout
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <h2>Dashboard Overview</h2>

                <div className="crud-container">
                    <h2>User Management</h2>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="crud-form">
                        <input type="number" name="uid" placeholder="ક્રમ" value={formData.uid} onChange={handleChange} />
                        <input type="date" name="date" value={formData.date} onChange={handleChange} />
                        <input type="text" name="gokm" placeholder="જવાના km" value={formData.gokm} onChange={handleChange} />
                        <input type="text" name="comekm" placeholder="આવવાના km" value={formData.comekm} onChange={handleChange} />
                        <input type="text" name="totlekm" placeholder="કુલ km" value={formData.totlekm} onChange={handleChange} />
                        <input type="text" name="city" placeholder="ગામ" value={formData.city} onChange={handleChange} />
                        <input type="text" name="weight" placeholder="મણ" value={formData.weight} onChange={handleChange} />
                        <input type="text" name="rent" placeholder="ભાડું" value={formData.rent} onChange={handleChange} />
                        <button type="submit">{editId ? "Update User" : "Add User"}</button>
                    </form>

                    {/* TABLE */}
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>ક્રમ</th>
                                    <th>તારીખ</th>
                                    <th>જવાના km</th>
                                    <th>આવવાના km</th>
                                    <th>કુલ km</th>
                                    <th>ગામ</th>
                                    <th>મણ</th>
                                    <th>ભાડું</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user._id}>
                                        <td>{user.uid}</td>
                                        <td>{user.date}</td>
                                        <td>{user.gokm}</td>
                                        <td>{user.comekm}</td>
                                        <td>{user.totlekm}</td>
                                        <td>{user.city}</td>
                                        <td>{user.weight}</td>
                                        <td>{user.rent}</td>
                                        <td>
                                            <button onClick={() => handleEdit(user)}>Edit</button>
                                            <button className="delete-btn" onClick={() => handleDelete(user._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
