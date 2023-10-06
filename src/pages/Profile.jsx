import React from 'react'
import General from '../components/Profile/General'
import { Routes, Route, Link, Outlet } from 'react-router-dom';

const Friends = () => {
    return (
        <div className="container">
            {/* Muse Section, Py 4, Py Md 5 */}
            <section
                className="muse-section py-4 py-md-5"
                data-aos="fade-up"
                data-aos-delay={100}
            >
                <div className="muse-profile rounded-12">
                    <img
                        src="/img/pages/account-profile.jpg"
                        className="rounded-12 w-100"
                        alt="Account Profile"
                    />
                    <a href="#" className="btn btn-sm btn-light position-absolute">
                        Change
                    </a>
                </div>
            </section>
            {/* Muse Section, Pt 4 */}
            <section className="muse-section pt-4">
                <div className="row">
                    <div className="col-lg-3">
                        <aside
                            className="muse-aside mb-4"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="border-bottom border-gray-200 pb-3 d-flex align-items-center">
                                <span className="avatar avatar-lg avatar-circle avatar-border-lg">
                                    <img
                                        className="avatar-img"
                                        src="/img/pages/avatar1.svg"
                                        alt="Avatars"
                                    />
                                </span>
                                <div className="pl-2">
                                    <h5 className="mb-0">
                                        Noell Blue{" "}
                                        <svg
                                            className="ml-1"
                                            data-name="Group 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height="15.25"
                                            viewBox="0 0 24 23.25"
                                        >
                                            <path
                                                d="M23.823,11.991a.466.466,0,0,0,0-.731L21.54,8.7c-.12-.122-.12-.243-.12-.486L21.779,4.8c0-.244-.121-.609-.478-.609L18.06,3.46c-.12,0-.36-.122-.36-.244L16.022.292a.682.682,0,0,0-.839-.244l-3,1.341a.361.361,0,0,1-.48,0L8.7.048a.735.735,0,0,0-.84.244L6.183,3.216c0,.122-.24.244-.36.244L2.58,4.191a.823.823,0,0,0-.48.731l.36,3.412a.74.74,0,0,1-.12.487L.18,11.381a.462.462,0,0,0,0,.732l2.16,2.437c.12.124.12.243.12.486L2.1,18.449c0,.244.12.609.48.609l3.24.735c.12,0,.36.122.36.241l1.68,2.924a.683.683,0,0,0,.84.244l3-1.341a.353.353,0,0,1,.48,0l3,1.341a.786.786,0,0,0,.839-.244L17.7,20.035c.122-.124.24-.243.36-.243l3.24-.734c.24,0,.48-.367.48-.609l-.361-3.413a.726.726,0,0,1,.121-.485Z"
                                                fill="#0D6EFD"
                                            />
                                            <path
                                                data-name="Path"
                                                d="M4.036,10,0,5.8,1.527,4.2,4.036,6.818,10.582,0,12,1.591Z"
                                                transform="translate(5.938 6.625)"
                                                fill="#fff"
                                            />
                                        </svg>
                                    </h5>
                                    <a href="#" className="small text-gray-600">
                                        Change photo
                                    </a>
                                </div>
                                <button
                                    className="navbar-toggler collapsed ml-auto d-block d-lg-none"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarNav2"
                                    aria-controls="navbarNav2"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <svg
                                        className="menu-icon"
                                        data-name="icons/tabler/hamburger"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 16 16"
                                    >
                                        <rect
                                            data-name="Icons/Tabler/Hamburger background"
                                            width={16}
                                            height={16}
                                            fill="none"
                                        />
                                        <path
                                            d="M15.314,8H.686A.661.661,0,0,1,0,7.368a.653.653,0,0,1,.593-.625l.093-.006H15.314A.661.661,0,0,1,16,7.368a.653.653,0,0,1-.593.626Zm0-6.737H.686A.661.661,0,0,1,0,.632.654.654,0,0,1,.593.005L.686,0H15.314A.661.661,0,0,1,16,.632a.653.653,0,0,1-.593.625Z"
                                            transform="translate(0 4)"
                                            fill="#1e1e1e"
                                        />
                                    </svg>
                                    <svg
                                        className="menu-close"
                                        data-name="icons/tabler/close"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 16 16"
                                    >
                                        <rect
                                            data-name="Icons/Tabler/Close background"
                                            width={16}
                                            height={16}
                                            fill="none"
                                        />
                                        <path
                                            d="M.82.1l.058.05L6,5.272,11.122.151A.514.514,0,0,1,11.9.82l-.05.058L6.728,6l5.122,5.122a.514.514,0,0,1-.67.777l-.058-.05L6,6.728.878,11.849A.514.514,0,0,1,.1,11.18l.05-.058L5.272,6,.151.878A.514.514,0,0,1,.75.057Z"
                                            transform="translate(2 2)"
                                            fill="#1e1e1e"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse d-lg-block" id="navbarNav2">
                                <ul className="sidebar-nav pt-3">
                                    <li>
                                        <Link to="general">Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="payment">Payment</Link>
                                    </li>
                                    <li>
                                        <Link to="friends">Friends</Link>
                                    </li>
                                    <li>
                                        <Link to="security">Security</Link>
                                    </li>
                                </ul>
                                <div className="border-top border-gray-200 p-3">
                                    <a href="#" className="btn btn-sm btn-primary">
                                        Log Out
                                    </a>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div className="col-lg-9">
                        <Outlet />
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Friends