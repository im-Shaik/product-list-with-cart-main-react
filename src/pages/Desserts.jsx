import React from "react";
import Card from "../components/Card";
import MyCart from "../components/MyCart";
import "../styles/Desserts.css";

const Desserts = () => {
  return (
    <div>
      <div
        className="container"
        style={{
          padding: "2rem",
        }}
      >
        <h1>Desserts</h1>
        {/* Desserts here */}
        <div className="grid">
          <Card />
          <MyCart />
        </div>
      </div>
    </div>
  );
};

export default Desserts;
