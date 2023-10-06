import React from 'react'

const Login = () => {
    return (
        <>
            {/* Muse Login */}
            <div className="position-absolute p-4 p-md-5">
                <a href="/">
                    <img src="/svg/brand/logo-white.svg" alt="Muse" />
                </a>
            </div>
            <div className="row g-0 align-items-center">
                <div className="col-md-6 col-lg-7">
                    <img
                        src="/img/pages/login-cover.jpg"
                        className="cover-fit"
                        alt="Login Cover"
                    />
                </div>
                <div className="col-md-6 col-lg-5">
                    <div className="p-3 p-sm-5">
                        <div className="login-form ml-lg-4">
                            <h1 className="mb-3">Sign in</h1>
                            <form className="pt-2">
                                <div className="mb-4">
                                    <label className="form-label form-label-lg">Username</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        defaultValue="fabrxdesign"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label form-label-lg">Password</label>
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        defaultValue="••••••••••••••••"
                                    />
                                </div>
                                <button type="button" className="btn btn-xl btn-block btn-primary">
                                    Sign in
                                </button>
                                <div className="mt-4 d-flex">
                                    <div className="form-check form-check-sm mb-0">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="gridCheck"
                                        />
                                        <label
                                            className="form-check-label text-gray-600"
                                            htmlFor="gridCheck"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#" className="small text-gray-600 ml-auto mt-1">
                                        Forgot password?
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login