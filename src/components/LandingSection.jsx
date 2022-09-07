import React from "react";
import icon from "../images/currency.png";
import { Typography, Space, Row, Col } from "antd";
import { CoinAnimatedLogo } from "../components";
const { Title, Text, Paragraph } = Typography;
const LandingSection = () => {
  return (
    <Row className="LandingSection" gutter={[0, 48]}>
      <Col>
        <Title level={1} style={{ color: "white", width: 500 }}>
          A universe of cryptocurrencies stats, charts, news and more.
        </Title>
        <Paragraph style={{ color: "white", width: 500 }}>
          Crypotvest is the definitive data hub for cryptocurrency and
          decentralized finance (DeFi) lending. Check available crypto lending
          and get info on the current DeFi interest rates for more than 50
          cryptocurrencies, including BTC, ETH, XRP, USDT, DAI and others.
        </Paragraph>
      </Col>
      <Col>
        {/* <img src={icon} alt="icon" className="LandingSection-image" /> */}
        <CoinAnimatedLogo />
      </Col>
    </Row>
  );
};

export default LandingSection;
