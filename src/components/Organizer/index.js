import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import Img7 from "../../assets/images/Img7.png";
import arrow from "../../assets/images/arrow.png";
import vou from "../../assets/images/vou.svg";

function Organizer() {
  return (
    <>
      <div className="organizeWrapper">
        <Row>
          <Col span={20} offset={2}>
            <div className="headerWithRBtn">
              <h2 className="titleHeader">Upcoming Shows</h2>
              <Link className="linkTextBtn">View All</Link>
            </div>
          </Col>
          <Col span={20} offset={2}>
            <Row gutter={32}>
              <Col span={6} xl={6} md={12} sm={24} xs={24}>
                <div className="organizerCard">
                  <div className="cardImg">
                    <img src={Img7} alt="user" />
                  </div>
                  <div className="cardContent">
                    <span className="designation">Folk</span>
                    <h3>Benny Dayal</h3>
                    <div className="linksWrap">
                      <Link className="moreBtn">
                        More Info <img src={arrow} alt="arrow" />
                      </Link>
                      <button className="iconBtn">
                        <img src={vou} alt="vou" />
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={6} xl={6} md={12} sm={24} xs={24}>
                <div className="organizerCard">
                  <div className="cardImg">
                    <img src={Img7} alt="user" />
                  </div>
                  <div className="cardContent">
                    <span className="designation">Folk</span>
                    <h3>Benny Dayal</h3>
                    <div className="linksWrap">
                      <Link className="moreBtn">
                        More Info <img src={arrow} alt="arrow" />
                      </Link>
                      <button className="iconBtn">
                        <img src={vou} alt="vou" />
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={6} xl={6} md={12} sm={24} xs={24}>
                <div className="organizerCard">
                  <div className="cardImg">
                    <img src={Img7} alt="user" />
                  </div>
                  <div className="cardContent">
                    <span className="designation">Folk</span>
                    <h3>Benny Dayal</h3>
                    <div className="linksWrap">
                      <Link className="moreBtn">
                        More Info <img src={arrow} alt="arrow" />
                      </Link>
                      <button className="iconBtn">
                        <img src={vou} alt="vou" />
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={6} xl={6} md={12} sm={24} xs={24}>
                <div className="organizerCard">
                  <div className="cardImg">
                    <img src={Img7} alt="user" />
                  </div>
                  <div className="cardContent">
                    <span className="designation">Folk</span>
                    <h3>Benny Dayal</h3>
                    <div className="linksWrap">
                      <Link className="moreBtn">
                        More Info <img src={arrow} alt="arrow" />
                      </Link>
                      <button className="iconBtn">
                        <img src={vou} alt="vou" />
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Organizer;
