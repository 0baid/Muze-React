import React from 'react'
import DestinationCards from '../components/Blogs/DestinationCards'
import Post from '../components/Blogs/Post'

const Blogs = () => {
    return (
        <>
            <div className="container">
                {/* Muse Section, Py 5, Mt 0, Mt Md 0 */}
                <section className="muse-section py-5 mt-0 mt-md-0">
                    <div className="row">
                        <div className="col-lg-8">
                            <figure
                                className="card muse-card overlay-remove rounded-12 mb-4 mb-md-5 position-relative transition-3d-hover"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <a href="#" className="muse-animation">
                                    <img
                                        src="/img/blog/blog1.jpg"
                                        className="rounded-12 w-100"
                                        alt="Blog"
                                    />
                                </a>
                                <figcaption className="position-absolute bottom-0 py-3 py-md-4 px-3 px-md-5 bg-white-90 right-0 left-0">
                                    <h4>
                                        <a href="#" className="stretched-link">
                                            The Gorgeous Statues of Thailand
                                        </a>
                                    </h4>
                                    <div className="d-flex align-items-center small text-gray-600">
                                        <span className="avatar avatar-xs border-0">
                                            <img
                                                src="/img/blog/avatar11.png"
                                                className="rounded-circle"
                                                alt="Avatar"
                                            />
                                        </span>
                                        <span className="ml-2">Farok Rastegar &nbsp;.&nbsp;</span>
                                        <span>1 hour ago</span>
                                    </div>
                                </figcaption>
                            </figure>
                            <DestinationCards image={"/img/blog/blog2.jpg"} heading={"10 beaches you must visit"} auther={"Yasaman Foroutan"} time={"Just now"} autherPic={"/img/blog/avatar2.png"} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…"} />
                            <DestinationCards image={"/img/blog/blog3.jpg"} heading={"The gorgeous statues of Thailand"} auther={"Jeremías Romero"} time={"Today"} autherPic={"/img/blog/avatar3.png"} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…"} />
                            <DestinationCards image={"/img/blog/blog4.jpg"} heading={"How I roamed Italy in a Beetle"} auther={"Daisy Murphy"} time={"Yesterday"} autherPic={"/img/blog/avatar4.png"} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…"} />
                        </div>
                        <div className="col-lg-4">
                            <div
                                className="card muse-card rounded-12 mb-4 mb-md-5 text-center px-3 py-sm-4 py-3 py-sm-5"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <span className="avatar avatar-xl m-auto">
                                    <img
                                        src="/img/blog/avatar1.png"
                                        className="rounded-circle"
                                        alt="Avatar"
                                    />
                                </span>
                                <h4 className="mt-3">Hello, I’m Amy</h4>
                                <p className="lh-lg">
                                    On the other hand, we denounce with righteous indignation and
                                    dislike men who are so beguiled and demoralized by the charms of
                                    pleasure
                                </p>
                                <div className="social-icons text-center">
                                    <a href="javascript:void(0);">
                                        <svg
                                            data-name="icons/tabler/facebook"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 16 16"
                                        >
                                            <rect
                                                data-name="Icons/Tabler/Facebook background"
                                                width={16}
                                                height={16}
                                                fill="none"
                                            />
                                            <path
                                                d="M6.359,16H3.077a.618.618,0,0,1-.61-.532l-.005-.084V10.256H.616a.618.618,0,0,1-.61-.532L0,9.641V6.359a.617.617,0,0,1,.532-.61l.084-.005H2.462V4.718A4.7,4.7,0,0,1,7,0l.181,0H9.641a.618.618,0,0,1,.61.532l.005.084V3.9a.617.617,0,0,1-.532.61l-.084.005H7.179a.2.2,0,0,0-.2.158l-.005.047V5.744H9.641a.615.615,0,0,1,.611.687l-.013.077L9.418,9.79a.614.614,0,0,1-.5.459l-.092.007H6.974v5.128a.618.618,0,0,1-.532.61ZM1.231,6.974V9.025H3.077a.617.617,0,0,1,.609.532l.006.084v5.128H5.744V9.641a.616.616,0,0,1,.532-.609l.084-.006h1.98l.513-2.051H6.359a.617.617,0,0,1-.61-.532l-.005-.083V4.718A1.443,1.443,0,0,1,7.061,3.287l.118,0H9.025V1.231H7.179A3.481,3.481,0,0,0,3.7,4.549l0,.169V6.359a.617.617,0,0,1-.532.609l-.084.005Z"
                                                transform="translate(3)"
                                                fill="#1e1e1e"
                                            />
                                        </svg>
                                    </a>
                                    <a href="javascript:void(0);">
                                        <svg
                                            data-name="icons/tabler/dribbble"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 16 16"
                                        >
                                            <rect
                                                data-name="Icons/Tabler/Dribbble background"
                                                width={16}
                                                height={16}
                                                fill="none"
                                            />
                                            <path
                                                d="M0,8a8,8,0,1,1,12.071,6.885.613.613,0,0,1-.148.086A8,8,0,0,1,0,8Zm8,6.769a6.729,6.729,0,0,0,3.04-.722A18.964,18.964,0,0,0,10.085,9.7a11.826,11.826,0,0,0-4.847,3.087l-.385.379-.522.524A6.728,6.728,0,0,0,8,14.769Zm4.193-1.458a6.774,6.774,0,0,0,2.486-4.2,18.649,18.649,0,0,0-3.393.293A19.879,19.879,0,0,1,12.193,13.311ZM1.231,8a6.751,6.751,0,0,0,2.126,4.921l.814-.815A13.357,13.357,0,0,1,9.638,8.547a20.668,20.668,0,0,0-1.049-2.1,20.8,20.8,0,0,1-7.345,1.14Q1.231,7.792,1.231,8Zm9.611.234a19.647,19.647,0,0,1,3.926-.359A6.737,6.737,0,0,0,13.224,3.7a18.084,18.084,0,0,1-3.5,2.258A21.639,21.639,0,0,1,10.842,8.234ZM1.434,6.354A19.65,19.65,0,0,0,7.94,5.372,37.065,37.065,0,0,0,5.305,1.791,6.8,6.8,0,0,0,1.434,6.354ZM9.093,4.893a16.545,16.545,0,0,0,3.261-2.073A6.767,6.767,0,0,0,6.562,1.385,36.568,36.568,0,0,1,9.093,4.893Z"
                                                fill="#1e1e1e"
                                            />
                                        </svg>
                                    </a>
                                    <a href="javascript:void(0);">
                                        <svg
                                            data-name="icons/tabler/instagram"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 16 16"
                                        >
                                            <rect
                                                data-name="Icons/Tabler/Instagram background"
                                                width={16}
                                                height={16}
                                                fill="none"
                                            />
                                            <path
                                                d="M4.343,16A4.348,4.348,0,0,1,0,11.657V4.343A4.347,4.347,0,0,1,4.343,0h7.314A4.348,4.348,0,0,1,16,4.343v7.314A4.348,4.348,0,0,1,11.657,16ZM1.372,4.343v7.314a2.975,2.975,0,0,0,2.971,2.972h7.314a2.975,2.975,0,0,0,2.972-2.972V4.343a2.975,2.975,0,0,0-2.972-2.971H4.343A2.974,2.974,0,0,0,1.372,4.343ZM4.571,8A3.429,3.429,0,1,1,8,11.428,3.434,3.434,0,0,1,4.571,8ZM5.943,8A2.057,2.057,0,1,0,8,5.943,2.06,2.06,0,0,0,5.943,8Zm5.492-4.02-.006-.094a.686.686,0,0,1,1.365-.094l.006.093a.686.686,0,0,1-1.365.094Z"
                                                fill="#1e1e1e"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="bg-blue-50 rounded-12 py-4 py-md-5 px-4 mb-4 mb-md-5"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <div className="text-center mb-sm-4 mb-3">
                                    <h4 className="mb-0">Join our mailing list</h4>
                                    <small className="text-gray-600">
                                        Best deals directly to your inbox
                                    </small>
                                </div>
                                <div className="mb-3 px-md-2">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="text-center px-md-2">
                                    <button
                                        type="button"
                                        className="btn btn-lg btn-block btn-primary mb-3"
                                    >
                                        Subscribe
                                    </button>
                                    <small className="tiny text-gray-600 d-block">
                                        By joining you agree to our{" "}
                                        <strong>
                                            <a href="#0" className="text-gray-600">
                                                Privacy Policy
                                            </a>
                                        </strong>
                                    </small>
                                </div>
                            </div>
                            <div
                                className="bg-white rounded-12 shadow-dark-80 p-md-4 p-3"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <h4 className="mb-2">Tags</h4>
                                <div className="tag-list">
                                    <a href="#" className="btn btn-sm btn-outline-dark">
                                        Affordable
                                    </a>
                                    <a href="#" className="btn btn-sm btn-outline-dark">
                                        Europe
                                    </a>
                                    <a href="#" className="btn btn-sm btn-outline-dark">
                                        Most visited
                                    </a>
                                    <a href="#" className="btn btn-sm btn-outline-dark">
                                        Luxury
                                    </a>
                                    <a href="#" className="btn btn-sm btn-outline-dark">
                                        Activity
                                    </a>
                                    <a href="#" className="btn btn-sm btn-outline-dark">
                                        Swimming
                                    </a>
                                    <a href="#" className="btn btn-sm btn-outline-dark">
                                        Best food
                                    </a>
                                    <a href="#" className="btn btn-sm btn-outline-dark">
                                        Trending
                                    </a>
                                    <a href="#" className="btn btn-sm btn-outline-dark">
                                        Asia
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Muse Section, Py 4, Py Md 5 */}
                <section
                    className="muse-section py-4 py-md-5"
                    data-aos="fade-up"
                    data-aos-delay={100}
                >
                    <div className="rounded-12 position-relative">
                        <img
                            src="/img/blog/blog5.jpg"
                            className="rounded-12 w-100"
                            alt="Blog"
                        />
                        <div className="position-absolute blog-overlay">
                            <div className="bg-white rounded-6 p-3 p-lg-5">
                                <span className="badge badge-sm badge-primary">Feature</span>
                                <h4 className="pt-2">
                                    <a href="#" className="text-black-600">
                                        Beached to take you somewhere else
                                    </a>
                                </h4>
                                <div className="d-flex align-items-center mb-md-2 small text-gray-600">
                                    <span className="avatar avatar-xs border-0">
                                        <img
                                            src="/img/blog/avatar5.png"
                                            className="rounded-circle"
                                            alt="Avatar"
                                        />
                                    </span>
                                    <span className="ml-2">Farok Rastegar &nbsp;.&nbsp;</span>
                                    <span>1 hour ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Muse Section, Py 5, Mt Md 4 */}
                <section className="muse-section py-5 mt-md-4">
                    <h3 className="mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay={100}>
                        Latest posts
                    </h3>
                    <div className="row">
                        <div className="col-xl-10">
                            <Post image={"/img/blog/blog6.jpg"} heading={"Pathway to the Mediterranean"} auther={"Alexander Ljung"} autherPic={"/img/blog/avatar6.png"} time={"Today"} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…"}/>
                            <Post image={"/img/blog/blog7.jpg"} heading={"My awesome safari in Lahbab Desert, United Arab Emirates"} auther={"Graham Griffiths"} autherPic={"/img/blog/avatar7.png"} time={"Today"} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…"}/>
                            <Post image={"/img/blog/blog8.jpg"} heading={"10 amazing things to do in Cuba"} auther={"Sofietje Boksem"} autherPic={"/img/blog/avatar8.png"} time={"Today"} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…"}/>
                            <Post image={"/img/blog/blog9.jpg"} heading={"The best street food in the world. Ranked!"} auther={"Sung Jin-Shil"} autherPic={"/img/blog/avatar9.png"} time={"Today"} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…"}/>
                        </div>
                    </div>
                    <div
                        className="text-center mt-md-3"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <a href="#" className="btn btn-xl btn-primary">
                            Load more
                        </a>
                    </div>
                </section>
                {/* Muse Section, Py 4, Py Md 5, Bg Blue 50, Rounded 12, My Md 5 */}
                <section
                    className="muse-section py-4 py-md-5 bg-blue-50 rounded-12 my-md-5"
                    data-aos="fade-up"
                    data-aos-delay={100}
                >
                    <div className="col-md-9 col-lg-6 col-xl-5 m-auto text-center py-3 py-sm-4 px-3 px-sm-4 px-md-0">
                        <h2 className="h1 mb-0">Join our newsletter</h2>
                        <p className="big text-black-600 mb-2 mb-md-0">
                            Best deals for your next trip directly to your inbox
                        </p>
                        <form className="mt-2 mt-md-4 mx-lg-4 px-md-4 pt-2">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Email"
                                />
                                <button
                                    className="btn btn-lg btn-primary btn-block mt-3"
                                    type="button"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                        <p className="small text-gray-600 mt-2 pt-1 lh-sm mb-1 mb-md-3">
                            By joining our newsletter you agree to our{" "}
                            <a href="#0" className="text-gray-600 font-weight-bold">
                                Privacy
                            </a>{" "}
                            and{" "}
                            <a href="#0" className="text-gray-600 font-weight-bold">
                                Terms
                            </a>
                        </p>
                    </div>
                </section>
                <br />
                <br />
            </div>
        </>

    )
}

export default Blogs