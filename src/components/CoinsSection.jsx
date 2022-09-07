import React from "react";
import { Typography, Row, Col } from "antd";
import bitcoin from "../images/bitcoin.svg";
import eth from "../images/eth.svg";
import vechain from "../images/vechain.svg";
import xrp from "../images/xrp.svg";
const CoinsSection = () => {
  return (
    <>
      <Row
        style={{
          backgroundColor: "#FFFFFF",
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          marginLeft: -40,
          padding: 50,
          paddingLeft: 130,
        }}
        className="coin-section"
        gutter={20}
      >
        <Col span={6}>
          <img
            src={bitcoin}
            alt="bitcoin"
            className="coinsection-icon"
            style={{ width: "60%", height: "100%" }}
          />
        </Col>
        <Col span={6}>
          <img
            src={eth}
            alt="bitcoin"
            className="coinsection-icon"
            style={{ width: "80%", height: "100%" }}
          />
        </Col>
        <Col span={6}>
          <img
            src={vechain}
            alt="bitcoin"
            className="coinsection-icon"
            style={{ width: "40%", height: "100%" }}
          />
        </Col>
        <Col span={6}>
          <img
            src={xrp}
            alt="bitcoin"
            className="coinsection-icon"
            style={{ width: "40%", height: "100%" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default CoinsSection;
