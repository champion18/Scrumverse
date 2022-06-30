import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="outer">
      <div className="inner">
        <div className="upperflex">
          <div className="logo">
            <h2>Logo</h2>
            <p>
              We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididun.
            </p>

            <div className="contactus">
              <div className="contactus1">
                <button className="bgicon">
                  <i className="phone"></i>
                </button>

                {/* <div className="bgicon">
                <span className="phone"></span>
              </div> */}
                <div className="text">
                  <p>Have a question?</p>
                  <span>310-437-2766</span>
                </div>
              </div>

              <div className="contactus1">
                <button className="bgicon">
                  <i className="mail"></i>
                </button>
                <div className="text">
                  <p>Contact us at</p>
                  <span>unreal@outlook.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="newsletter">
            <h2>Newsletter</h2>
            <p>
              Be the first one to know about discounts, offers and events weekly
              in your mailbox. Unsubscribe whenever you like with one click.
            </p>
            <form action="">
              <i className="mail"></i>
              <input type="text" placeholder="Enter your email"></input>
              <input type="submit" value="Submit"></input>
            </form>
          </div>
        </div>
        <div className="lowerflex">
          <div className="lowerUp">
            <a href="#">About Us</a>

            <a href="#">Jobs</a>

            <a href="#">Blog</a>

            <a href="#">Press</a>

            <a href="#">FAQ</a>

            <a href="#">Careers</a>

            <a href="#">Contact</a>

            <a href="#">Privacy Policy</a>

            <a href="#">Sitemap</a>

            <a href="#">Terms of Use</a>
          </div>
          <div className="lowerDown">
            <div className="lowerDownIcons">
              <button className="bgicon">
                <i className="i1"></i>
              </button>
              <button className="bgicon">
                <i className="i2"></i>
              </button>
              <button className="bgicon">
                <i className="i3"></i>
              </button>
              <button className="bgicon">
                <i className="i4"></i>
              </button>
              <button className="bgicon">
                <i className="i5"></i>
              </button>
            </div>
            <p>© 2000-2021, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
