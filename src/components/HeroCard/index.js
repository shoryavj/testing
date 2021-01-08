import React from "react";
import { Row, Col } from "antd";
import icon1 from "../../assets/images/icon1.svg";
import icon2 from "../../assets/images/icon2.svg";
import icon3 from "../../assets/images/icon3.svg";
import icon4 from "../../assets/images/icon4.svg";

function HeroCard() {
  return (
    <>
      <Col span={20} offset={2}>
        <div className="heroSubjectWrapper">
          <Row>
            <Col span={6} lg={6} sm={12} xs={12}>
              <div className="heroSubject">
                <img src={icon1} alt="icon" />
                <h4>456</h4>
                <p>Likes everyday</p>
              </div>
            </Col>
            <Col  span={6} lg={6} sm={12} xs={12}>
              <div className="heroSubject">
                <img src={icon2} alt="icon" />
                <h4>745</h4>
                <p>Online Events</p>
              </div>
            </Col>
            <Col span={6} lg={6} sm={12} xs={12}>
              <div className="heroSubject">
                <img src={icon3} alt="icon" />
                <h4>+10K</h4>
                <p>Users</p>
              </div>
            </Col>
            <Col span={6} lg={6} sm={12} xs={12}>
              <div className="heroSubject">
                <img src={icon4} alt="icon" />
                <h4>+2K</h4>
                <p>Likes everyday</p>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
}

export default HeroCard;
