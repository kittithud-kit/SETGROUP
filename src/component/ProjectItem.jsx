import React from "react";
import "./ProjectItem.css";
import setlogo from "../assets/images/logo.png";
import dohlogo from "../assets/images/AboutUs/logo-doh.png";

/* Images */
import Centrallab from "../assets/images/Project/Project Highlight/Central Leb/ความคืบหน้า_๒๑๐๑๐๗_26.jpg";
import ATMS from "../assets/images/Project/Project Highlight/Pattaya/ATMS/ATMS-FD.png";
import ATMS2 from "../assets/images/Project/Project Highlight/Pattaya/ATMS/1787407.jpg";
import TOLL from "../assets/images/Project/Project Highlight/Thanya/1.jpg";
import TOLL32 from "../assets/images/Project/Project Highlight/Thabchang/toll.jpg";
import TOLL33 from "../assets/images/Project/Project Highlight/TOLL 3.3/1.jpg";
import TOLL34 from "../assets/images/Project/Project Highlight/TOLL 3.4/1.jpg";

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
import MultilaneFreeflow from "../assets/images/Project/Project Highlight/Multilane Freeflow/1790337_0.jpg";
import MultilaneFreeflow2 from "../assets/images/Project/Project Highlight/Multilane Freeflow/2.jpg";
import MultilaneFreeflow3 from "../assets/images/Project/Project Highlight/Multilane Freeflow/3.jpg";
import MaintenanceMotorway from "../assets/images/Project/Project Highlight/Maintenance Motorway 7 & 9/1.jpg";
import MaintenanceMotorway2 from "../assets/images/Project/Project Highlight/Maintenance Motorway 7 & 9/2.jpg";
import MaintenanceMotorway3 from "../assets/images/Project/Project Highlight/Maintenance Motorway 7 & 9/3.jpg";
import MaintenanceMotorway4 from "../assets/images/Project/Project Highlight/Maintenance Motorway 7 & 9/4.jpg";
import MaintenanceMotorway5 from "../assets/images/Project/Project Highlight/Maintenance Motorway 7 & 9/5.jpg";
import MaintenanceMotorway6 from "../assets/images/Project/Project Highlight/Maintenance Motorway 7 & 9/6.jpg";
import MaintenanceMotorway7 from "../assets/images/Project/Project Highlight/Maintenance Motorway 7 & 9/7.jpg";
import MaintenanceHighwayWeighpro from "../assets/images/Project/Project Highlight/Maintenance Highway Weigh/pro.jpg";
import MaintenanceHighwayWeigh1 from "../assets/images/Project/Project Highlight/Maintenance Highway Weigh/1.jpg";
import MaintenanceHighwayWeigh2 from "../assets/images/Project/Project Highlight/Maintenance Highway Weigh/2.jpg";
import MaintenanceHighwayWeigh3 from "../assets/images/Project/Project Highlight/Maintenance Highway Weigh/3.jpg";
import MaintenanceHighwayWeigh4 from "../assets/images/Project/Project Highlight/Maintenance Highway Weigh/4.jpg";

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
                  <p className="item-intro text-muted">value - bath</p>
                  <img className="img-responsive-item" src={ATMS} alt="" />
                  <img className="img-responsive-item" src={ATMS2} alt="" />
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

      {/* Project Modal 3.1 */}
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
                  <h2>Motorway Route 7 Phase III Project</h2>
                  <p className="item-intro text-muted">
                    value 1,200,000,000 bath
                  </p>
                  <img className="img-responsive-item" src={TOLL} alt="" />
                  <p>
                    Motorway route 7 phase III is highway connect Bangkok,
                    Chonburi, Laem Chabang Port and Pattaya city To U-Tapao
                    International Airport.
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

      {/* Project Modal 3.2 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal32"
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
                  <h2>
                    Improve Thanyaburi Toll Plaza on Motorway Route 9 Project
                  </h2>
                  <p className="item-intro text-muted">
                    value 716,000,000 bath
                  </p>
                  <img className="img-responsive-item" src={TOLL32} alt="" />
                  <p>
                    Improve efficiency Thanyaburi toll plazas, increasing the
                    number of toll collection lanes from 20 to 30 lanes and
                    physical area, to support traffic volume.
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

      {/* Project Modal 3.3 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal33"
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
                  <h2>
                    Improve Thubchang Toll Plaza on Motorway Route 9 Project
                  </h2>
                  <p className="item-intro text-muted">
                    value 1,862,403,315 bath
                  </p>
                  <img className="img-responsive-item" src={TOLL33} alt="" />
                  <p>
                    Improve efficiency Thubchang toll plazas, increasing the
                    number of toll collection lanes from 20 to 35 lanes and
                    physical area, to support traffic volume. Including
                    implement disaster recovery site (DR) for toll collection
                    and payment system on Motorway Route 9
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

      {/* Project Modal 3.4 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal34"
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
                  <h2>Motorway Route 7 Phase II Project</h2>
                  <p className="item-intro text-muted">
                    value 4,000,000,000 bath
                  </p>
                  <img className="img-responsive-item" src={TOLL34} alt="" />
                  <p>
                    Motorway route 7 phase II is highway connect between Bangkok
                    to Chonburi and Pattaya city together. Project Including
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
                  <p className="item-intro text-muted">value - bath</p>
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
                  <p className="item-intro text-muted">value - bath</p>
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
                  <p className="item-intro text-muted">value - bath</p>
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
                  <p className="item-intro text-muted">value 17,900,000 bath</p>
                  <img className="img-responsive-item" src={ATS} alt="" />
                  <img
                    className="img-responsive-item"
                    src="/public/images/Project/CCTV Service Area/งานติดตั้งตู้ควบคุม กม.21 สาย7 ขาออก_๒๑๐๙๐๗_1.jpg"
                    alt=""
                  />
                  <p>
                    Automatic Transfer Switch (ATS) control panel is a crucial
                    component in backup power systems. It automatically switches
                    the power supply between the main power source and a
                    generator in the event of a power outage. When the main
                    power fails, the ATS detects the issue, starts the
                    generator, and transfers the load to the backup source. Once
                    the main power is restored, the ATS seamlessly switches the
                    load back to ensure continuous power supply. An ATS system
                    enhances operational efficiency by minimizing downtime and
                    ensuring a smooth transition between power sources. It is
                    essential for critical facilities such as hospitals, data
                    centers, and large commercial buildings where reliable power
                    is necessary.
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
                  <p className="item-intro text-muted">value 14,900,000 bath</p>
                  <img className="img-responsive-item" src={SensorGen} alt="" />

                  <p>
                    Sensor Generator is a device used to monitor and control the
                    operation of cooling fans and temperature levels within a
                    generator, enhancing efficiency and ensuring the safety of
                    backup power systems. The fan monitoring sensor checks the
                    functionality of the cooling fan, and if it stops working or
                    malfunctions, the system can issue an alert or shut down the
                    generator to prevent damage. The temperature monitoring
                    sensor detects the generator’s temperature, and if it
                    exceeds a set threshold, the system triggers an alert or
                    activates the cooling mechanism to reduce the temperature.
                    Implementing a Sensor Generator helps extend the generator’s
                    lifespan, reduces the risk of overheating, and prevents
                    potential damage caused by cooling system malfunctions.
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
                  <p className="item-intro text-muted">value - bath</p>
                  <img className="img-responsive-item" src={Generator} alt="" />
                  <img
                    className="img-responsive-item"
                    src="/public/images/Project/CCTV Service Area/งานติดตั้งตู้ควบคุม กม.21 สาย7 ขาออก_๒๑๐๙๐๗_1.jpg"
                    alt=""
                  />
                  <p>
                    Generator is a device that converts mechanical energy into
                    electrical energy through the principle of electromagnetic
                    induction. It supplies electricity to various systems and
                    equipment in cases where the main power source fails or is
                    unavailable. Generators are widely used in hospitals, data
                    centers, industrial plants, and commercial buildings to
                    ensure continuous operations without interruptions. They
                    come in different types and sizes depending on the power
                    source, such as diesel engines, gasoline engines, and
                    renewable energy. Choosing the right generator ensures a
                    stable and efficient backup power system.
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
                  <p className="item-intro text-muted">value - bath</p>
                  <img className="img-responsive-item" src={NXWitness} alt="" />

                  <p>
                    NX Witness is a powerful Video Management System (VMS)
                    designed for efficient control and management of CCTV
                    systems. It supports a wide range of camera brands and
                    allows users to customize settings based on their specific
                    needs. With its user-friendly interface, NX Witness enables
                    system administrators to monitor live video feeds, search
                    recorded footage, and manage user access with ease. It also
                    supports smart notifications, data analytics, and
                    integration with other security systems to enhance
                    surveillance capabilities. The system can run on servers and
                    various devices while providing remote access through web
                    browsers and mobile applications, allowing users to monitor
                    and manage CCTV systems from anywhere at any time. NX
                    Witness is an ideal solution for businesses, organizations,
                    and facilities requiring a flexible, secure, and scalable
                    video management system.
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
                  <p className="item-intro text-muted">value - bath</p>
                  <img
                    className="img-responsive-item"
                    src={CCTVWeightstation}
                    alt=""
                  />

                  <p>
                    CCTV Weight Station is a surveillance system installed at
                    truck weighing stations to enhance the accuracy of
                    monitoring and recording trucks' entry and exit during the
                    weighing process. CCTV cameras capture both the front and
                    side views of trucks, allowing for the verification of
                    license plates, cargo status, and documentation of various
                    events occurring at the station. Using CCTV at weighing
                    stations increases safety and helps prevent fraud, as the
                    recorded footage can serve as evidence in case of disputes
                    or irregularities in the weighing process. Additionally, it
                    assists in monitoring overweight trucks, ensuring compliance
                    with legal weight limits, and promoting safer and more
                    efficient transportation practices. A CCTV Weight Station is
                    a crucial tool for improving accuracy, security, and the
                    overall efficiency of truck weighing operations,
                    contributing to safer transportation and better logistics
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
                  <p className="item-intro text-muted">value - bath</p>
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
                  <p>
                    CCB Control Center is a critical hub for managing and
                    ensuring safety on motorways. It utilizes advanced
                    technologies such as CCTV cameras and various sensors to
                    monitor traffic conditions and incidents, including
                    accidents or traffic congestion, in real-time. The center
                    works closely with emergency services to provide a swift
                    response to incidents by dispatching rescue teams or law
                    enforcement officers to the scene. It also monitors traffic
                    flow and can issue alerts to drivers through digital signage
                    or mobile apps in case of traffic slowdowns or accidents. By
                    leveraging technology for monitoring and control, the CCB
                    Control Center significantly enhances safety, reduces risks,
                    and improves the overall driving experience on motorways.
                    This ensures that drivers can travel with confidence and
                    reduces the likelihood of accidents on the road.
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
                  <h2>Weigh Station Control Center</h2>
                  <p className="item-intro text-muted">value 9,560,000 bath</p>
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
                  <p>
                    Weigh Station Control Center is a central management hub for
                    overseeing truck weighing stations across the country. Its
                    primary role is to ensure that the process of weighing
                    trucks is efficient, standardized, and accurately monitored
                    to prevent overloading, which can harm road infrastructure
                    and compromise transportation safety. The control center
                    coordinates with various weighing stations nationwide,
                    ensuring smooth, continuous operations. It utilizes advanced
                    technologies such as weight sensors, CCTV cameras, and data
                    management systems to record and monitor all trucks entering
                    and exiting the weighing stations. This real-time data
                    monitoring allows for efficient tracking and immediate
                    response to any potential violations. By centralizing
                    operations, the Weigh Station Control Center enhances the
                    effectiveness of truck weight inspections, reduces the risk
                    of overloading, and promotes safety within the
                    transportation system. It also ensures transparency in
                    operations and enables quick, easy access to data for
                    improved decision-making and enforcement.
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
                  <p className="item-intro text-muted">value - bath</p>
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
                  <p>
                    MS Lane Control is a traffic light system designed to manage
                    and regulate the use of lanes on roads, especially in areas
                    with high traffic volume or where lane usage changes
                    depending on time of day, such as motorways or highways
                    during peak traffic hours. The MS Lane Control system uses
                    traffic signals to determine the status of different lanes,
                    such as opening or closing certain lanes based on real-time
                    traffic demands, or changing the direction of traffic flow
                    during specific times to improve traffic efficiency. The
                    system adapts to current traffic conditions by using sensors
                    and vehicle detection systems to make real-time decisions on
                    lane usage. Implementing MS Lane Control enhances traffic
                    management efficiency, reduces congestion in certain areas,
                    and increases road safety, particularly during rush hours
                    when vehicle numbers are high.
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
                  <p className="item-intro text-muted">value - bath</p>
                  <img
                    className="img-responsive-item"
                    src="/public/images/Project/CCTV Service Area/LINE_ALBUM_SERVICE AREAS Sta.48+000 R M.7_๒๓๐๖๐๖_18.jpg"
                    alt=""
                  />
                  <img className="img-responsive-item" src={Kingpin} alt="" />
                  <p>
                    Kingpin is a device installed beneath the road surface to
                    automatically identify the type of truck passing over it.
                    Working in conjunction with detection systems and sensors
                    embedded in the road, Kingpin detects the characteristics of
                    the truck’s wheels and weight to classify the vehicle, such
                    as differentiating between large trucks, trailers, or
                    regular freight trucks. The use of Kingpin enhances the
                    efficiency of traffic management and truck inspections,
                    especially in weigh stations or areas that require automatic
                    vehicle classification. This device operates quickly and
                    accurately without relying on manual inspection processes,
                    reducing time and increasing convenience in managing truck
                    movements. Kingpin is an essential tool in developing
                    systems for monitoring and controlling road transportation,
                    contributing to faster, safer, and more efficient operations
                    in truck-related logistics and traffic management.
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

      {/* Project Modal 16 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal16"
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
                  <h2>Multilane Freeflow</h2>
                  <p className="item-intro text-muted">value - bath</p>
                  <img
                    className="img-responsive-item"
                    src="/public/images/Project/CCTV Service Area/LINE_ALBUM_SERVICE AREAS Sta.48+000 R M.7_๒๓๐๖๐๖_18.jpg"
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={MultilaneFreeflow}
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={MultilaneFreeflow2}
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={MultilaneFreeflow3}
                    alt=""
                  />
                  <p></p>

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

      {/* Project Modal 17 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal17"
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
                  <h2>Maintenance Motorway 7 & 9</h2>
                  <p className="item-intro text-muted">
                    value 140,323,000 bath
                  </p>
                  <img
                    className="img-responsive-item"
                    src="/public/images/Project/CCTV Service Area/LINE_ALBUM_SERVICE AREAS Sta.48+000 R M.7_๒๓๐๖๐๖_18.jpg"
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={MaintenanceMotorway}
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={MaintenanceMotorway2}
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={MaintenanceMotorway3}
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={MaintenanceMotorway4}
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={MaintenanceMotorway5}
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={MaintenanceMotorway6}
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={MaintenanceMotorway7}
                    alt=""
                  />
                  <p>
                    Maintenance Work Description The maintenance services cover
                    both preventive and corrective aspects to ensure that all
                    systems—including toll collection control systems, traffic
                    management systems, power systems, and core communication
                    networks—operate efficiently, reliably, and without
                    interruption. Preventive maintenance is carried out on a
                    scheduled basis to minimize the risk of system failures and
                    to maintain optimal performance. This includes visual
                    inspections, equipment cleaning, verification of power and
                    signal connections, functional testing of devices such as
                    cameras, sensors, card readers, and toll collection units,
                    as well as checking backup power systems like UPS for
                    battery health and runtime capacity. Network equipment such
                    as switches, routers, and media converters are also reviewed
                    to ensure stable connectivity. If needed, firmware and
                    software updates are applied in accordance with the
                    manufacturer’s recommendations. All maintenance activities
                    are documented in detailed reports that include photographs
                    and remarks, and are submitted following each maintenance
                    cycle, typically monthly or quarterly. Corrective
                    maintenance is performed when faults or malfunctions are
                    reported, either through direct communication channels or
                    automated system alerts. The process begins with root cause
                    analysis through remote diagnosis where possible, followed
                    by dispatching qualified technicians for on-site
                    troubleshooting and repair. If any hardware components are
                    found to be defective, they are replaced to restore full
                    functionality. After repairs, the system is tested and
                    verified to ensure that operations return to normal. Each
                    incident is followed by a report outlining the problem, the
                    resolution, and recommendations to prevent recurrence. All
                    maintenance activities are tracked and reviewed by senior
                    engineers to ensure quality control. In addition, regular
                    reports are provided summarizing overall system health,
                    incident statistics, and any risks related to aging or
                    end-of-life equipment.
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

      {/* Project Modal 18 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal18"
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
                  <h2>Maintenance Highway Weigh</h2>
                  <p className="item-intro text-muted">value - bath</p>

                  <img
                    className="img-responsive-item"
                    src={MaintenanceHighwayWeighpro}
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={MaintenanceHighwayWeigh1}
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={MaintenanceHighwayWeigh2}
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={MaintenanceHighwayWeigh3}
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={MaintenanceHighwayWeigh4}
                    alt=""
                  />

                  <p>
                    The Highway Weigh Station Maintenance Project is designed to
                    ensure the continuous functionality and accuracy of systems
                    used at truck weigh stations. These systems play a critical
                    role in monitoring and regulating overloaded vehicles on
                    highways, which directly impacts road safety, infrastructure
                    durability, and law enforcement efficiency. The project
                    involves comprehensive maintenance of key components such as
                    the axle sorting system, which detects and classifies truck
                    axle configurations; the automatic license plate recognition
                    (LPR) system for vehicle identification; CCTV systems for
                    continuous surveillance and evidence collection; and the
                    data recording and reporting system that logs and generates
                    weight-related reports. Regular and preventive maintenance
                    activities are carried out to minimize system downtime,
                    enhance performance accuracy, and support seamless traffic
                    and logistics operations. This ensures the weigh station
                    infrastructure remains reliable, compliant with regulations,
                    and capable of supporting long-term transportation safety
                    objectives.
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
    </div>
  );
};

export default ProjectItem;
