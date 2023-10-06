import React from 'react'

const Post = ({image,heading,description,auther,time,autherPic}) => {
    return (
        <div
            className="row align-items-center mb-4 mb-md-5"
            data-aos="fade-up"
            data-aos-delay={100}
        >
            <div className="col-md-6">
                <div className="rounded-12 muse-animation">
                    <img
                        src={image}
                        className="rounded-12 w-100"
                        alt="Blog"
                    />
                </div>
            </div>
            <div className="col-md-6">
                <div className="my-md-4 my-3">
                    <h3>
                        <a href="#" className="text-black-600">
                            {heading}
                        </a>
                    </h3>
                    <div className="d-flex align-items-center mb-2 small text-gray-600">
                        <span className="avatar avatar-xs border-0">
                            <img
                                src={autherPic}
                                className="rounded-circle"
                                alt="Avatar"
                            />
                        </span>
                        <span className="ml-2">{auther} &nbsp;.&nbsp;</span>
                        <span>{time}</span>
                    </div>
                    <p className="small lh-lg text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Post