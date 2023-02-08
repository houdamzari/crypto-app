import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import icon from "../images/blockchain-hub.svg";
const { Title } = Typography;
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Link to="/" style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <Avatar src={icon} size="large" className="avatar" />
          <Title level={2} className="avatar">
            Cryptovest
          </Title>
        </Link>

        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu
          mode="horizontal"
          style={{
            backgroundColor: "transparent",
            width: "100%",
          }}
          classNames="no"
        >
          <Menu.Item>
            <Link className="link" to="/">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link className="link" to="/cryptocurrencies">
              Cryptocurrencies
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/exchanges" className="link">
              Exchanges
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
