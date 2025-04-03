import React from "react";
import "./ProjectUsItem.css";
import setlogo from "../assets/images/logo.png";
import dohlogo from "../assets/images/AboutUs/logo-doh.png";

/* Images */
import FiberOptic from "../assets/images/Project/Fiber optic มาบตาพุต/ส่งงานดันครั้งที่ 2_190510_0004.jpg";
import ServiceArea from "../assets/images/Project/CCTV Service Area/งานติดตั้งตู้ควบคุม กม.21 สาย7 ขาออก_๒๑๐๙๐๗_1.jpg";
import CCTVWeightstation from "../assets/images/Project/CCTV Weight station/งานติดตั้งcctvระยอง_๑๙๐๒๒๘_0048.jpg";
import ClassificationLPR from "../assets/images/Project/Classification-LPR  ด่านชั่งน้ำหนัก/S__44851234_0.jpg";
import SteelGuardrail from "../assets/images/Project/Steel Guardrail/S__1867827.jpg";
import HorizontalDirectionalDrilling from "../assets/images/Project/HDD/ตั้งเครื่อง.bmp";
import AutomaticClassificationSystem from "../assets/images/Project/Automatic Classification System/2.jpg";

const ProjectUsItem = () => {
  return (
    <div>
      {/* Project Modal 1 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal1a"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  {/* <img className="projectlogo" src={dohlogo}></img> */}
                  <h2>Fiber Optic</h2>
                  <p className="item-intro text-muted">value 22,899,000 bath</p>
                  <img
                    className="img-responsive-item"
                    src={FiberOptic}
                    alt=""
                  />

                  <p>
                    Building a large conference room requires careful
                    consideration of structure, functionality, and technology to
                    accommodate many participants and various uses. The design
                    should focus on room size, seating arrangement, and
                    materials that enhance sound quality. The audiovisual system
                    must include large displays and clear sound, with support
                    for video conferencing. A high-speed Wi-Fi network and
                    sufficient connectivity ports are essential, along with
                    smart control systems. Lighting should be adjustable, and
                    materials should create a comfortable atmosphere.
                    Additionally, security measures like CCTV and fire
                    prevention systems are necessary to ensure a safe and
                    efficient conference environment.
                  </p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times"></i> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PProject Modal 2 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal2a"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>Service Area</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src={ServiceArea}
                    alt=""
                  />
                  <p>
                    The ATMS (Advanced Traffic Management System) is an
                    intelligent traffic management system that utilizes
                    technology to improve traffic efficiency, reduce congestion,
                    and enhance road safety. It operates using sensors,
                    surveillance cameras, and AI to analyze real-time traffic
                    data. This information is then sent to a control center to
                    adjust traffic signals, manage lane usage, and provide
                    incident alerts. ATMS helps minimize travel time, reduce
                    carbon emissions, and improve overall transportation
                    convenience. It is ideal for metropolitan areas facing heavy
                    traffic and requiring an efficient management system.
                  </p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times"></i> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 3 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal3a"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>CCTV Weight Station</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src={CCTVWeightstation}
                    alt=""
                  />
                  <p>
                    The Toll System is an advanced technology used for efficient
                    toll collection on roads, expressways, and bridges, reducing
                    congestion and enhancing convenience for drivers. This
                    system utilizes RFID, Automatic Number Plate Recognition
                    (ANPR), or Electronic Toll Collection (ETC) to verify and
                    charge toll fees without requiring vehicles to stop. This
                    reduces travel time and lowers pollution caused by traffic
                    congestion. The Toll System helps generate revenue for
                    infrastructure projects and enables governments or private
                    entities to manage road networks more effectively.
                  </p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times"></i> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 4 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal4a"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>Classification LPR</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src={ClassificationLPR}
                  />

                  <p>
                    License Plate Recognition (LPR) is a technology used to
                    automatically identify vehicle license plates from images or
                    video footage. Classification in LPR plays a crucial role in
                    distinguishing different types of plates, characters, and
                    vehicle categories, improving the accuracy of the
                    recognition process. The classification process involves
                    analyzing extracted plate data to determine key attributes
                    such as country or state of issuance, plate format, and
                    character types. Advanced machine learning and deep learning
                    techniques are often used to enhance precision, enabling the
                    system to handle various plate designs, fonts, and
                    environmental conditions. Accurate classification in LPR is
                    essential for applications such as toll collection, traffic
                    enforcement, and smart parking systems, ensuring reliable
                    vehicle identification and efficient traffic management.
                  </p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times"></i> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 5 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal5a"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>Steel Guardrail</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src={SteelGuardrail}
                    alt=""
                  />

                  <p>
                    Steel guardrails are protective barriers designed to enhance
                    road safety by preventing vehicles from veering off the
                    roadway. Commonly installed along highways, bridges, and
                    dangerous curves, these barriers help reduce the severity of
                    accidents by absorbing impact and redirecting vehicles back
                    onto the road. Typically made from galvanized steel for
                    durability and corrosion resistance, guardrails come in
                    various designs, such as W-beam and thrie-beam
                    configurations. Their installation follows strict safety
                    standards to ensure optimal performance in mitigating
                    crashes. Steel guardrails play a crucial role in traffic
                    management and road safety, protecting motorists,
                    pedestrians, and infrastructure from potential hazards.
                  </p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times"></i> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 6 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal6a"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>Horizontal Directional Drilling</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src={HorizontalDirectionalDrilling}
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src="/public/images/Project/ระบบบริหารกล้องวงจรปิด/LINE_ALBUM_ระบบบริหารจัดการสำหรับกล้องวงจรปิด_250401.jpg"
                    alt=""
                  />
                  <p>
                    Horizontal Directional Drilling (HDD) is a trenchless
                    technology used for installing underground pipelines,
                    conduits, and cables without the need for open excavation.
                    This method is ideal for crossing roads, railways, rivers,
                    and other obstacles where traditional trenching is not
                    feasible. The HDD process begins with a pilot bore, where a
                    steerable drill head is used to create a guided path. The
                    borehole is then enlarged to accommodate the required
                    pipeline or conduit. Once the hole reaches the desired size,
                    the pipeline is pulled through and securely installed. HDD
                    technology minimizes environmental disruption, reduces
                    construction time, and lowers restoration costs compared to
                    conventional open-cut methods, making it a preferred
                    solution for modern infrastructure projects.
                  </p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times"></i> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 7 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal7a"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>Automatic Classification System</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src={AutomaticClassificationSystem}
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src="/public/images/Project/CCTV Service Area/งานติดตั้งตู้ควบคุม กม.21 สาย7 ขาออก_๒๑๐๙๐๗_1.jpg"
                    alt=""
                  />
                  <p>
                    The Automatic Classification Truck System is a technology
                    designed to identify and categorize trucks without human
                    intervention. It utilizes Artificial Intelligence (AI),
                    Machine Learning (ML), and various sensors such as cameras,
                    LiDAR, and License Plate Recognition (LPR) systems to
                    analyze and classify trucks based on predefined criteria.
                    This system can accurately classify trucks by size, weight,
                    number of axles, or cargo type. It is widely used in
                    applications such as automatic toll collection, truck
                    parking management, security inspection, and freight
                    logistics optimization. By implementing an automatic truck
                    classification system, organizations can enhance efficiency,
                    reduce human errors, lower operational costs, and improve
                    the overall effectiveness of transportation and logistics
                    management.
                  </p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times"></i> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 8 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal8a"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>Sensor Generator</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src={SteelGuardrail}
                    alt=""
                  />

                  <p>
                    The **CCTV Service Area** system is a project that installs
                  </p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times"></i> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 9 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal9a"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>Generator</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src={SteelGuardrail}
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src="/public/images/Project/CCTV Service Area/งานติดตั้งตู้ควบคุม กม.21 สาย7 ขาออก_๒๑๐๙๐๗_1.jpg"
                    alt=""
                  />
                  <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times"></i> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 10 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal10a"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>NX Witness</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src={SteelGuardrail}
                    alt=""
                  />

                  <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times"></i> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 11 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal11a"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>CCTV Weight Station</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src={SteelGuardrail}
                    alt=""
                  />

                  <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times"></i> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 12 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal12a"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>CCB Control Center</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src="/public/images/Project/CCTV Service Area/LINE_ALBUM_SERVICE AREAS Sta.48+000 R M.7_๒๓๐๖๐๖_18.jpg"
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={SteelGuardrail}
                    alt=""
                  />
                  <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times"></i> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 13 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal13a"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>Heightweige Control Center</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src="/public/images/Project/CCTV Service Area/LINE_ALBUM_SERVICE AREAS Sta.48+000 R M.7_๒๓๐๖๐๖_18.jpg"
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={SteelGuardrail}
                    alt=""
                  />
                  <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times"></i> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 14 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal14a"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>MS Lane Control</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src="/public/images/Project/CCTV Service Area/LINE_ALBUM_SERVICE AREAS Sta.48+000 R M.7_๒๓๐๖๐๖_18.jpg"
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={SteelGuardrail}
                    alt=""
                  />
                  <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times"></i> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 15 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal15a"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>Kingpin</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src="/public/images/Project/CCTV Service Area/LINE_ALBUM_SERVICE AREAS Sta.48+000 R M.7_๒๓๐๖๐๖_18.jpg"
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={SteelGuardrail}
                    alt=""
                  />
                  <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times"></i> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectUsItem;
