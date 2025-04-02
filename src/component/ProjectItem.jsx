import React from "react";
import "./ProjectItem.css";
import setlogo from "../assets/images/logo.png";
import dohlogo from "../assets/images/AboutUs/logo-doh.png";

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
import NXWitness from "../assets/images/Project/NX Witness/LINE_ALBUM_ระบบบริหารจัดการสำหรับกล้องวงจรปิด_25040.jpg";
import CCTVWeightstation from "../assets/images/Project/CCTV Weight station/IMG20190226151349.jpg";
import CCBControl from "../assets/images/Project/Project Highlight/CCB Control/page3_img1.jpg";
import HeightweigeControlCenter from "../assets/images/Project/Project Highlight/Heightweige Control Center/Videowall_181025_0002.jpg";
import MSLaneControl from "../assets/images/Project/Project Highlight/MS Lane Control/5783891.jpg";
import Kingpin from "../assets/images/Project/Project Highlight/King Pin Motorway/1.jpg";

const ProjectItem = () => {
  return (
    <div>
      {/* Project Modal 1 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal1"
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
                  <h2>Central Lab</h2>
                  <p className="item-intro text-muted">value 22,899,000 bath</p>
                  <img
                    className="img-responsive-item"
                    src={Centrallab}
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
        id="portfolioModal2"
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
                  <h2>ATMS-FD</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img className="img-responsive-item" src={ATMS} alt="" />
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
        id="portfolioModal3"
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
                  <h2>TOLL</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img className="img-responsive-item" src={TOLL} alt="" />
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
        id="portfolioModal4"
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
                  <h2>VMS</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img className="img-responsive-item" src={VMS} />

                  <p>
                    The VMS (Variable Message Sign System) is an intelligent
                    signage system used to display real-time traffic
                    information, alerts, and warnings to drivers. This system is
                    connected to a traffic control center and can update
                    messages based on traffic conditions, accidents, or weather
                    changes, helping to reduce congestion and enhance road
                    safety. VMS is commonly installed on expressways, highways,
                    and urban roads to provide crucial information, allowing
                    drivers to plan their routes more efficiently.
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
        id="portfolioModal5"
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
                  <h2>Oracle</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img className="img-responsive-item" src={Oracle} alt="" />

                  <p>
                    Oracle is a widely used database system for managing
                    large-scale data within organizations. It utilizes SQL
                    (Structured Query Language) to efficiently and securely
                    access and process information. Oracle offers features that
                    support various functions such as business data management,
                    data analysis, and the development of complex applications.
                    It is scalable, making it suitable for organizations of
                    different sizes and needs. With its stability and high
                    security, Oracle is ideal for organizations that require
                    managing complex and critical data efficiently.
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
        id="portfolioModal6"
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
                  <h2>Emergency Telephone System</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img className="img-responsive-item" src={ETS} alt="" />
                  <img
                    className="img-responsive-item"
                    src="/public/images/Project/ระบบบริหารกล้องวงจรปิด/LINE_ALBUM_ระบบบริหารจัดการสำหรับกล้องวงจรปิด_250401.jpg"
                    alt=""
                  />
                  <p>
                    The Emergency Telephone System is a communication system
                    designed for reporting urgent incidents such as accidents,
                    fires, or other emergencies. It connects directly to control
                    centers or relevant authorities for immediate assistance.
                    This system is commonly installed in public areas such as
                    highways, train stations, and critical buildings, allowing
                    people to request help quickly. It also supports automated
                    functions like location identification and call recording.
                    The Emergency Telephone System enhances emergency response
                    efficiency, reduces reaction time, and improves public
                    safety.
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
        id="portfolioModal7"
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
                  <h2>ATS</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img className="img-responsive-item" src={ATS} alt="" />
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

      {/* Project Modal 8 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal8"
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
                  <img className="img-responsive-item" src={SensorGen} alt="" />

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
        id="portfolioModal9"
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
                  <img className="img-responsive-item" src={Generator} alt="" />
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
        id="portfolioModal10"
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
                  <img className="img-responsive-item" src={NXWitness} alt="" />

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
        id="portfolioModal11"
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
        id="portfolioModal12"
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
                    src={CCBControl}
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
        id="portfolioModal13"
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
                    src={HeightweigeControlCenter}
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
        id="portfolioModal14"
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
                    src={MSLaneControl}
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
        id="portfolioModal15"
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
                  <img className="img-responsive-item" src={Kingpin} alt="" />
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

export default ProjectItem;
