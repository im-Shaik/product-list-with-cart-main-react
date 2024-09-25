import React, { useContext } from "react";
import cartIcon from "../assets/images/icon-add-to-cart.svg";
import ProductContext from "../Context";
import "../styles/Card.css";

const Card = () => {
  const { data, setMyCart } = useContext(ProductContext);

  const addToCart = (product) => {
    setMyCart((prev) => {
      const updatedCart = prev.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      if (!updatedCart.find((item) => item.id === product.id)) {
        updatedCart.push({ ...product, quantity: 1 });
      }

      return updatedCart;
    });
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div
      className="card-wrapper"
      style={{
        display: "grid",
        gridGap: "15px",
        justifyContent: "center",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      {data.map((product) => {
        return (
          <div
            key={product.id}
            className="card"
            style={{
              borderRadius: "10px",
              width: "300px",
              height: "400px",
              padding: "10px",
              // boxShadow: "0px 0px 2px 0px",
            }}
          >
            <div
              className="top"
              style={{
                position: "relative",
                height: "300px",
                marginBottom: "20px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                src={"" || "https://via.placeholder.com/300"}
                alt={product?.name}
              />

              <button
                className="hover-and-active"
                style={{
                  width: "70%",
                  position: "absolute",
                  bottom: "-15px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                  textAlign: "center",
                  fontSize: "16px",
                  fontWeight: "600",
                  border: "1px solid gray",
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "20px",
                  padding: "10px 20px",
                }}
                onClick={() => addToCart(product)}
              >
                <img src={cartIcon} alt="Add to cart" />
                Add to cart
              </button>
            </div>
            <div className="bottom">
              <p className="description" style={{ color: "gray", margin: "0" }}>
                {product?.category}
              </p>
              <h4
                className="title"
                style={{ fontWeight: "600", fontSize: "24px", margin: "0" }}
              >
                {product?.name}
              </h4>
              <p
                className="price"
                style={{ color: "rgb(200, 59, 14)", margin: "0" }}
              >
                {product?.price}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
