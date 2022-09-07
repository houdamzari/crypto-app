import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetCryptoExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetCryptoExchangesQuery();
  const exchangesList = data?.data?.markets;
  console.log(data?.data?.markets);
  if (isFetching) return <Loader />;
  const volume = "24hVolume";
  return (
    <>
      <Row style={{ marginBottom: "50px" }}>
        <Col span={6} className="col-name">
          Exchanges
        </Col>
        <Col span={6} className="col-name">
          24h Trade Volume
        </Col>
        <Col span={6} className="col-name">
          Price
        </Col>
        <Col span={6} className="col-name">
          Change
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#000" }}>
        {exchangesList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.uuid}
                showArrow={false}
                header={
                  <Row key={exchange.uuid}>
                    <Col span={6}>
                      <Text>
                        <strong>{exchange.rank}.</strong>
                      </Text>
                      <Avatar
                        className="exchange-image"
                        src={exchange.exchange.iconUrl}
                      />
                      <Text>
                        <strong>{exchange.exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>${millify(exchange[volume])}</Col>
                    <Col span={6}>{millify(exchange.price)}</Col>
                    <Col span={6}>{millify(exchange.marketShare)}%</Col>
                  </Row>
                }
              >
                {HTMLReactParser(exchange.description || "")}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
