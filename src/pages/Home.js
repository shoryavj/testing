import React from "react";
import { Row, Col } from "antd";
import PromoHeader from "../components/Header/PromoHeader";
import HeroCard from "../components/HeroCard";
import Header from "../components/Header";
import Organizer from "../components/Organizer";
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <PromoHeader />
      <div className="heroBanner">
        <Header />
        <Row>
          <Col span={20} offset={2}>
            <div className="heroContent">
              <h1>Cari Cari</h1>
              <p>
                Live from their sofa to yours. Get closer to
                <br /> your favorite artists, and never miss out.
              </p>
            </div>
          </Col>
          <HeroCard />
        </Row>
      </div>
      <Organizer />
      <About />
      <Footer />
    </>
  );
}

export default Home;
