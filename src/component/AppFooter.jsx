import { Link } from "react-router-dom";
import "./AppFooter.css";

const PageFooter = () => {
  return (
    <footer className="footer-section">
      <section id="contact">
        <div className="textcontact">
          <h2>Contact</h2>
        </div>
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>
                      62/174 Moo 3,Prasertislam 6 Tiwanon Rd.,
                      <br /> Bangtalad, Pakkret, Nonthaburi 11120
                    </span>
                  </div>
                  <br />
                  <a
                    href="https://www.google.co.th/maps/dir//62%2F174+%E0%B8%8B%E0%B8%AD%E0%B8%A2+%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%AA%E0%B8%A3%E0%B8%B4%E0%B8%90%E0%B8%AD%E0%B8%B4%E0%B8%AA%E0%B8%A5%E0%B8%B2%E0%B8%A1+6+%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94+%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD%E0%B8%9B%E0%B8%B2%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%A3%E0%B9%87%E0%B8%94+%E0%B8%99%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5+11120/@13.8889369,100.4334487,26090m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x30e284bb7c6b6b63:0x2499f1d012380ea9!2m2!1d100.5158505!2d13.8889507?entry=ttu&g_ep=EgoyMDI1MDMxNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                  >
                    <img
                      className="img-location"
                      src="/public/images/location.jpg"
                    ></img>
                  </a>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone"></i>
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>
                      Tel : 02-9603971-3
                      <br /> Fax : 02-9603946
                      <div>Technician : 081-920-9833</div>
                      <div>Sales Department : 088-653-6545</div>
                      <div>Human Resources : 085-328-1153</div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>
                      <div>
                        Technician :<br /> Helpdesk@Setgroupsolution.com
                      </div>
                      <div>
                        Sales Department :<br /> Kinareep@Setgroupsolution.com
                      </div>
                      <div>
                        Human Resources :<br /> Sujinda@Setgroupsolution.com
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <img src="/public/images/logo.png" />
                    <img src="/public/images/SET_TECH.png" />
                    <img
                      className="footer-logo1"
                      src="/public/images/Logo Sam 1.png"
                    />
                    <img src="/public/images/set group retail.png" />
                  </div>
                  <div className="footer-text">
                    {/* <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p> */}
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a
                      href="https://www.facebook.com/profile.php?id=100063661576367"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    {/* <a href="#">
                      <i className="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-google-plus-g google-bg"></i>
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>ABOUT SETGROUP</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;Your company provides design and
                      installation of telecommunication network systems,
                      covering both infrastructure and communication devices
                      such as cabling systems, wireless networks, and enterprise
                      communication solutions. Additionally, your business
                      involves the sale of equipment used in telecommunication
                      systems, including network equipment, fiber optic cables,
                      antennas, and signal distribution devices, catering to the
                      needs of businesses and industries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i className="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>Setgroupsolution @2025 All rights reserved.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#page-top">Home</a>
                  </li>
                  <li>
                    <a href="#services">Service</a>
                  </li>
                  <li>
                    <a href="#portfolio">Project</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#team">Team</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
