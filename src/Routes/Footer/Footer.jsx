import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import "./Footer.css";
import Logo from "../../Spinner/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();


  return (
    <>
      <div className="footer-component">
        <div className="footer-card">
          <div className="help-container">
            <div className="help-box">
              <h2>HELP</h2>
              <Link>Delivery Information</Link>
              <Link>Make A Return</Link>
              <Link>Order</Link>
              <Link>Return Policy</Link>
              <Link>FAQ</Link>
            </div>
            <div className="account-box">
              <h2>MY ACCOUNT</h2>
              <Link>Login</Link>
              <Link>Register</Link>
            </div>
            <div className="page-box">
              <h2>PAGES</h2>
              <Link>About Us</Link>
              <Link>Shop</Link>
              <Link>Best Deal</Link>
              <Link>Beveragies</Link>
            </div>
          </div>
          <div className="more-container">
            <h2>PARTNER WITH:</h2>
            <div className="more-partner">
              <div className="more-card">
                <div className="stex-box">
                  <Link to='https://www.smarttransexpress.com/' target="_blank">
                    <img
                      src="https://www.stex-gmbh.com/wp-content/uploads/2023/09/landingpage_hero_v3-1024x597.png"
                      alt=""
                    />
                    <h4>STEX</h4>
                  </Link>
                </div>
                <div className="email-box">
                  <Link to='https://mailto/haryomidey15@gmail.com' target="_blank">
                    <img
                      src="https://www.differencebetween.net/wp-content/uploads/2018/04/Difference-Between-Email-and-Gmail.png"
                      alt=""
                    />{" "}
                    <h4>EMAIL</h4>
                  </Link>
                </div>
                <div className="jumia-box">
                  <Link to={'https://www.jumia.com.ng/'} target="_blank">
                    {" "}
                    <img
                      src="https://play-lh.googleusercontent.com/K02ShY9ODJ9xGxXVqYKbDUOXczHHdKUnE9YRyurDdPkXe_THCWy-Fpo417seGIsMchA"
                      alt=""
                    />
                    <h4>JUMIA</h4>
                  </Link>
                </div>
                <div className="konga-box">
                  <Link to='https://www.konga.com/' target="_blank">
                    {" "}
                    <img
                      src="https://blog.konga.com/wp-content/uploads/2023/04/Konga-logo.jpeg"
                      alt=""
                    />{" "}
                    <h4>KONGA</h4>{" "}
                  </Link>
                </div>
              </div>
              <div className="contact-info">
                <Link to='/https://facebook/ejiwumihabiodun' target="_blank">
                  <FaFacebook className="icons" style={{ color: "blue" }} />
                </Link>
                <Link  target="_blank">
                  <FaInstagram className="icons" style={{ color: "purple" }} />
                </Link>

                <Link to='https://twitter.com/hejidev' target="_blank">
                  <FaTwitter className="icons" style={{ color: "black" }} />
                </Link>

                <Link to='https://wa.me/08130693571' target="_blank">
                  <FaWhatsapp
                    className="icons" style={{ color: "lightgreen" }} />
                </Link>

                <Link href="https://t.me/hejidev" target="_blank">
                  <FaTelegramPlane className="icons" style={{ color: "skyblue" }}/>
                </Link>

                <Link  target="_blank">
                  <FaLinkedinIn className="icons" style={{ color: "blue" }} />
                </Link>

                <Link to='https://www.tiktok.com/@lhurdb19' target="_blank">
                  <FaTiktok className="icons" style={{ color: "black" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="partner-container">
          <h2>PAYMENT METHODS :</h2>
        <div className="partner-card">
          <img
            src="https://www.neopay.co.uk/wp-content/uploads/2022/01/Visa-website.png"
            alt=""
          />
          <img
            src="https://cdn.punchng.com/wp-content/uploads/2016/09/09143426/mastercard-e1473428077657.gif"
            alt=""
            />

          <img
            src="https://w7.pngwing.com/pngs/385/158/png-transparent-apple-card-credit-logo-logos-pay-logos-and-brands-icon.png"
            alt=""
            />
          <img
            src="https://eliteextra.com/wp-content/uploads/2022/02/AdobeStock_213427437-scaled.jpeg"
            alt=""
            />
          <img
            src="https://eventespresso.com/wp-content/uploads/2018/07/bank-transfer-payment-method-620x388.jpg"
            alt=""
            />
          <img
            src="https://hook.ng/wp-content/uploads/2022/05/Golden-Gift-Card-e1653736024101.jpeg"
            alt=""
            />
        </div>
      </div>
      </div>

      <div className="footer-box">
        <footer>
        &copy;{currentYear} | <Link to={"/"}>HejiDev</Link> | All Right Reserved. |
          Nigeria Ltd.
        </footer>
        <div className="box">
          <h5>
            Terms & Conditions: <Link>Term of Use </Link>{" "}
            <Link>Privacy Notice</Link> <Link>Cookie Policy</Link>{" "}
          </h5>
        </div>
      </div>
    </>
  );
}
