import React from "react";
import "../Sass/Card/card.css";
import Button from "../Components/Button";

function Card() {
  return (
    <>
      <div className="card__container">
        <div className="card">
          <div className="card__logo">
            <img src="" alt="" />
          </div>
          <div className="card__time">
            <p>5h ago</p>
            <div className="card__time-dot"></div>
            <p>Full time</p>
          </div>
          <div className="card__role">
            <h4>Senior Software Engineer</h4>
          </div>
          <div className="card__company">
            <p>Scoot</p>
          </div>
          <div className="card__location">
            <p>United Kingdom</p>
          </div>
        </div>
      </div>

      <div className="card__btn">
        <Button btnStyle="load" title="Load More" />
      </div>
    </>
  );
}

export default Card;
