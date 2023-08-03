import React from "react";
import { Col } from "reactstrap";
import "../../styles/contentCard.css";
const ContentCard = ({ item }) => {
  return (
    <Col lg="4">
      <div className="card__wrapper">
        <div className="card__item">
          <img src={item.imgUrl} alt="" />
          <div className="card__content">
            <h3>Waffle</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi!
            </p>
            <button>Tarife bak</button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ContentCard;
