import React, { useState } from "react";
import { Typography, Select, Row, Col, Avatar, Card, Space } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import demoImage from "../images/demoImage.jpg";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";
import { NewsDropdown } from "../components";
const { Text, Title } = Typography;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 6 : 12,
  });
  console.log(cryptoNews);
  if (!cryptoNews?.value) return <Loader />;
  return (
    <>
      <NewsDropdown
        simplified={simplified}
        setNewsCategory={setNewsCategory}
        data={data}
      />

      <Row gutter={[24, 24]}>
        {cryptoNews.value.map((news, i) => (
          <Col xs={12} sm={12} lg={12} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <Space size={10} direction="vertical">
                  <div className="news-image-container">
                    <Title className="news-title" level={4}>
                      {news.name}
                    </Title>
                    <img
                      style={{ maxWidth: 200, maxHeight: 100 }}
                      src={news?.image?.thumbnail?.contentUrl || demoImage}
                      alt="news"
                      className=""
                    />
                  </div>
                  <p>
                    {news.description > 100
                      ? ` ${news.description.substring(0, 100)}...`
                      : news.description}
                  </p>
                  <div className="provider-container">
                    <div>
                      <Avatar
                        src={
                          news.provider[0]?.image?.thumbnail?.contentUrl ||
                          demoImage
                        }
                        alt=""
                      />
                      <Text className="provider-name">
                        {news.provider[0]?.name}
                      </Text>
                    </div>

                    <Text>
                      {moment(news.datePublished).startOf("ss").fromNow()}
                    </Text>
                  </div>
                </Space>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
