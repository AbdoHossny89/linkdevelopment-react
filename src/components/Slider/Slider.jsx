import React, { Component } from "react";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import slides from "../../api/slides.json";

function HomeBanner() {
  const [nav1, setNav1] = React.useState(null);
  const [nav2, setNav2] = React.useState(null);
  let slider1 = [];
  let slider2 = [];

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    fade: !0,
    cssEase: "easeOut",

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    arrows: false,
  };
  return (
    <section className="home_banner">
      <Slider
        asNavFor={nav2}
        ref={(slider) => (slider1 = slider)}
        {...settings}
        className="banner_slider slider"
      >
        {slides.slides.map(function (slide, id) {
          return (
            <div key={slide.id}>
              <div className="slide" >
                <div className="container-xl">
                  <div className="wrap-slide">
                    <div className="decore"></div>

                    <div className="left-section">
                      <h5>{slide.category}</h5>
                      <h2>{slide.title}</h2>
                      <p>{slide.brief}</p>
                      <div className="slide-action">
                        <button className="btn btn-sm btn-orange me-5">
                          Find out more
                        </button>
                        <a href={slide.videoUrl} className="btn-play">
                          <svg
                            id="Play_button"
                            data-name="Play button"
                            xmlns="http://www.w3.org/2000/svg"
                            width="52"
                            height="52"
                            viewBox="0 0 52 52"
                          >
                            <circle
                              id="Ellipse_8"
                              data-name="Ellipse 8"
                              cx="26"
                              cy="26"
                              r="26"
                              fill="#e72228"
                            />
                            <path
                              id="Polygon_1"
                              data-name="Polygon 1"
                              d="M7.5,0,15,15H0Z"
                              transform="translate(34 20) rotate(90)"
                              fill="#fff"
                            />
                          </svg>
                          Play Demo
                        </a>
                      </div>
                    </div>

                    <div className="img-slide">
                      <div>
                        <img src={slide.imgUrl} alt="slide" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="dots-slide w-100">
        <div className="dots-slide w-100">
          <div className="container-xl">
            <div className="col-md-4 col-lg-3">
              <Slider
                asNavFor={nav1}
                ref={(slider) => (slider2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                className="slider-nav"
              >
                <div className="lnk lnk-slide1"></div>
                <div className="lnk lnk-slide2"></div>
                <div className="lnk lnk-slide3"></div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomeBanner;
