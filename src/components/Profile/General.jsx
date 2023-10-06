import React from 'react'

const General = () => {
    return (
        <>
            <div
                className="bg-white rounded-12 shadow-dark-80 mb-3"
                data-aos="fade-up"
                data-aos-delay={100}
            >
                <div className="border-bottom border-gray-200 px-4 px-md-5 py-4">
                    <h5 className="mb-0">Basic info</h5>
                </div>
                <div className="px-4 px-md-5 py-4">
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-4">
                                    <label className="form-label form-label-lg">Full name</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-xl"
                                        placeholder="Full name"
                                        defaultValue="Noell Blue"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-4">
                                    <label className="form-label form-label-lg">Email</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-xl"
                                        placeholder="Email"
                                        defaultValue="muse@fabrx.co"
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mb-4">
                                    <label className="form-label form-label-lg">Bio</label>
                                    <textarea
                                        rows={3}
                                        className="form-control form-control-xl"
                                        placeholder="Message"
                                        defaultValue={
                                            "We create intuitive user interface and design systems to bridge the gap between your product and customers."
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-md-12 py-2">
                                <a href="#" className="btn btn-lg btn-primary">
                                    Save Profile
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <br />
            <br className="d-none d-md-block" />
            <div
                className="bg-white rounded-12 shadow-dark-80 mb-3"
                data-aos="fade-up"
                data-aos-delay={100}
            >
                <div className="border-bottom border-gray-200 px-4 px-md-5 py-4">
                    <h5 className="mb-0">Privacy</h5>
                </div>
                <div className="px-4 px-md-5 py-4">
                    <div className="d-flex align-items-center">
                        <div>
                            <h6 className="font-weight-normal">Show profile publicly</h6>
                            <small className="d-block text-gray-600">
                                Currently set to public
                            </small>
                        </div>
                        <div className="form-check form-switch ml-auto">
                            <input
                                className="form-check-input mr-0"
                                type="checkbox"
                                defaultChecked=""
                                id="flexSwitchCheckDefault"
                            />
                        </div>
                    </div>
                    <hr className="bg-gray-200 my-4" />
                    <div className="d-flex align-items-center">
                        <div>
                            <h6 className="font-weight-normal">Show profile publicly</h6>
                            <small className="d-block text-gray-600">
                                Currently set to public
                            </small>
                        </div>
                        <div className="form-check form-switch ml-auto">
                            <input
                                className="form-check-input mr-0"
                                type="checkbox"
                                id="flexSwitchCheckDefault2"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br className="d-none d-md-block" />
            <div
                className="bg-white rounded-12 shadow-dark-80 mb-4"
                data-aos="fade-up"
                data-aos-delay={100}
            >
                <div className="border-bottom border-gray-200 px-4 px-md-5 py-4">
                    <h5 className="mb-0">Connected Accounts</h5>
                </div>
                <div className="px-4 px-md-5 py-4">
                    <div className="d-flex align-items-center">
                        <div>
                            <h6 className="font-weight-normal">Facebook</h6>
                            <small className="d-block text-gray-600">noell@gmail.com</small>
                        </div>
                        <div className="ml-auto">
                            <a href="#" className="text-primary caption font-weight-semibold">
                                Disconnect
                            </a>
                        </div>
                    </div>
                    <hr className="bg-gray-200 my-4" />
                    <div className="d-flex align-items-center">
                        <div>
                            <h6 className="font-weight-normal">Twitter</h6>
                            <small className="d-block text-gray-600">Not connected</small>
                        </div>
                        <div className="ml-auto">
                            <a href="#" className="text-black-600 caption font-weight-semibold">
                                Connect
                            </a>
                        </div>
                    </div>
                    <hr className="bg-gray-200 my-4" />
                    <div className="d-flex align-items-center">
                        <div>
                            <h6 className="font-weight-normal">Dribbble</h6>
                            <small className="d-block text-gray-600">Not connected</small>
                        </div>
                        <div className="ml-auto">
                            <a href="#" className="text-black-600 caption font-weight-semibold">
                                Connect
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-3 mb-md-0" data-aos="fade-up" data-aos-delay={100}>
                <a href="#" className="btn link-danger btn-link">
                    Delete Account
                </a>
            </div>
        </>

    )
}

export default General