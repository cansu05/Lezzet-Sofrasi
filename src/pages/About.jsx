import React from "react";
import "../styles/about.css";
import { Col, Container, Row } from "reactstrap";
import Hero from "../components/UI/Hero";
import Helmet from '../components/Helmet/Helmet'
const About = () => {
  return (
    <Helmet title='Hakkımızda'>
      <section>
      <Hero/>
      <Container>
        <Row className="about">
          <Col lg="12">
            <p>
              Merhaba! Biz Amanda ve Pedro'yuz ve "Lezzet Sofrası" konusundaki
              çalışmamızı sunmaktan heyecan duyuyoruz. Bu inanılmaz siteyi
              keşfederek lezzetli tarifler, faydalı ipuçları ve mutfak
              ilhamlarıyla dolu bir gastronomi evreni keşfettik. "Lezzet Sofrası", deneyimli şeflerin ve acemi aşçıların yemek tutkusunda
              birleşebilecekleri bir yerdir.
            </p>
          </Col>
          <Col lg="12">
            <p>
              <Col lg="12">
                <p>
                  Bizi memnun eden şeylerden biri de tariflerin çeşitliliğiydi.
                  Geleneksel ve rahatlatıcı yemeklerden daha yenilikçi
                  kreasyonlara kadar her zevke ve duruma uygun seçenekler var.
                  Her tarif, sonuçların her zaman lezzetli ve paylaşmaya değer
                  olmasını sağlamak için dikkatlice seçilir ve test edilir.
                </p>
              </Col>
            </p>
          </Col>
          <Col lg="12">
            <p>
              "Lezzet Sofrası" yemek tariflerine ek olarak, mutfak becerilerini
              geliştirmek için faydalı ipuçları da sunuyor. Hazırlama
              tekniklerinden lezzet kombinasyon önerilerine kadar site, bizi
              mutfakta keşfetmeye ve denemeye davet ediyor. Herkesin yemek
              pişirme sanatına dalmaya ve yeni olasılıkları keşfetmeye teşvik
              edildiği sıcak ve kapsayıcı bir ortam.
            </p>
          </Col>
          <Col lg="12">
            <p>
              Kısacası "Lezzet Sofrası", bizi yemek pişirme tutkumuzu
              keşfetmeye, yaratmaya ve paylaşmaya davet eden ilham verici bir
              gastronomi alanıdır. Umarız sunumumuz, "Lezzet Sofrası" ile bu
              lezzetli yolculukta bize katılma konusunda ilginizi çekmiştir!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    </Helmet>
    
  );
};

export default About;
