import React from 'react'
import Cards from '../components/Home/Cards'
import SecondaryCards from '../components/Home/SecondaryCards'

const Home = () => {
  return (
    <div className="container">
      {/* Muse Section */}
      <section className="muse-section">
        <div className="row align-items-center">
          <div
            className="col-lg-6 order-lg-2 text-left text-lg-right"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <img
              src="/img/templates/travel-banner.svg"
              className="img-fluid"
              alt="Banner"
            />
          </div>
          <div className="col-lg-6">
            <div className="my-3">
              <h1 className="display-3">Book your trip instantly</h1>
              <h3 className="mb-0">
                Search 14,600 destinations and find your perfect vaccation
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* Muse Section, Pt 0 */}
      <section className="muse-section pt-0">
        <form className="travel-booking shadow-dark-80">
          <div className="booking-box">
            <span>
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
              Destination
            </span>
            <input type="text" placeholder="Add city or address" />
          </div>
          <div className="booking-box">
            <span>
              <svg
                className="mr-1"
                data-name="icons/tabler/calendar"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
              >
                <rect
                  data-name="Icons/Tabler/Calendar background"
                  width={16}
                  height={16}
                  fill="none"
                />
                <path
                  d="M2.256,16A2.259,2.259,0,0,1,0,13.743V3.9A2.259,2.259,0,0,1,2.256,1.641H3.282V.616A.615.615,0,0,1,4.507.532l.005.084V1.641H9.846V.616A.615.615,0,0,1,11.071.532l.006.084V1.641H12.1A2.259,2.259,0,0,1,14.359,3.9v9.846A2.259,2.259,0,0,1,12.1,16ZM1.231,13.743a1.027,1.027,0,0,0,1.025,1.026H12.1a1.027,1.027,0,0,0,1.026-1.026V7.795H1.231Zm11.9-7.179V3.9A1.027,1.027,0,0,0,12.1,2.872H11.077V3.9a.616.616,0,0,1-1.226.084L9.846,3.9V2.872H4.513V3.9a.615.615,0,0,1-1.225.084L3.282,3.9V2.872H2.256A1.026,1.026,0,0,0,1.231,3.9V6.564Z"
                  transform="translate(1)"
                  fill="#6C757D"
                />
              </svg>{" "}
              Check In / Out
            </span>
            <input
              type="text"
              className="datetimepicker"
              id="timepicker2"
              data-options='{"mode":"range","dateFormat":"d/m/y"}'
              placeholder="Select Dates"
            />
          </div>
          <div className="booking-box guest-booking">
            <span>
              <svg
                className="mr-1"
                data-name="icons/tabler/users"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
              >
                <rect
                  data-name="Icons/Tabler/Users background"
                  width={16}
                  height={16}
                  fill="none"
                />
                <path
                  d="M14.774,15.468l-.005-.084V13.748a2.666,2.666,0,0,0-2-2.567.615.615,0,1,1,.308-1.192,3.9,3.9,0,0,1,2.918,3.572l.005.183v1.641a.616.616,0,0,1-1.226.084Zm-4.923,0-.005-.084V13.744a2.667,2.667,0,0,0-2.516-2.663l-.151,0H3.9a2.667,2.667,0,0,0-2.662,2.516l0,.151v1.641a.616.616,0,0,1-1.226.084L0,15.385V13.744A3.9,3.9,0,0,1,3.719,9.851l.178,0H7.179a3.9,3.9,0,0,1,3.893,3.719l0,.179v1.641a.616.616,0,0,1-1.226.084ZM1.641,3.9a3.9,3.9,0,1,1,3.9,3.9A3.9,3.9,0,0,1,1.641,3.9Zm1.231,0A2.666,2.666,0,1,0,5.538,1.231,2.669,2.669,0,0,0,2.872,3.9Zm7.814,3.336a.616.616,0,0,1,.444-.749,2.666,2.666,0,0,0,0-5.166A.615.615,0,0,1,11.435.126a3.9,3.9,0,0,1,0,7.551.614.614,0,0,1-.749-.444Z"
                  fill="#6C757D"
                />
              </svg>{" "}
              Guests
            </span>
            <input type="text" placeholder="Select how many" />
          </div>
          <button type="button" className="btn btn-lg btn-warning ml-auto">
            Search
          </button>
        </form>
      </section>
      {/* Muse Section */}
      <section className="muse-section">
        <h3 className="mb-4">Popular Destinations</h3>
        <div
          className="card border-0 overflow-hidden rounded-6 shadow-dark-80 bg-white mb-4"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="row align-items-center">
            <div className="col-lg-7">
              <img
                src="/img/templates/travel1.jpg"
                className="img-fluid w-100"
                alt="Travel"
              />
            </div>
            <div className="col-lg-5">
              <div className="py-4 pl-4 pr-4 pr-md-5">
                <span className="d-block font-weight-semibold mb-2 text-gray-600">
                  <svg
                    className="mr-1"
                    data-name="Group 1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height="23.25"
                    viewBox="0 0 24 23.25"
                  >
                    <path
                      d="M23.823,11.991a.466.466,0,0,0,0-.731L21.54,8.7c-.12-.122-.12-.243-.12-.486L21.779,4.8c0-.244-.121-.609-.478-.609L18.06,3.46c-.12,0-.36-.122-.36-.244L16.022.292a.682.682,0,0,0-.839-.244l-3,1.341a.361.361,0,0,1-.48,0L8.7.048a.735.735,0,0,0-.84.244L6.183,3.216c0,.122-.24.244-.36.244L2.58,4.191a.823.823,0,0,0-.48.731l.36,3.412a.74.74,0,0,1-.12.487L.18,11.381a.462.462,0,0,0,0,.732l2.16,2.437c.12.124.12.243.12.486L2.1,18.449c0,.244.12.609.48.609l3.24.735c.12,0,.36.122.36.241l1.68,2.924a.683.683,0,0,0,.84.244l3-1.341a.353.353,0,0,1,.48,0l3,1.341a.786.786,0,0,0,.839-.244L17.7,20.035c.122-.124.24-.243.36-.243l3.24-.734c.24,0,.48-.367.48-.609l-.361-3.413a.726.726,0,0,1,.121-.485Z"
                      fill="#11bf78"
                    />
                    <path
                      data-name="Path"
                      d="M4.036,10,0,5.8,1.527,4.2,4.036,6.818,10.582,0,12,1.591Z"
                      transform="translate(5.938 6.625)"
                      fill="#fff"
                    />
                  </svg>
                  <small>Traveler’s Favorite</small>
                </span>
                <h2>Bali, Indonesia</h2>
                <p className="lh-lg">
                  Duis quis ex ultrices, consectetur neque sed, blandit elit. In
                  vitae est et est maximus lacinia. Aliquam erat volutpat.
                </p>
                <a
                  href="javascript:void(0);"
                  className="btn btn-lg btn-outline-dark mt-2"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Cards image={"/img/templates/travel2.jpg"} destination={"Dubai, UAE"} description={"Duis quis ex ultrices, consectetur neque sed, blandit elit. In vitae est et est maximus lacinia. Aliquam erat volutpat."} />
          <Cards image={"/img/templates/travel3.jpg"} destination={"Venice, Italy"} description={"Duis quis ex ultrices, consectetur neque sed, blandit elit. In vitae est et est maximus lacinia. Aliquam erat volutpat."} />
          <Cards image={"/img/templates/travel4.jpg"} destination={"California, USA"} description={"Duis quis ex ultrices, consectetur neque sed, blandit elit. In vitae est et est maximus lacinia. Aliquam erat volutpat."} />
          <Cards image={"/img/templates/travel5.jpg"} destination={"Mykonos, Greece"} description={"Duis quis ex ultrices, consectetur neque sed, blandit elit. In vitae est et est maximus lacinia. Aliquam erat volutpat."} />
          <Cards image={"/img/templates/travel6.jpg"} destination={"Les Calanques, France"} description={"Duis quis ex ultrices, consectetur neque sed, blandit elit. In vitae est et est maximus lacinia. Aliquam erat volutpat."} />
          <Cards image={"/img/templates/travel7.jpg"} destination={"Green Beach, Thailand"} description={"Duis quis ex ultrices, consectetur neque sed, blandit elit. In vitae est et est maximus lacinia. Aliquam erat volutpat."} />
        </div>
      </section>
      {/* Muse Section, Px 3, Px Md 0, Py Md 5, Bg White, Rounded 12, Shadow Dark 80 */}
      <section
        className="muse-section px-3 px-md-0 py-md-5 bg-white rounded-12 shadow-dark-80"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <div className="col-12 col-md-9 col-xl-5 m-auto text-center py-md-4">
          <h2 className="h1 mb-0">Travel Goodies</h2>
          <p className="big text-black-600">
            Best deals for your next trip directly to your inbox
          </p>
          <form className="mt-4 mx-lg-4 px-md-2 pt-2">
            <div className="input-group input-group-xl">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-xl btn-warning text-uppercase caption px-3"
                type="button"
                id="button-addon2"
              >
                Sign up
              </button>
            </div>
          </form>
          <p className="small text-gray-600 mt-2 pt-1 lh-sm">
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
      {/* Muse Section */}
      <section className="muse-section">
        <h3 className="mb-3 mt-3 mt-md-0">Around the world</h3>
        <div className="row">
          <SecondaryCards image={"/img/templates/travel8.jpg"} destination={"Moondance Festival"} country={"Lahore, Pakistan"}/>
          <SecondaryCards image={"/img/templates/travel9.jpg"} destination={"Brick Lane"} country={"London, United Kingdom"}/>
          <SecondaryCards image={"/img/templates/travel10.jpg"} destination={"Morocooan Architecture"} country={"Rabat, Morocco"}/>
          <SecondaryCards image={"/img/templates/travel11.jpg"} destination={"Great Pyramids"} country={"Giza, Egypt"}/>
          <SecondaryCards image={"/img/templates/travel12.jpg"} destination={"Holi Festival"} country={"Mumbai, India"}/>
          <SecondaryCards image={"/img/templates/travel13.jpg"} destination={"The Louvre Museum"} country={"Paris, France"}/>
        </div>
      </section>
    </div>


  )
}

export default Home