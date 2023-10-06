import React from 'react'

const Security = () => {
  return (
    <>
  <div
    className="bg-white rounded-12 shadow-dark-80 mb-3"
    data-aos="fade-up"
    data-aos-delay={100}
  >
    <div className="border-bottom border-gray-200 px-4 px-md-5 py-4">
      <h5 className="mb-0">Password</h5>
    </div>
    <div className="px-4 px-md-5 py-4">
      <form>
        <div className="row">
          <div className="col-md-12">
            <div className="mb-4">
              <label className="form-label form-label-lg">Old password</label>
              <input
                type="text"
                className="form-control form-control-xl"
                placeholder="Old password"
                defaultValue="Noell Blue"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-4">
              <label className="form-label form-label-lg">New password</label>
              <input
                type="text"
                className="form-control form-control-xl"
                placeholder="New password"
                defaultValue="••••••••••••••••"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-4">
              <label className="form-label form-label-lg">
                Confirm password
              </label>
              <input
                type="text"
                className="form-control form-control-xl"
                placeholder="Confirm password"
                defaultValue="••••••••••••••••"
              />
            </div>
          </div>
          <div className="col-md-12 py-2">
            <a href="#" className="btn btn-lg btn-primary">
              Change Password
            </a>
          </div>
        </div>
      </form>
    </div>
  </div>
  <br />
  <br className="d-none d-md-block" />
  <div
    className="bg-white rounded-12 shadow-dark-80 mb-4"
    data-aos="fade-up"
    data-aos-delay={100}
  >
    <div className="border-bottom border-gray-200 px-4 px-md-5 py-4 d-flex align-items-center">
      <h5 className="mb-0">Devices</h5>
      <div className=" ml-auto">
        <a href="#" className="btn btn-link link-dark text-nowrap tiny">
          Log out all devices{" "}
          <svg
            className="ml-1"
            data-name="icons/tabler/chevron right"
            xmlns="http://www.w3.org/2000/svg"
            width={8}
            height={8}
            viewBox="0 0 16 16"
          >
            <rect
              data-name="Icons/Tabler/Chevron Right background"
              width={16}
              height={16}
              fill="none"
            />
            <path
              d="M.26.26A.889.889,0,0,1,1.418.174l.1.086L8.629,7.371a.889.889,0,0,1,.086,1.157l-.086.1L1.517,15.74A.889.889,0,0,1,.174,14.582l.086-.1L6.743,8,.26,1.517A.889.889,0,0,1,.174.36Z"
              transform="translate(4)"
              fill="#1e1e1e"
            />
          </svg>
        </a>
      </div>
    </div>
    <div className="px-4 px-md-5 py-4">
      <div className="d-md-flex align-items-center">
        <div>
          <h6 className="font-weight-normal">
            <img
              src="../../assets/svg/icons/browser-outline.svg"
              alt="Icon"
              className="mr-1"
            />{" "}
            Chrome, Mac OS{" "}
            <span className="badge badge-sm badge-primary font-weight-semibold ml-2">
              Active
            </span>
          </h6>
          <div>
            <small className="text-gray-600">New York, USA &nbsp;.</small>
            <small className="text-gray-600">11:45PM</small>
          </div>
        </div>
        <div className="ml-auto mt-3 mb-md-3">
          <a href="#" className="btn btn-sm btn-outline-dark">
            Log Out
          </a>
        </div>
      </div>
      <hr className="bg-gray-200 my-4" />
      <div className="d-md-flex align-items-center">
        <div>
          <h6 className="font-weight-normal">
            <img
              src="../../assets/svg/icons/phone.svg"
              alt="Icon"
              className="mr-1"
            />{" "}
            iPhone 12
          </h6>
          <div>
            <small className="text-gray-600">New York, USA &nbsp;.</small>
            <small className="text-gray-600">12/05/21</small>
          </div>
        </div>
        <div className="ml-auto mt-3 mb-md-3">
          <a href="#" className="btn btn-sm btn-outline-dark">
            Log Out
          </a>
        </div>
      </div>
      <hr className="bg-gray-200 my-4" />
      <div className="d-md-flex align-items-center">
        <div>
          <h6 className="font-weight-normal">
            <img
              src="../../assets/svg/icons/tv.svg"
              alt="Icon"
              className="mr-1"
            />{" "}
            Samsung Smart TV
          </h6>
          <div>
            <small className="text-gray-600">New York, USA &nbsp;.</small>
            <small className="text-gray-600">17/02/21</small>
          </div>
        </div>
        <div className="ml-auto mt-3 mb-md-3">
          <a href="#" className="btn btn-sm btn-outline-dark">
            Log Out
          </a>
        </div>
      </div>
      <hr className="bg-gray-200 my-4" />
      <div className="d-md-flex align-items-center">
        <div>
          <h6 className="font-weight-normal">
            <img
              src="../../assets/svg/icons/tablet.svg"
              alt="Icon"
              className="mr-1"
            />{" "}
            iPad Pro
          </h6>
          <div>
            <small className="text-gray-600">New York, USA &nbsp;.</small>
            <small className="text-gray-600">05/01/21</small>
          </div>
        </div>
        <div className="ml-auto mt-3 mb-md-3">
          <a href="#" className="btn btn-sm btn-outline-dark">
            Log Out
          </a>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Security