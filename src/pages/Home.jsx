import { motion } from "framer-motion";
import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import heroimg from '../assets/f2.jpeg'
import g1 from '../assets/f1.jpeg'
import g2 from '../assets/f2.jpeg'
import g3 from '../assets/f3.jpeg'
import v1 from '../assets/v1.mp4'
import v2 from '../assets/v2.mp4'


const Home = () => {
    return (
        <div className="home">
            <Navbar />
            {/* HERO SECTION */}
            <section className="hero d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center pb-1">
                        <motion.div
                            className="col-md-6 text-white"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className="display-4 fw-bold">
                                Owner of Dharmik Carriage & Transportation
                            </h1>
                            <p className="lead">
                                Reliable transport businessman ensuring safe, timely deliveries with trusted and professional service.
                            </p>
                            <div className="all-btn d-flex gap-2">
                                <button className="btn btn-warning btn-lg mt-3 mb-3">
                                    <Link to='/register' className="text-decoration-none">Ragistar</Link>
                                </button>
                                <button className="btn btn-warning btn-lg mt-3 mb-3 ">
                                    <Link to='/admin' className="text-decoration-none">Admin</Link>
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            className="col-md-6 text-center"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={heroimg}
                                alt="Bus"
                                className="img-fluid hero-img"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="services py-5">
                <div className="container text-center">
                    <h2 className="fw-bold mb-5">Our Services</h2>

                    <div className="row">
                        <motion.div
                            className="col-md-4 mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="card service-card p-4 shadow">
                                <h4>City Freight Delivery</h4>
                                <p>
                                    Fast and reliable intra-city freight transport with fully insured trucks, ensuring your goods arrive safely and on time.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="col-md-4 mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="card service-card p-4 shadow">
                                <h4>Long-Haul Transport</h4>
                                <p>
                                    Efficient long-distance logistics with experienced drivers, maintaining top safety and timeliness across routes.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="col-md-4 mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="card service-card p-4 shadow">
                                <h4>Special Cargo Handling</h4>
                                <p>
                                    Expert handling of heavy, fragile, or temperature-sensitive cargo using premium trucks and professional loading techniques.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="stats py-5 text-white text-center">
                <div className="container my-5">
                    <h2 className="text-center mb-4">Gallary</h2>

                    <div className="row g-4 mixed-gallery">
                        {/* Video */}
                        <div className="col-md-4">
                            <div className="media-card">
                                <video
                                    src={v1}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-100 rounded"
                                ></video>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="col-md-4">
                            <div className="media-card">
                                <img
                                    src={g1}
                                    alt="Truck in action"
                                    className="w-100 rounded"
                                />
                            </div>
                        </div>

                        {/* Video */}
                        <div className="col-md-4">
                            <div className="media-card">
                                <video
                                    src={v2}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-100 rounded"
                                ></video>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="col-md-4">
                            <div className="media-card">
                                <img
                                    src={g2}
                                    alt="Truck loading goods"
                                    className="w-100 rounded"
                                />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="media-card">
                                <img
                                    src={g3}
                                    alt="Truck loading goods"
                                    className="w-100 rounded"
                                />
                            </div>
                        </div>


                    </div>
                </div>

            </section>

            {/* CTA SECTION */}
            <section className="cta text-center py-5">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="fw-bold">Ready To Transport With Us?</h2>
                    <Link to='/contact' className="btn btn-primary btn-lg mt-3">Contact Us</Link>
                </motion.div>
            </section>

        </div>
    );
};

export default Home;
