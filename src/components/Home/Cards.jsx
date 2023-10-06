import React from 'react'

const Cards = ({image,destination,description}) => {
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
                    <p className="pb-0 pb-md-4 mb-0 mb-md-3 small lh-lg">
                        {description}
                    </p>
                </figcaption>
            </figure>
        </div>
    )
}

export default Cards