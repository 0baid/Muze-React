import React from 'react'

const About = () => {
    return (
        <div className="container">
            {/* Muse Section */}
            <section className="muse-section">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="my-3">
                            
                            <h1 className="display-4 mt-3">
                                Get to know us, we’re honest, dedicated and relentless
                            </h1>
                            <div className="my-4 pb-2" data-aos="fade-up" data-aos-delay={100}>
                                <img
                                    src="/img/pages/about-us.jpg"
                                    className="rounded-12 w-100"
                                    alt="img"
                                />
                            </div>
                            <p
                                className="big mb-4 mb-md-5 pb-lg-5 lh-lg text-black-600"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus
                                PageMake.
                            </p>
                            <p
                                className="big mb-0 lh-lg text-black-600"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration in some form, by injected
                                humour, or randomised words which don't look even slightly
                                believable. If you are going to use a passage of Lorem Ipsum, you
                                need to be sure there isn't anything embarrassing hidden in the
                                middle of text. All the Lorem Ipsum generators on the Internet tend
                                to repeat predefined chunks as necessary, making this the first true
                                generator on the Internet. It uses a dictionary of over 200 Latin
                                words.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="my-0 bg-gray-300" />
            {/* Muse Section */}
            <section className="muse-section">
                <div className="row">
                    <div className="col-6 col-md-3 text-center my-2">
                        <h3 className="display-4 mb-0">
                            <span
                                className="counter purecounter"
                                data-purecounter-delay={50}
                                data-purecounter-start={0}
                                data-purecounter-end={120}
                            >
                                120
                            </span>
                            +
                        </h3>
                        <p className="mb-0">Countries</p>
                    </div>
                    <div className="col-6 col-md-3 text-center my-2">
                        <h3 className="display-4 mb-0">
                            <span
                                className="counter purecounter"
                                data-purecounter-delay={50}
                                data-purecounter-start={0}
                                data-purecounter-end={3500}
                            >
                                3500
                            </span>
                            +
                        </h3>
                        <p className="mb-0">Clients</p>
                    </div>
                    <div className="col-6 col-md-3 text-center my-2">
                        <h3 className="display-4 mb-0">
                            <span
                                className="counter purecounter"
                                data-purecounter-delay={50}
                                data-purecounter-start={0}
                                data-purecounter-end={120}
                            >
                                120
                            </span>
                        </h3>
                        <p className="mb-0">Gadgets</p>
                    </div>
                    <div className="col-6 col-md-3 text-center my-2">
                        <h3 className="display-4 mb-0">
                            <span
                                className="counter purecounter"
                                data-purecounter-delay={50}
                                data-purecounter-start={0}
                                data-purecounter-end={455}
                            >
                                455
                            </span>
                        </h3>
                        <p className="mb-0">Offices</p>
                    </div>
                </div>
            </section>
            <hr className="my-md-0 bg-gray-300" />
            {/* Muse Section */}
            <section className="muse-section">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className="h1 pr-lg-5 lh-sm">
                            Get to know us, we’re honest and lovable!
                        </h2>
                    </div>
                    <div className="col-md-6">
                        <p className="big lh-lg text-black-600">
                            Wedge max gorog gamorrean ventress rugor luke han watto. Castell nagai
                            jin'ha c-3p0 nadon hypori karrde skywalker. Ferroans farlander isard
                            ka.
                        </p>
                    </div>
                </div>
                <div className="row pt-3 pt-md-5">
                    <div
                        className="col-sm-6 col-md-4 col-lg-3"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <figure className="text-center card team-card mb-0 mb-md-3 mb-lg-5">
                            <div className="muse-animation rounded-12">
                                <img
                                    src="/img/pages/team1.jpg"
                                    className="w-100 rounded-12"
                                    alt="img"
                                />
                                <div className="team-overlay">
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/facebook"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/dribbble"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                </div>
                            </div>
                            <figcaption className="p-3">
                                <h5 className="mb-md-2 mb-1">
                                    <a href="#">Alan Bailey</a>
                                </h5>
                                <p>UI UX Designer</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div
                        className="col-sm-6 col-md-4 col-lg-3"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <figure className="text-center card team-card mb-0 mb-md-3 mb-lg-5">
                            <div className="muse-animation rounded-12">
                                <img
                                    src="/img/pages/team2.jpg"
                                    className="w-100 rounded-12"
                                    alt="img"
                                />
                                <div className="team-overlay">
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/facebook"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/dribbble"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                </div>
                            </div>
                            <figcaption className="p-3">
                                <h5 className="mb-md-2 mb-1">
                                    <a href="#">Beth Murphy</a>
                                </h5>
                                <p>UI UX Designer</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div
                        className="col-sm-6 col-md-4 col-lg-3"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <figure className="text-center card team-card mb-0 mb-md-3 mb-lg-5">
                            <div className="muse-animation rounded-12">
                                <img
                                    src="/img/pages/team3.jpg"
                                    className="w-100 rounded-12"
                                    alt="img"
                                />
                                <div className="team-overlay">
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/facebook"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/dribbble"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                </div>
                            </div>
                            <figcaption className="p-3">
                                <h5 className="mb-md-2 mb-1">
                                    <a href="#">Tyler Webb</a>
                                </h5>
                                <p>UI UX Designer</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div
                        className="col-sm-6 col-md-4 col-lg-3"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <figure className="text-center card team-card mb-0 mb-md-3 mb-lg-5">
                            <div className="muse-animation rounded-12">
                                <img
                                    src="/img/pages/team4.jpg"
                                    className="w-100 rounded-12"
                                    alt="img"
                                />
                                <div className="team-overlay">
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/facebook"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/dribbble"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                </div>
                            </div>
                            <figcaption className="p-3">
                                <h5 className="mb-md-2 mb-1">
                                    <a href="#">Christian Owens</a>
                                </h5>
                                <p>UI UX Designer</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div
                        className="col-sm-6 col-md-4 col-lg-3"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <figure className="text-center card team-card mb-0 mb-md-3 mb-lg-5">
                            <div className="muse-animation rounded-12">
                                <img
                                    src="/img/pages/team5.jpg"
                                    className="w-100 rounded-12"
                                    alt="img"
                                />
                                <div className="team-overlay">
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/facebook"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/dribbble"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                </div>
                            </div>
                            <figcaption className="p-3">
                                <h5 className="mb-md-2 mb-1">
                                    <a href="#">Robert Perry</a>
                                </h5>
                                <p>UI UX Designer</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div
                        className="col-sm-6 col-md-4 col-lg-3"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <figure className="text-center card team-card mb-0 mb-md-3 mb-lg-5">
                            <div className="muse-animation rounded-12">
                                <img
                                    src="/img/pages/team6.jpg"
                                    className="w-100 rounded-12"
                                    alt="img"
                                />
                                <div className="team-overlay">
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/facebook"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/dribbble"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                </div>
                            </div>
                            <figcaption className="p-3">
                                <h5 className="mb-md-2 mb-1">
                                    <a href="#">Steven Taylor</a>
                                </h5>
                                <p>UI UX Designer</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div
                        className="col-sm-6 col-md-4 col-lg-3"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <figure className="text-center card team-card mb-0 mb-md-3 mb-lg-5">
                            <div className="muse-animation rounded-12">
                                <img
                                    src="/img/pages/team7.jpg"
                                    className="w-100 rounded-12"
                                    alt="img"
                                />
                                <div className="team-overlay">
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/facebook"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/dribbble"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                </div>
                            </div>
                            <figcaption className="p-3">
                                <h5 className="mb-md-2 mb-1">
                                    <a href="#">Theresa Bennett</a>
                                </h5>
                                <p>UI UX Designer</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div
                        className="col-sm-6 col-md-4 col-lg-3"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <figure className="text-center card team-card mb-0 mb-md-3 mb-lg-5">
                            <div className="muse-animation rounded-12">
                                <img
                                    src="/img/pages/team8.jpg"
                                    className="w-100 rounded-12"
                                    alt="img"
                                />
                                <div className="team-overlay">
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/facebook"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/dribbble"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                </div>
                            </div>
                            <figcaption className="p-3">
                                <h5 className="mb-md-2 mb-1">
                                    <a href="#">Craig Freeman</a>
                                </h5>
                                <p>UI UX Designer</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div
                        className="col-sm-6 col-md-4 col-lg-3"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <figure className="text-center card team-card mb-0 mb-md-3 mb-lg-5">
                            <div className="muse-animation rounded-12">
                                <img
                                    src="/img/pages/team9.jpg"
                                    className="w-100 rounded-12"
                                    alt="img"
                                />
                                <div className="team-overlay">
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/facebook"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/dribbble"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                </div>
                            </div>
                            <figcaption className="p-3">
                                <h5 className="mb-md-2 mb-1">
                                    <a href="#">Frank Gilbert</a>
                                </h5>
                                <p>UI UX Designer</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div
                        className="col-sm-6 col-md-4 col-lg-3"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <figure className="text-center card team-card mb-0 mb-md-3 mb-lg-5">
                            <div className="muse-animation rounded-12">
                                <img
                                    src="/img/pages/team10.jpg"
                                    className="w-100 rounded-12"
                                    alt="img"
                                />
                                <div className="team-overlay">
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/facebook"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/dribbble"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                </div>
                            </div>
                            <figcaption className="p-3">
                                <h5 className="mb-md-2 mb-1">
                                    <a href="#">Samuel Bailey</a>
                                </h5>
                                <p>UI UX Designer</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div
                        className="col-sm-6 col-md-4 col-lg-3"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <figure className="text-center card team-card mb-0 mb-md-3 mb-lg-5">
                            <div className="muse-animation rounded-12">
                                <img
                                    src="/img/pages/team11.jpg"
                                    className="w-100 rounded-12"
                                    alt="img"
                                />
                                <div className="team-overlay">
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/facebook"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/dribbble"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                </div>
                            </div>
                            <figcaption className="p-3">
                                <h5 className="mb-md-2 mb-1">
                                    <a href="#">Mildred Simpson</a>
                                </h5>
                                <p>UI UX Designer</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div
                        className="col-sm-6 col-md-4 col-lg-3"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <figure className="text-center card team-card mb-0 mb-lg-5">
                            <div className="muse-animation rounded-12">
                                <img
                                    src="/img/pages/team12.jpg"
                                    className="w-100 rounded-12"
                                    alt="img"
                                />
                                <div className="team-overlay">
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/facebook"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                    <a href="#" className="btn btn-light btn-icon m-2">
                                        <svg
                                            data-name="icons/tabler/dribbble"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
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
                                </div>
                            </div>
                            <figcaption className="p-3">
                                <h5 className="mb-md-2 mb-1">
                                    <a href="#">Marie Schmidt</a>
                                </h5>
                                <p className="mb-0 mb-md-3">UI UX Designer</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>
            {/* Muse Section */}
            <section className="muse-section">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <h2 className="h1">Trusted by great companies</h2>
                        <p className="big pr-0 pr-lg-5 lh-lg text-black-600">
                            Wedge max gorog gamorrean ventress rugor luke han watto. Castell nagai
                            jin'ha c-3p0 nadon hypori karrde skywalker.
                        </p>
                    </div>
                    <div className="col-lg-7 text-lg-center muse-brands">
                        <div className="row">
                            <div
                                className="col-6 col-md-4 mb-4 pt-3"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <a href="#0">
                                    <img
                                        src="/img/templates/client-logo1.svg"
                                        alt="Client Logo"
                                    />
                                </a>
                            </div>
                            <div
                                className="col-6 col-md-4 mb-4 pt-3"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <a href="#0">
                                    <img
                                        src="/img/templates/client-logo2.svg"
                                        alt="Client Logo"
                                    />
                                </a>
                            </div>
                            <div
                                className="col-6 col-md-4 mb-4 pt-3"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <a href="#0">
                                    <img
                                        src="/img/templates/client-logo3.svg"
                                        alt="Client Logo"
                                    />
                                </a>
                            </div>
                            <div
                                className="col-6 col-md-4 mb-4 pt-3"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <a href="#0">
                                    <img
                                        src="/img/templates/client-logo4.svg"
                                        alt="Client Logo"
                                    />
                                </a>
                            </div>
                            <div
                                className="col-6 col-md-4 mb-4 pt-3"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <a href="#0">
                                    <img
                                        src="/img/templates/client-logo5.svg"
                                        alt="Client Logo"
                                    />
                                </a>
                            </div>
                            <div
                                className="col-6 col-md-4 mb-4 pt-3"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <a href="#0">
                                    <img
                                        src="/img/templates/client-logo7.svg"
                                        alt="Client Logo"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Muse Section */}
            <section className="muse-section">
                <div
                    className="bg-blue-400 rounded-12 py-5 px-4 text-center position-relative"
                    data-aos="fade-up"
                    data-aos-delay={100}
                >
                    <h3 className="h1 text-white mt-3">Get started for free</h3>
                    <p className="big text-white lh-lg">
                        Turn your 3d ideas into incredible animations
                    </p>
                    <a href="#" className="btn btn-lg btn-blue-50 mt-1 mb-4">
                        Sign up
                    </a>
                    <div className="position-bottom">
                        <img src="/img/templates/shape5.png" alt="img" />
                    </div>
                </div>
            </section>
        </div>

    )
}

export default About