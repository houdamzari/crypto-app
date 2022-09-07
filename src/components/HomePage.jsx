import React from "react";

import millify from "millify";
import { Space, Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import {
  CryptoCurrencies,
  News,
  LandingSection,
  CoinsSection,
  CoinAnimatedLogo,
} from "../components";
const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching) return "Loading...";
  console.log(data);
  return (
    <>
      <Space direction="vertical" size={50}>
        <LandingSection />
        <CoinsSection />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Title level={1} className="heading" style={{ color: "white" }}>
            Global Crypto Stats
          </Title>
        </div>
        <Row justify="space-evenly">
          <Col span={4}>
            <Statistic
              title="Total Cryptocurrencies"
              value={globalStats.total}
            />
          </Col>
          <Col span={4}>
            <Statistic
              title="Total Exchanges"
              value={millify(globalStats.totalExchanges)}
            />
          </Col>
          <Col span={4}>
            <Statistic
              title="Total Market Cap"
              value={millify(globalStats.totalMarketCap)}
            />
          </Col>
          <Col span={4}>
            <Statistic
              title="Total 24h Volume"
              value={millify(globalStats.total24hVolume)}
            />
          </Col>
          <Col span={4}>
            <Statistic
              title="Total Markets"
              value={millify(globalStats.totalMarkets)}
            />
          </Col>
        </Row>
        <div className="home-heading-container">
          <Title level={1} className="home-title" style={{ color: "white" }}>
            Top 10 Cryptocurrencies in the world
          </Title>

          <Title level={3} className="show-more">
            <Link to="/cryptocurrencies"> show more</Link>
          </Title>
        </div>
        <CryptoCurrencies simplified />
        <div className="home-heading-container">
          <Title level={2} className="home-title" style={{ color: "white" }}>
            Latest Crypto News
          </Title>

          <Title level={3} className="show-more">
            <Link to="/news"> show more</Link>
          </Title>
        </div>
        <News simplified />
      </Space>
    </>
  );
};

export default HomePage;
