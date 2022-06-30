import React from "react";
import Card from "../Card/Card";
import Section3 from "../Section3/Section3.js";
import Section4 from "../Section4/Section4.js";
import "./Home.css";
// import pic from "../../imgs/";

export default function Home() {
  return (
    <div className="body">
      <div className="homeOuter">
        <div className="home">
          <div className="left">
            <div className="upper">
              <div className="first">
                <p>#MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY</p>
              </div>
              <div className="second">
                <p>Unleash Your SCRUM Skills, Grab More Attention To Résumé</p>
              </div>

              <a className="borders" href="/">
                ENROLL NOW
              </a>
            </div>

            <div className="lower">
              <p>
                <span>10% OFF on all courses* |</span> Offer Valid For
              </p>
              <div className="borderBottom"></div>
              <div className="timerOuter">
                <div className="clock">
                  <div className="digit">
                    02<p>Hrs.</p>
                  </div>
                </div>
                <div className="clock">
                  <div className="digit">
                    58<p>Mins.</p>
                  </div>
                </div>
                <div className="clock">
                  <div className="digit">
                    42<p>Secs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="img-1"></div>
            <div className="img-2"></div>
            <div className="img-3"></div>
            <div className="img-4"></div>
          </div>
        </div>
        <div className="section2">
          <div className="caption">
            <p className="text1">A broad range of courses </p>
            <p className="text2">
              Choose from 100+ online video courses with new additions published
              every month
            </p>
          </div>
          <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="section3">
          <Section3 />
        </div>
        <div className="section4">
          <Section4 />
        </div>
      </div>
    </div>
  );
}
