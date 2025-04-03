import React from "react";
import "./ProjectUs.css";

/* Images */
import FiberOptic from "../assets/images/Project/Fiber optic มาบตาพุต/ส่งงานดันครั้งที่ 2_190510_0004.jpg";
import ServiceArea from "../assets/images/Project/CCTV Service Area/งานติดตั้งตู้ควบคุม กม.21 สาย7 ขาออก_๒๑๐๙๐๗_1.jpg";
import CCTVWeightstation from "../assets/images/Project/CCTV Weight station/งานติดตั้งcctvระยอง_๑๙๐๒๒๘_0048.jpg";
import ClassificationLPR from "../assets/images/Project/Classification-LPR  ด่านชั่งน้ำหนัก/S__44851234_0.jpg";
import SteelGuardrail from "../assets/images/Project/Steel Guardrail/S__1867827.jpg";

const ProjectUs = () => {
  return (
    <section id="portfolio" className="bg-light-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Project Us</h2>
            <h3 className="section-subheading text-muted">
              Past works from the past to the present.
            </h3>
          </div>
        </div>
        <div className="row">
          {/* Project Modal 1 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal1a"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={FiberOptic} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>FiberOptic</h4>
              <h6 className="projectbath">value 22,899,000 bath</h6>
            </div>
          </div>

          {/* Project Modal 2 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal2a"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={ServiceArea} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>ServiceArea</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 3 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal3a"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={CCTVWeightstation} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>CCTV Weight Station</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 4 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal4a"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={ClassificationLPR} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Classification LPR</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 5 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal5a"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={SteelGuardrail} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Steel Guardrail</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 6 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal6a"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={SteelGuardrail} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Emergency Telephone System</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 7 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal7a"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={SteelGuardrail} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>ATS</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 8 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal8a"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={SteelGuardrail} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Sensor Generator</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 9 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal9a"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={SteelGuardrail} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Generator</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 10 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal10a"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={SteelGuardrail} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>NX Witness</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 11 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal11a"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={SteelGuardrail} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>CCTV Weight Station</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 12 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal12a"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={SteelGuardrail} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>CCB Control Center</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 13 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal13a"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={SteelGuardrail} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Heightweige Control Center</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 14 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal14a"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={SteelGuardrail} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>MS Lane Control</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 15 */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              href="#portfolioModal15a"
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={SteelGuardrail} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Kingpin</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectUs;
