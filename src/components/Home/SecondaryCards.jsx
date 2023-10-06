import React from 'react'

const SecondaryCards = ({image,destination,country}) => {
    return (
        <div
            className="col-sm-6 col-lg-4 mt-0 mt-md-4 "
            data-aos="fade-up"
            data-aos-delay={100}
        >
            <figure className="card muse-card mb-4 transition-3d-hover">
                <a href="javascript:void(0);" className="muse-animation">
                    <img
                        src={image}
                        className="img-fluid w-100"
                        alt="Travel"
                    />
                </a>
                <figcaption className="p-4">
                    <h5>
                        <a href="javascript:void(0);" className="stretched-link">
                           {destination}
                        </a>
                    </h5>
                    <span className="mb-2 d-block text-gray-600">
                        <svg
                            className="mr-1"
                            data-name="icons/tabler/map"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                        >
                            <rect
                                data-name="Icons/Tabler/Map background"
                                width={16}
                                height={16}
                                fill="none"
                            />
                            <path
                                d="M5.45,15.356l-3.4-3.4a7.005,7.005,0,1,1,9.907,0l-3.4,3.4a2.2,2.2,0,0,1-3.112,0ZM2.9,2.9a5.812,5.812,0,0,0,0,8.209l3.4,3.4a1,1,0,0,0,1.415,0l3.4-3.4a5.8,5.8,0,0,0,0-8.209l-.153-.148A5.8,5.8,0,0,0,2.9,2.9ZM4,7.006a3,3,0,1,1,3,3A3.005,3.005,0,0,1,4,7.006Zm1.2,0a1.8,1.8,0,1,0,1.8-1.8A1.8,1.8,0,0,0,5.2,7.006Z"
                                transform="translate(1)"
                                fill="#6C757D"
                            />
                        </svg>{" "}
                        <small>{country}</small>
                    </span>
                </figcaption>
            </figure>
        </div>
    )
}

export default SecondaryCards