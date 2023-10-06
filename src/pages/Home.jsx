import React from 'react'

const Home = () => {
  return (
    <div className="container">
  {/* Muse Section */}
  <section className="muse-section pb-0 bg-gray-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-10 m-auto text-center">
          <div className="my-3">
            <h1 className="display-3">
              Consult with the <br />
              right doctor for you
            </h1>
            <h3 className="mb-0">
              Search 14,600 doctors and find <br />
              the perfect help
            </h3>
          </div>
          <div className="mt-3">
            <img
              src="/img/templates/clinic-banner.svg"
              className="img-fluid"
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="muse-section">
    <div className="row align-items-center">
      <div className="col-lg-5">
        <div className="pr-lg-4">
          <h2 className="h1">We care about your wellbeing</h2>
          <ul className="number-list pt-1">
            <li>
              <div>
                <small className="circle circle-lg">1</small>
              </div>
              <span>Top of the line equipment and tools</span>
            </li>
            <li>
              <div>
                <small className="circle circle-lg">2</small>
              </div>
              <span>Leading doctors and nurses in the industry</span>
            </li>
            <li>
              <div>
                <small className="circle circle-lg">3</small>
              </div>
              <span>Easy Followups and appointment booking</span>
            </li>
            <li>
              <div>
                <small className="circle circle-lg">4</small>
              </div>
              <span>24/7 phone support and case assistance</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-7">
        <img
          src="/img/templates/about-clinic.jpg"
          className="img-fluid w-100 rounded-12"
          alt="Travel"
        />
      </div>
    </div>
  </section>
  <section className="muse-section">
    <div className="bg-gray-100 p-4 p-md-5 position-relative overflow-hidden rounded-12">
      <div className="row mb-0 mb-sm-5 mb-md-0">
        <div className="col-lg-7 pb-5 pb-md-0 mb-5 mb-lg-0">
          <h2 className="h1 mt-3 mb-1">Get started for free</h2>
          <p className="big text-black-600">
            Turn your 3d ideas into incredible animations
          </p>
          <div className="my-4">
            <a href="javascript:void(0);" className="btn btn-lg btn-success">
              Start 30 day trial
            </a>
          </div>
        </div>
        <div className="col-md-5">
          <div className="get-started-img">
            <img
              src="/img/templates/get-started.png"
              className="img-fluid"
              alt="img"
            />
          </div>
        </div>
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
            data-aos-delay={600}
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
            data-aos-delay={600}
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
            data-aos-delay={600}
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
            data-aos-delay={600}
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
            data-aos-delay={600}
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
            data-aos-delay={600}
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
</div>

  )
}

export default Home