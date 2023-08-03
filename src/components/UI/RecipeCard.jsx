import React from "react";

import "../../styles/recipeCard.css";

import { Col, Container, Row } from "reactstrap";

const RecipeCard = ({ item }) => {
  return (
    <section>
      <Container>
        <Row className="recipe__container mb-5">
          <Col lg="12">
            <div className="recipe__wrapper">
              <div className="recipe__item">
                <img src={item.imgUrl} alt="" />
                <div className="recipe__content">
                  <h3 className="mb-4">{item.recipeName}</h3>
                  <p>{item.shortDesc}</p>
                  <button>Tarife bak</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RecipeCard;
