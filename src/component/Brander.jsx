import React from "react";
import Flickity from "react-flickity-component";
import "./Brander.scss";

import logodoh from "/src/assets/images/AboutUs/logo-doh.png";
import logohww from "/src/assets/images/AboutUs/logo-hww.png";
import logomtw from "/src/assets/images/AboutUs/logo-mtw.png";
import logopolice from "/src/assets/images/AboutUs/logo-police.png";
import logowater from "/src/assets/images/AboutUs/logo-water.png";
import logotrain from "/src/assets/images/AboutUs/logo-train.png";
import logobbl from "/src/assets/images/AboutUs/logo-bbl.png";
import logobjc from "/src/assets/images/AboutUs/logo-bjc.png";
import logocholpathan from "/src/assets/images/AboutUs/logo-cholpathan.png";
import logoexat from "/src/assets/images/AboutUs/logo-exat.png";
import logomajor from "/src/assets/images/AboutUs/logo-major.png";
import logont from "/src/assets/images/AboutUs/logo-nt.png";

const PageBrandSlider = () => {
  const flickityOptions = {
    contain: true,
    pageDots: false,
    wrapAround: true,
    freeScroll: true,
    autoPlay: 1600,
  };

  return (
    <div>
      <div className="brander-text">
        <h2>CLIENTS</h2>
      </div>
      <div className="brands-wrap">
        <Flickity className={"brand-carousel"} options={flickityOptions}>
          <div className="gallery-cell">
            <img src={logodoh} alt="กรมทางหลวง" />
          </div>
          <div className="gallery-cell">
            <img src={logohww} alt="สำนักงานควบคุมน้ำหนักยานพาหนะ" />
          </div>
          <div className="gallery-cell">
            <img src={logomtw} alt="มอเตอร์เวย์" />
          </div>
          <div className="gallery-cell">
            <img src={logopolice} alt="การตำรวจภาค7" />
          </div>
          <div className="gallery-cell">
            <img src={logowater} alt="การปะปา" />
          </div>
          <div className="gallery-cell">
            <img src={logotrain} alt="การรถไฟ" />
          </div>
          <div className="gallery-cell">
            <img src={logobbl} alt="" />
          </div>
          <div className="gallery-cell">
            <img src={logobjc} alt="" />
          </div>

          <div className="gallery-cell">
            <img src={logocholpathan} alt="" />
          </div>
          <div className="gallery-cell">
            <img src={logoexat} alt="" />
          </div>
          <div className="gallery-cell">
            <img src={logomajor} alt="" />
          </div>
          <div className="gallery-cell">
            <img src={logont} alt="" />
          </div>
        </Flickity>
      </div>
    </div>
  );
};

export default PageBrandSlider;
