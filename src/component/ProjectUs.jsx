import React from "react";
import "./ProjectUs.css";

/* Images */
import FiberOptic from "../assets/images/Project/Fiber optic มาบตาพุต/ส่งงานดันครั้งที่ 2_190510_0004.jpg";

const ProjectUs = () => {
  return (
    <section id="ProjectUs" className="bg-light-gray">
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
          <div className="col-md-4 col-sm-6 ProjectUs-item">
            <a
              href="#ProjectUsModal1"
              className="ProjectUs-link"
              data-toggle="modal"
            >
              <div className="ProjectUs-hover">
                <div className="ProjectUs-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img src={FiberOptic} className="img-responsive" alt="" />
            </a>
            <div className="ProjectUs-caption">
              <h4>Central Lab</h4>
              <h6 className="projectbath">value 9,999,999 bath</h6>
            </div>
          </div>

          {/* Project Modal 2 */}

          {/* Project Modal 3 */}

          {/* Project Modal 4 */}

          {/* Project Modal 5 */}

          {/* Project Modal 6 */}

          {/* Project Modal 7 */}

          {/* Project Modal 8 */}

          {/* Project Modal 9 */}

          {/* Project Modal 10 */}

          {/* Project Modal 11 */}

          {/* Project Modal 12 */}

          {/* Project Modal 13 */}

          {/* Project Modal 14 */}

          {/* Project Modal 15 */}
        </div>
      </div>
    </section>
  );
};

export default ProjectUs;
