import React from "react";

const Card = () => {
  return (
    <div className="card-container">
      <div className="item">
        <div className="img-item-container">
          <img src="./img/image 12.png" alt="" />
        </div>
        <div className="rating">
          <img src="./img/Star 1.png" alt="" className="star"/>
          <p>5.0 <em>(6).USA</em></p>
        </div>
        <div className="card-title">
          <h3>Life lessons with Katie Zaferes</h3>
          <p><em>From $136</em> / person</p>
        </div>
      </div>
      <div className="item">
        <div className="img-item-container">
          <img src="./img/wedding-photography 1.png" alt="" />
        </div>
        <div className="rating">
          <img src="./img/Star 1.png" alt="" className="star"/>
          <p>5.0 <em>(30).USA</em></p>
        </div>
        <div className="card-title">
          <h3>Learn wedding photography</h3>
          <p><em>From $125</em> / person</p>
        </div>
      </div>
      <div className="item">
        <div className="img-item-container">
          <img src="./img/mountain-bike 1.png" alt="" />
        </div>
        <div className="rating">
          <img src="./img/Star 1.png" alt="" className="star"/>
          <p>4.8 <em>(2).USA</em></p>
        </div>
        <div className="card-title">
          <h3>Group mountain biking</h3>
          <p><em>From $50</em> / person</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
