import React from "react";
import { Row, Col } from "antd";
import Img1 from "../../assets/images/Img1.png";
import Ellipse20 from "../../assets/images/Ellipse20.svg";
import Ellipse21 from "../../assets/images/Ellipse21.svg";

function About() {
  return (
    <>
      <div className="aboutWrapper">
        <Row>
          <Col span={22} offset={1}>
            <div className="aboutInnerWrapper">
              <Col span={20} offset={2}>
                <Row gutter={16}>
                  <Col span={12} lg={12} sm={24} xs={24}>
                    <div className="aboutContentWrapper">
                      <h2 className="titleHeader">About Us</h2>
                      <p>
                        Homejam is better than a backstage pass and cheaper than
                        most concerts. It’s your opportunity for intimate
                        performances with your favorite artists and an exclusive
                        chance to interact with the stars. Hosted on
                        cutting-edge technology, Homejam delivers a virtual
                        concert like you’ve never experienced before.
                      </p>
                      <div className="circleWrapper">
                        <img src={Ellipse20} alt="Ellipse" />
                        <img
                          src={Ellipse21}
                          alt="Ellipse"
                          className="ellipse21"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col span={12} lg={12} sm={24} xs={24}>
                    <div className="aboutUImgwrapper">
                      <Col span={24}>
                        <Row gutter={16}>
                          <Col span={12} gutt>
                            <div className="imgWrapper">
                              <img src={Img1} alt="Img" />
                            </div>
                          </Col>
                          <Col span={12} gutt>
                            <div className="imgWrapper second">
                              <img src={Img1} alt="Img" />
                            </div>
                          </Col>
                          <Col span={12} gutt>
                            <div className="imgWrapper">
                              <img src={Img1} alt="Img" />
                            </div>
                          </Col>
                          <Col span={12} gutt>
                            <div className="imgWrapper second">
                              <img src={Img1} alt="Img" />
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </div>
                  </Col>
                </Row>
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default About;
