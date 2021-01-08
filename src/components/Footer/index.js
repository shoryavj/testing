import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import footerLogo from "../../assets/images/footerLogo.png";
import s1 from "../../assets/images/s1.svg";
import s2 from "../../assets/images/s2.svg";
import s3 from "../../assets/images/s3.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <Row>
          <Col span={20} offset={2}>
            <Row>
              <Col span={6} lg={6} sm={24} xs={24}>
                <div className="leftWrrap">
                  <Link>
                    <img src={footerLogo} alt="logo" />
                  </Link>
                  <ul className="socialNavList">
                    <li>
                      <Link>
                        <img src={s1} alt="icon" />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img src={s2} alt="icon" />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img src={s3} alt="icon" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col span={16} lg={14} sm={24} xs={24}>
                <div className="footerNav">
                  <ul className="navList">
                    <h5>Follow Us</h5>
                    <li>
                      <Link>Facebook</Link>
                    </li>
                    <li>
                      <Link>Instagram</Link>
                    </li>
                    <li>
                      <Link>Twitter</Link>
                    </li>
                  </ul>
                  <ul className="navList">
                    <h5>Book</h5>
                    <li>
                      <Link>All Artists</Link>
                    </li>
                    <li>
                      <Link>Sessions</Link>
                    </li>
                    <li>
                      <Link>Premium</Link>
                    </li>
                    <li>
                      <Link>VIP Room</Link>
                    </li>
                  </ul>
                  <ul className="navList">
                    <h5>Company</h5>
                    <li>
                      <Link>About</Link>
                    </li>
                    <li>
                      <Link>Support</Link>
                    </li>
                    <li>
                      <Link>Contact Us</Link>
                    </li>
                    <li>
                      <Link>Review</Link>
                    </li>
                  </ul>
                  <ul className="navList">
                    <h5>Cart</h5>
                    <li>
                      <Link>About</Link>
                    </li>
                    <li>
                      <Link>Support</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col span={2} lg={4} sm={24} xs={24}>
                <div className="righttWrap">
                  <Button type="primary" htmlType="submit" className="fillBtn">
                    Sign Up
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    </>
  );
}

export default Footer;
