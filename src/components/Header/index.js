import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import logo from "../../assets/images/logo.png";

function Header() {
  const [active, setActive] = useState(false);
  return (
    <>
      <header className="header">
        <Row>
          <Col span={20} offset={2}>
            <div className="headerInner">
              <Link>
                <img src={logo} alt="logo" />
              </Link>
              <span class="nav_action" onClick={() => setActive(true)}>
                <i></i>
              </span>
              <nav className={`${active ? "headerNav active" : "headerNav"}`}>
                <span class="nav_close" onClick={() => setActive(false)}></span>
                <ul className="navbarList">
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>
                    <Link>About</Link>
                  </li>
                  <li>
                    <Link>Contact</Link>
                  </li>
                  <li>
                    <Link>Call Us</Link>
                  </li>
                  <li>
                    <Link>Mail Us</Link>
                  </li>
                  <li>
                    <Link>My Account</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </Col>
        </Row>
      </header>
    </>
  );
}

export default Header;
