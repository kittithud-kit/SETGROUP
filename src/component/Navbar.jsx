import "./Navbar.css";
import React, { useEffect, useRef } from "react";
import logo from "/src/assets/images/logo.png";

import profileth from "../assets/images/Project/Profile/COMPANY PROFILE_V.ภาษาไทย.pdf";
import profileen from "../assets/images/Project/Profile/COMPANY PROFILE_English version.pdf";

const PageNavbar = () => {
  useEffect(() => {
    const $ = window.jQuery;

    // Smooth scrolling using jQuery
    $(function () {
      $("a.page-scroll").bind("click", function (event) {
        var $anchor = $(this);
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $($anchor.attr("href")).offset().top,
            },
            1500,
            "easeInOutExpo"
          );
        event.preventDefault();
      });
    });

    // Highlight the top nav as scrolling occurs
    $("body").scrollspy({
      target: ".navbar-fixed-top",
    });

    // Closes the Responsive Menu on Menu Item Click
    $(".navbar-collapse ul li a").click(function () {
      $(".navbar-toggle:visible").click();
    });
  }, []);
  return (
    <nav className="navbar navbar-default navbar-fixed-top navbar-shrink">
      <div className="container">
        <div className="navbar-header page-scroll ">
          {/* Responsive Hamburger */}
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1 "
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="page-scroll" href="#page-top">
            <img className="imglogo page-scroll " src={logo} alt="Logo" />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/* <li className="hidden active">
              <a href="#page-top"></a>
            </li> */}
            <li>
              <a className="page-scroll" href="#page-top">
                Home
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#portfolio">
                Project
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#team">
                CLIENTS
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#contact">
                Contact
              </a>
            </li>

            <spen className="spenprofile">
              <a className="separator">|</a>
              <a className="pageprofile" href={profileth} target="_blank">
                Profile TH /
              </a>
              <a className="pageprofile" href={profileen} target="_blank">
                EN
              </a>
            </spen>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default PageNavbar;
