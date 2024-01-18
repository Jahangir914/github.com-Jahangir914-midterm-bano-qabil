import React from "react";
import services from "../assets/services.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${services})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>

          Quick Shine is a dedicated car detailing business that stands out for its commitment to providing top-notch services that leave vehicles gleaming with a polished finish. With a focus on attention to detail, Quick Shine employs skilled professionals who utilize cutting-edge techniques and high-quality products to restore and enhance the aesthetic appeal of each vehicle. From meticulous exterior cleaning and paint correction to interior detailing that ensures a fresh and pristine atmosphere, Quick Shine goes beyond conventional car care. The business prides itself on customer satisfaction, aiming to exceed expectations with every service, making them a go-to choice for those seeking a comprehensive and exceptional car detailing experience.
        </p>
      </div>
    </div>
  );
}

export default About;
