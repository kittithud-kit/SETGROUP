import React from "react";
import "./Project.css";
/* Images */
import Centrallab from "../assets/images/Project/Project Highlight/Central Leb/ความคืบหน้า_๒๑๐๑๐๗_26.jpg";
import ATMS from "../assets/images/Project/Project Highlight/Pattaya/ATMS/ATMS-FD.png";
import TOLL from "../assets/images/Project/Project Highlight/Thabchang/toll.jpg";
import VMS from "../assets/images/Project/Project Highlight/Thabchang/VMS/4.jpg";
import Oracle from "../assets/images/Project/Project Highlight/Thabchang/Oracle/1.png";
import ETS from "../assets/images/Project/Project Highlight/Pattaya/ETS/1.jpg";
import ATS from "../assets/images/Project/Project Highlight/ATS/1.jpg";
import SensorGen from "../assets/images/Project/Project Highlight/SensorGen/LINE_ALBUM_งานติดตั้ง Sensor อาคารด่านฯ หนองขาม 1_250402_1.jpg";
import Generator from "../assets/images/Project/Project Highlight/Generator/LINE_ALBUM_งานปรับปรุงตู้ ATS อาคารด่านฯ บางพระ 1_250402_1.jpg";

const Project = () => {
  return (
    <section id="portfolio" className="bg-light-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Project Highlight</h2>
            <h3 className="section-subheading text-muted">
              Past works from the past to the present.
            </h3>
          </div>
        </div>
        <div className="row">
          {/* Project Modal 1 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal1"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={Centrallab} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Central Lab</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 2 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal2"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={ATMS} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>ATMS-FD</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 3 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal3"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={TOLL} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>TOLL</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 4 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal4"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={VMS} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>VMS</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 5 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal5"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={Oracle} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Oracle</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 6 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal6"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={ETS} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>ETS</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 7 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal7"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={ATS} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>ATS</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 8 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal8"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={SensorGen} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Sensor Generator</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 9 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal9"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={Generator} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Generator</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 10 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal10"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502"
                className="img-responsive"
                alt=""
              />
            </a>
            <div className="portfolio-caption">
              <h4>Dreams</h4>
            </div>
          </div>

          {/* Project Modal 11 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal11"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502"
                className="img-responsive"
                alt=""
              />
            </a>
            <div className="portfolio-caption">
              <h4>Dreams</h4>
            </div>
          </div>

          {/* Project Modal 12 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal12"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502"
                className="img-responsive"
                alt=""
              />
            </a>
            <div className="portfolio-caption">
              <h4>Dreams</h4>
            </div>
          </div>

          {/* Project Modal 13 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal13"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502"
                className="img-responsive"
                alt=""
              />
            </a>
            <div className="portfolio-caption">
              <h4>Dreams</h4>
            </div>
          </div>

          {/* Project Modal 14 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal14"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502"
                className="img-responsive"
                alt=""
              />
            </a>
            <div className="portfolio-caption">
              <h4>Dreams</h4>
            </div>
          </div>

          {/* Project Modal 15 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal15"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502"
                className="img-responsive"
                alt=""
              />
            </a>
            <div className="portfolio-caption">
              <h4>Dreams</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
