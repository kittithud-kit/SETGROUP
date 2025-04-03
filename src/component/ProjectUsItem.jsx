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
import ImageProcessingDetectorSystem from "../assets/images/Project/Image Processing Detector System/2.jpg";
import MatrixSign from "../assets/images/Project/Matrix Sign/1743671845909.jpg";
import RadioCommunicationSystem from "../assets/images/Project/Radio Communication System/1743672446510.jpg";
import ClockSystem from "../assets/images/Project/Clock System/1.jpg";
import MultiLaneFreeFlowSystem from "../assets/images/Project/Multi Lane Free Flow System/1.png";
import ElectricalOnTheRoad from "../assets/images/Project/Electrical work on the road/1743673364432.jpg";
import WaterLevelMeasurementSystem from "../assets/images/Project/Water Level Measurement System/1.png";
import CATTelecomNode from "../assets/images/Project/CAT Telecom Node/1743674577744.jpg";

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
                    Fiber Optic installation involves the process of laying
                    fiber optic cables underground to establish high-speed,
                    efficient communication networks. Fiber optic cables are
                    made of glass or plastic fibers that transmit light signals
                    for data communication over long distances with minimal
                    signal loss. During the installation process, a team will
                    excavate trenches along roads or land to place the fiber
                    optic cables. After the cables are laid, they are sealed and
                    arranged carefully to prevent damage during installation.
                    Precision in digging and cable placement is crucial to
                    ensure stable network connections that operate at peak
                    performance. Fiber optic installation is a key step in the
                    development of high-speed internet networks and modern
                    communication systems. It supports various applications,
                    including organizational communications, internet services,
                    and telecommunications, where high speed and stable
                    connections are essential.
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
                    Service Area is a designated rest stop located along
                    motorways, providing essential services for drivers and
                    passengers during long journeys. These areas are
                    strategically placed at regular intervals, allowing
                    travelers to take breaks, refuel, eat, or use other
                    amenities such as restrooms or relaxation areas. Typically,
                    a Service Area offers facilities such as restaurants,
                    convenience stores, fuel stations, and additional services
                    like Wi-Fi, parking for both cars and trucks, and areas for
                    passengers to rest. These stops provide a safe environment
                    for drivers to rest, ensuring they are well-rested and alert
                    for the remainder of their journey. Service areas play a
                    vital role in reducing accidents caused by driver fatigue
                    and enhancing the overall travel experience by offering
                    comfort and convenience during long-distance travel. They
                    allow drivers to continue their journey safely and
                    efficiently, ensuring a smoother, more pleasant trip.
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
                  <h2>CCTV Motorway</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src={CCTVWeightstation}
                    alt=""
                  />
                  <p>
                    CCTV Motorway refers to the surveillance camera system
                    installed along motorways to enhance road safety and monitor
                    traffic conditions. This system plays a crucial role in
                    tracking traffic flow, recording accidents, and preventing
                    criminal activities that may occur on the motorway. The CCTV
                    cameras placed at various points along the motorway allow
                    control centers to monitor traffic in real-time and
                    coordinate with relevant agencies such as the police or
                    emergency response teams in case of accidents or other
                    incidents. This system enables quick and efficient responses
                    to emergencies, ensuring the safety and well-being of all
                    road users. Additionally, the CCTV system helps in
                    monitoring unsafe driving behaviors such as speeding or lane
                    violations, contributing to overall road safety and reducing
                    the risk of accidents. The implementation of CCTV systems on
                    motorways is therefore a vital tool in ensuring road safety,
                    providing drivers with a sense of security, and enabling
                    safer and more efficient travel.
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
                    Classification LPR (License Plate Recognition) is a system
                    that automatically detects and reads vehicle license plates
                    to analyze and classify different types of vehicles. This
                    technology is widely used in various applications, such as
                    controlling vehicle access to specific areas, tracking truck
                    movements, or monitoring traffic operations in different
                    locations. The LPR system uses high-resolution cameras and
                    software to process images and capture data from vehicle
                    license plates. The captured data is then converted into
                    readable alphanumeric characters, which can be used to
                    classify the vehicle, such as distinguishing between
                    passenger cars, trucks, or buses. This data is recorded and
                    can be used for future analysis and verification. The use of
                    Classification LPR technology enhances traffic management
                    and access control in various areas such as parking
                    facilities, service stations, or restricted zones.
                    Classifying vehicles helps optimize resource management and
                    reduces the risk of improper use of restricted spaces.
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
                  <h2>Advance Traffic Management System</h2>
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
                    Advance Traffic Management System (ATMS) is an information
                    system designed to manage and control traffic on expressways
                    with the primary goal of enhancing safety and reducing
                    congestion or accidents. The system is implemented to
                    provide a safe travel environment for users of expressways.
                    ATMS integrates various technologies such as CCTV cameras,
                    vehicle detection sensors, alert systems, and digital signs
                    to communicate real-time traffic information. This includes
                    warnings about accidents, weather conditions affecting
                    driving, or congestion. The system enables traffic control
                    agencies to monitor traffic conditions in real-time,
                    allowing them to make quick and effective decisions when
                    responding to incidents. Additionally, ATMS collects traffic
                    data for analysis, which can be used to improve future
                    traffic management and infrastructure development. By
                    studying traffic flow and patterns at different times, ATMS
                    helps optimize traffic control strategies and adapt to
                    changing conditions. Overall, the ATMS is a vital tool in
                    ensuring safety and improving the driving experience on
                    expressways. It helps make long-distance travel safer and
                    more efficient for drivers while contributing to better
                    traffic management and infrastructure planning.
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
                  <h2>Image Processing Detector System</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src={ImageProcessingDetectorSystem}
                    alt=""
                  />

                  <p>
                    Image Processing Detector System is a technology that uses
                    image processing to count the number of vehicles, measure
                    their speed, and classify the vehicles based on their size
                    as they pass through expressways. The system works by
                    utilizing cameras and sensors installed at various points
                    along the road to capture and process data from vehicles.
                    This system can detect all types of vehicles, whether
                    personal cars, trucks, or buses, and accurately measure
                    their speed in real-time. By processing images from
                    high-resolution cameras, the system can classify the
                    vehicles according to their size and characteristics and
                    measure their speed, comparing it with the set speed limits.
                    The use of the Image Processing Detector System enables
                    efficient traffic monitoring and control. It helps to detect
                    speeding vehicles or those violating traffic regulations in
                    real-time, enhancing road safety and ensuring compliance
                    with traffic rules on expressways. Additionally, the system
                    can be used to analyze traffic data, which can aid in
                    improving traffic management and future infrastructure
                    development.
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
                  <h2>Matrix Sign</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src={MatrixSign}
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src="/public/images/Project/CCTV Service Area/งานติดตั้งตู้ควบคุม กม.21 สาย7 ขาออก_๒๑๐๙๐๗_1.jpg"
                    alt=""
                  />
                  <p>
                    Matrix Sign is a digital sign used to display various
                    symbols and messages along roadways to alert drivers about
                    specific situations. These signs are crucial for informing
                    road users about traffic conditions, such as lane closures,
                    speed limits, or road surface repairs. They help ensure safe
                    and efficient driving by providing real-time updates to
                    drivers. The Matrix Sign system enhances communication
                    between traffic control authorities and road users, allowing
                    for the display of critical information like temporary lane
                    closures, speed restrictions, or ongoing road maintenance.
                    These signs are updated in real-time, enabling drivers to
                    adjust their driving behaviors accordingly for safety and
                    compliance with road conditions. Matrix signs are also
                    useful for managing traffic during special events or
                    high-traffic periods. They can display temporary speed
                    limits or warnings related to changes in traffic patterns,
                    ensuring that drivers are prepared for any disruptions on
                    the road. Installing and using Matrix Signs on roadways is
                    an essential tool in improving safety and managing traffic
                    effectively, allowing drivers to travel with greater
                    awareness and confidence.
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
                  <h2>Radio Communication System</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src={RadioCommunicationSystem}
                    alt=""
                  />

                  <p>
                    Radio Communication System is designed to provide reliable
                    telecommunications and radio communication services to
                    ensure smooth and safe operations in various environments.
                    This system facilitates effective communication, enabling
                    fast and secure coordination between team members or
                    departments, even in challenging working conditions. The
                    Radio Communication System ensures seamless communication
                    across different operational settings, such as airports,
                    large buildings, factories, or high-security tasks. It
                    operates efficiently in various environments, whether
                    indoors or outdoors, and is not affected by weather
                    conditions or terrain. This reliability ensures continuous,
                    uninterrupted communication between personnel, especially in
                    critical situations that require immediate response.
                    Furthermore, the system enhances safety during operations by
                    allowing quick communication in emergencies, enabling fast
                    decision-making and response to incidents. The ability to
                    communicate instantly can be crucial for ensuring safety and
                    avoiding delays in time-sensitive scenarios. Overall, the
                    Radio Communication System is an essential tool for
                    guaranteeing both operational efficiency and safety. With
                    its versatile application in all environments, it ensures
                    smooth coordination and effective communication, helping
                    teams perform their tasks safely and efficiently.
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
                  <h2>Clock System</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src={ClockSystem}
                    alt=""
                  />

                  <p>
                    Clock System is a system designed to control and synchronize
                    all clocks connected within the network, ensuring that each
                    clock displays the same accurate time. This system is
                    essential in environments where precise time coordination is
                    crucial, such as factories, telecommunications stations,
                    hospitals, and organizations where multiple teams need to
                    work in sync with exact timing. The Clock System ensures
                    that all clocks, whether located indoors or outdoors, show
                    the same time, reducing confusion and ensuring smooth
                    operations within the organization. This synchronization
                    eliminates the need for individuals to check multiple time
                    sources, thus improving efficiency and accuracy in
                    time-sensitive tasks. The system is highly accurate and is
                    typically connected to reliable time references, such as GPS
                    signals or globally accepted time standards, to ensure the
                    time displayed is precise. By using these sources, the Clock
                    System ensures that time synchronization remains consistent
                    and correct across the entire network. Overall, the Clock
                    System is a vital tool for time management and coordination
                    in various organizations, especially for operations that
                    require precise and uniform timing for effective
                    collaboration and seamless workflow.
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
                  <h2>MultiLane Free Flow System</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src="/public/images/Project/CCTV Service Area/LINE_ALBUM_SERVICE AREAS Sta.48+000 R M.7_๒๓๐๖๐๖_18.jpg"
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={MultiLaneFreeFlowSystem}
                    alt=""
                  />
                  <p>
                    Multi Lane Free Flow System is an automated toll collection
                    system designed to allow vehicles to pass through multiple
                    toll lanes without the need to slow down or stop. This
                    system eliminates the need for drivers to reduce speed or
                    stop at toll booths, significantly reducing traffic
                    congestion, especially in areas with high vehicle volume,
                    such as toll plazas. With the Multi Lane Free Flow System,
                    vehicles can smoothly pass through the toll collection area
                    without waiting to make payments, using technologies like
                    License Plate Recognition (LPR), RFID cards, or mobile
                    payment apps. This enables a seamless toll collection
                    process and speeds up the flow of traffic. The benefits of
                    the Multi Lane Free Flow System include reducing traffic
                    bottlenecks at toll plazas, minimizing travel time for
                    drivers, and improving the efficiency of traffic management
                    in high-traffic areas. This system ensures that vehicles can
                    continue their journey without unnecessary delays, leading
                    to a more efficient and pleasant driving experience.
                    Overall, the Multi Lane Free Flow System is an essential
                    tool for improving transportation efficiency, particularly
                    in areas with high toll traffic, allowing for faster and
                    more convenient travel.
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
                  <h2>ElectricalOnTheRoad</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src="/public/images/Project/CCTV Service Area/LINE_ALBUM_SERVICE AREAS Sta.48+000 R M.7_๒๓๐๖๐๖_18.jpg"
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={ElectricalOnTheRoad}
                    alt=""
                  />
                  <p>
                    Electrical On The Road refers to the installation and
                    maintenance of electrical systems on expressways, including
                    road lighting, tunnel lighting systems, digital signboards,
                    and other related electrical equipment. These systems play a
                    vital role in enhancing safety on the roads, ensuring that
                    drivers can travel safely and comfortably during the night
                    or in adverse weather conditions. The Electrical On The Road
                    work on expressways involves setting up electrical networks
                    that power various systems, such as street lights that
                    illuminate the road for better visibility at night, lighting
                    in tunnels for safety, and electrical systems that support
                    traffic signs and signals. All of these systems must be
                    designed for durability and functionality in all
                    environmental conditions. Additionally, this work includes
                    the regular maintenance and safety checks of these
                    electrical systems to ensure they are functioning optimally,
                    preventing any issues that could affect the safety of road
                    users. Overall, Electrical On The Road is a crucial part of
                    building and maintaining infrastructure that ensures safe
                    and reliable travel on expressways. The effective use of
                    electrical systems makes both daytime and nighttime travel
                    more convenient and secure.
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
                  <h2>Water Level Measurement System</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src="/public/images/Project/CCTV Service Area/LINE_ALBUM_SERVICE AREAS Sta.48+000 R M.7_๒๓๐๖๐๖_18.jpg"
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={WaterLevelMeasurementSystem}
                    alt=""
                  />
                  <p>
                    Water Level Measurement System is a system used to monitor
                    and measure water levels in various water bodies, such as
                    rivers, reservoirs, canals, or flood-prone areas. Measuring
                    water levels is crucial for water resource management, flood
                    forecasting, and controlling water usage in industries or
                    agriculture. This system utilizes various technologies such
                    as pressure sensors, ultrasonic sensors, and electrical
                    measurement techniques to provide accurate water level
                    readings. Sensors are installed at critical points, and the
                    data collected is transmitted to control centers or display
                    units, enabling real-time monitoring. The use of a Water
                    Level Measurement System enhances the effectiveness of
                    monitoring water conditions, reducing the risk of flooding,
                    and facilitating informed decision-making in water
                    management. It also aids in forecasting and preventing
                    flood-related disasters by issuing warnings when water
                    levels approach critical thresholds. Overall, this system is
                    an essential tool for managing water resources and ensuring
                    safety in areas vulnerable to flooding. It allows for
                    proactive measures based on accurate and timely water level
                    data.
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
                  <h2>CAT Telecom Node</h2>
                  <p className="item-intro text-muted">value 9,999,999 bath</p>
                  <img
                    className="img-responsive-item"
                    src="/public/images/Project/CCTV Service Area/LINE_ALBUM_SERVICE AREAS Sta.48+000 R M.7_๒๓๐๖๐๖_18.jpg"
                    alt=""
                  />
                  <img
                    className="img-responsive-item"
                    src={CATTelecomNode}
                    alt=""
                  />
                  <p>
                    CAT Telecom Node refers to the design and installation of
                    nodes that provide complete communication services. This
                    includes infrastructure work such as civil engineering, the
                    installation of air conditioning systems within the node,
                    electrical systems (both AC and DC), the installation of
                    Main Distribution Frames (MDF), and cable management, along
                    with network testing for private GSM-R communication
                    systems. This system plays a crucial role in ensuring
                    efficient and reliable communication services for various
                    applications, including telecommunications, data
                    transmission, and communication within businesses or
                    organizations. The CAT Telecom Node installation process
                    covers several key aspects, starting with the civil
                    engineering work involved in building or setting up the
                    physical location for the node. This also includes the
                    installation of air conditioning systems to maintain an
                    optimal working environment for the equipment, as well as
                    electrical installations that support both AC and DC power
                    requirements. Additionally, the installation of MDF (Main
                    Distribution Frame) is a critical component in organizing
                    and distributing signals within the network. Proper cable
                    management ensures smooth data transmission and helps
                    simplify maintenance and system management tasks. Another
                    vital part of the CAT Telecom Node installation is the
                    testing of GSM-R (Global System for Mobile Communications –
                    Railway) private communication networks. This system is
                    particularly important for railway communication, ensuring
                    seamless and secure communication between operators and
                    service users, which is essential for the safety and
                    efficiency of railway operations. In conclusion, the CAT
                    Telecom Node is an essential component in the development of
                    modern and efficient communication infrastructure. It
                    supports various industries and businesses by ensuring
                    reliable communication services, optimized system
                    performance, and safety in critical applications like
                    railway operations.
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

export default ProjectUsItem;
