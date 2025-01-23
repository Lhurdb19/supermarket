import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "../../Spinner/Logo";

export default function Footer() {
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
            <div className="more-card">
              <div className="stex-box">
                <Link>
                  <img
                    src="https://www.stex-gmbh.com/wp-content/uploads/2023/09/landingpage_hero_v3-1024x597.png"
                    alt=""
                  />
                  <h4>STEX</h4>
                </Link>
              </div>
              <div className="email-box">
                <Link>
                  <img
                    src="https://www.differencebetween.net/wp-content/uploads/2018/04/Difference-Between-Email-and-Gmail.png"
                    alt=""
                  />{" "}
                  <h4>EMAIL</h4>
                </Link>
              </div>
              <div className="jumia-box">
                <Link>
                  {" "}
                  <img
                    src="https://play-lh.googleusercontent.com/K02ShY9ODJ9xGxXVqYKbDUOXczHHdKUnE9YRyurDdPkXe_THCWy-Fpo417seGIsMchA"
                    alt=""
                  />{" "}
                  <h4>JUMIA</h4>{" "}
                </Link>
              </div>
              <div className="konga-box">
                <Link>
                  {" "}
                  <img
                    src="https://blog.konga.com/wp-content/uploads/2023/04/Konga-logo.jpeg"
                    alt=""
                  />{" "}
                  <h4>KONGA</h4>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="more-partner">
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
              src="https://www.paypalobjects.com/marketing/web23/us/en/ppe/manage-your-money/split-section-2-size-all-v1.jpg"
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

          <div className="contact-info">
            <Link>
              {" "}
              <img
                src="https://w7.pngwing.com/pngs/826/632/png-transparent-facebook-meta-facebook-logo-facebook-meta-social-media-app-3d-icon-thumbnail.png"
                alt=""
                style={{ width: "27px", height: "27px" }}
              />
            </Link>
            <Link>
              {" "}
              <img
                src="https://img.freepik.com/free-psd/instagram-application-logo_23-2151544090.jpg"
                alt=""
                style={{ width: "35px", height: "30px" }}
              />
            </Link>
            <Link>
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/480px-X_logo.jpg"
                alt=""
              />
            </Link>
            <Link>
              {" "}
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a3/9e/db/a39edb47-3949-583f-d019-14c02e13a96a/AppIconSMB-0-0-1x_U007ephone-0-0-0-1-0-0-sRGB-0-85-220.png/1200x630wa.png"
                alt=""
                style={{ width: "30px", height: "30px" }}
              />
            </Link>
            <Link>
              {" "}
              <img
                src="https://banner2.cleanpng.com/20180417/ihq/kisspng-snapchat-spectacles-snap-inc-messaging-apps-snapchat-5ad58b2fc12b33.7758125015239442397912.jpg"
                alt=""
                style={{ width: "30px", height: "30px" }}
              />
            </Link>
            <Link>
              {" "}
              <img
                src="https://e7.pngegg.com/pngimages/545/550/png-clipart-tik-tok-icon-circle-tech-companies.png"
                alt=""
                style={{ width: "23px", height: "23px" }}
              />
            </Link>
            <Link>
              {" "}
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-linkedin-circle-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-1583140.png?f=webp&w=256"
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
            </Link>
            <Link>
              {" "}
              <img
                src="https://bitperfect.at/assets/blog-images/Headerbild-Was-ist-GitHub-v2.png"
                alt=""
                style={{ width: "26px", height: "26px" }}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-box">
        <footer>
          &copy;2025 | <Link to={"/"}>HejiDev</Link> | All Right Reserved. |
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
