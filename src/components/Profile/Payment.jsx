import React from 'react'

const Payment = () => {
    return (
        <>
            <div
                className="bg-white rounded-12 shadow-dark-80 mb-3"
                data-aos="fade-up"
                data-aos-delay={100}
            >
                <div className="border-bottom border-gray-200 px-4 px-md-5 py-4 d-flex align-items-center">
                    <h5 className="mb-0">Current Plan</h5>
                    <div className=" ml-auto">
                        <a
                            href="#"
                            className="btn btn-sm btn-primary text-nowrap text-uppercase"
                        >
                            Change Plan
                        </a>
                    </div>
                </div>
                <div className="px-4 px-md-5 py-4">
                    <div className="d-flex align-items-center">
                        <div className="pr-2">
                            <h6 className="font-weight-normal">Basic plan</h6>
                            <small className="d-block text-gray-600 lh-lg">
                                10,000 contacts and 30,000 marketing emails/month{" "}
                                <br className="d-none d-lg-block" />
                                $0.003 per additional contact or email
                            </small>
                        </div>
                        <div className="ml-auto">
                            <span className="h5">$24/mo</span>
                        </div>
                    </div>
                </div>
                <hr className="bg-gray-200 my-0" />
                <div className="px-4 px-md-5 py-4">
                    <div className="d-flex align-items-center">
                        <div className="pr-2">
                            <h6 className="font-weight-normal">Usage</h6>
                            <small className="d-block text-gray-600">
                                5,348 unique contacts stored this month
                            </small>
                            <a href="#" className="small link-primary">
                                Show full stats
                            </a>
                        </div>
                        <div className="ml-auto">
                            <span className="h5">56%</span>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br className="d-none d-md-block" />
            <div
                className="bg-white rounded-12 shadow-dark-80 mb-3"
                data-aos="fade-up"
                data-aos-delay={100}
            >
                <div className="border-bottom border-gray-200 px-4 px-md-5 py-4 d-flex align-items-center">
                    <h5 className="mb-0">Payment Methods</h5>
                    <div className=" ml-auto">
                        <a
                            href="#"
                            className="btn btn-sm btn-primary text-nowrap text-uppercase"
                        >
                            Add Payment
                        </a>
                    </div>
                </div>
                <div className="px-4 px-md-5 py-4">
                    <div className="d-flex align-items-center">
                        <div className="d-md-flex align-items-center">
                            <span className="mr-3 mb-2">
                                <img src="../../assets/img/pages/visa.svg" alt="Visa" />
                            </span>
                            <div>
                                <h6 className="font-weight-normal">
                                    Ending in 6745{" "}
                                    <span className="badge badge-sm badge-primary font-weight-semibold ml-2">
                                        Primary
                                    </span>
                                </h6>
                                <small className="d-block text-gray-600">Expires 05/2023</small>
                            </div>
                        </div>
                        <div className="ml-auto dropdown">
                            <a
                                href="#"
                                role="button"
                                id="dropdownMenuLink"
                                data-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <svg
                                    data-name="icons/tabler/dots"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 16 16"
                                >
                                    <rect
                                        data-name="Icons/Tabler/Dots background"
                                        width={16}
                                        height={16}
                                        fill="none"
                                    />
                                    <path
                                        d="M0,12.4A1.6,1.6,0,1,1,1.6,14,1.6,1.6,0,0,1,0,12.4Zm1.372,0a.229.229,0,1,0,.229-.229A.229.229,0,0,0,1.372,12.4ZM0,7A1.6,1.6,0,1,1,1.6,8.6,1.6,1.6,0,0,1,0,7ZM1.372,7A.229.229,0,1,0,1.6,6.772.229.229,0,0,0,1.372,7ZM0,1.6A1.6,1.6,0,1,1,1.6,3.2,1.6,1.6,0,0,1,0,1.6Zm1.372,0A.229.229,0,1,0,1.6,1.372.229.229,0,0,0,1.372,1.6Z"
                                        transform="translate(6 1)"
                                        fill="#ADB5BD"
                                    />
                                </svg>
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="bg-gray-200 my-4" />
                    <div className="d-flex align-items-center">
                        <div className="d-md-flex align-items-center">
                            <span className="mr-3 mb-2">
                                <img src="../../assets/img/pages/mastercard.svg" alt="Mastercard" />
                            </span>
                            <div>
                                <h6 className="font-weight-normal">Ending in 1254</h6>
                                <small className="d-block text-gray-600">Expires 06/2022</small>
                            </div>
                        </div>
                        <div className="ml-auto dropup">
                            <a
                                href="#"
                                role="button"
                                id="dropdownMenuLink1"
                                data-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <svg
                                    data-name="icons/tabler/dots"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 16 16"
                                >
                                    <rect
                                        data-name="Icons/Tabler/Dots background"
                                        width={16}
                                        height={16}
                                        fill="none"
                                    />
                                    <path
                                        d="M0,12.4A1.6,1.6,0,1,1,1.6,14,1.6,1.6,0,0,1,0,12.4Zm1.372,0a.229.229,0,1,0,.229-.229A.229.229,0,0,0,1.372,12.4ZM0,7A1.6,1.6,0,1,1,1.6,8.6,1.6,1.6,0,0,1,0,7ZM1.372,7A.229.229,0,1,0,1.6,6.772.229.229,0,0,0,1.372,7ZM0,1.6A1.6,1.6,0,1,1,1.6,3.2,1.6,1.6,0,0,1,0,1.6Zm1.372,0A.229.229,0,1,0,1.6,1.372.229.229,0,0,0,1.372,1.6Z"
                                        transform="translate(6 1)"
                                        fill="#ADB5BD"
                                    />
                                </svg>
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuLink1"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
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
                    <h5 className="mb-0">Invoices</h5>
                </div>
                <div className="px-4 px-md-5 py-4">
                    <div className="d-md-flex align-items-center">
                        <div>
                            <h6 className="font-weight-normal">
                                Invoice #11432{" "}
                                <span className="badge badge-sm badge-primary font-weight-semibold ml-2">
                                    Pending
                                </span>
                            </h6>
                            <small className="d-block text-gray-600">Billed Jun, 06, 2021</small>
                        </div>
                        <div className="ml-auto mt-3 mb-md-3">
                            <a href="#" className="btn btn-sm btn-primary text-uppercase">
                                Pay Now
                            </a>
                        </div>
                    </div>
                    <hr className="bg-gray-200 my-4" />
                    <div className="d-md-flex align-items-center">
                        <div>
                            <h6 className="font-weight-normal">Invoice #11431</h6>
                            <small className="d-block text-gray-600">Billed Jun, 06, 2021</small>
                        </div>
                        <div className="ml-auto mt-3 mb-md-3">
                            <a
                                href="#"
                                className="btn btn-sm bg-gray-100 px-4 text-success text-uppercase"
                            >
                                Paid
                            </a>
                        </div>
                    </div>
                    <hr className="bg-gray-200 my-4" />
                    <div className="d-md-flex align-items-center">
                        <div>
                            <h6 className="font-weight-normal">Invoice #11430</h6>
                            <small className="d-block text-gray-600">Billed Jun, 06, 2021</small>
                        </div>
                        <div className="ml-auto mt-3 mb-md-3">
                            <a
                                href="#"
                                className="btn btn-sm bg-gray-100 px-4 text-success text-uppercase"
                            >
                                Paid
                            </a>
                        </div>
                    </div>
                    <hr className="bg-gray-200 my-4" />
                    <div className="d-md-flex align-items-center">
                        <div>
                            <h6 className="font-weight-normal">Invoice #11429</h6>
                            <small className="d-block text-gray-600">Billed Jun, 06, 2021</small>
                        </div>
                        <div className="ml-auto mt-3 mb-md-3">
                            <a
                                href="#"
                                className="btn btn-sm bg-gray-100 px-4 text-success text-uppercase"
                            >
                                Paid
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Payment