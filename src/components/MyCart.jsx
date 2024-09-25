import React, { useContext } from "react";
import "../styles/MyCart.css";
import ProductContext from "../Context";
import emptyBox from "../assets/images/illustration-empty-cart.svg";
import minus from "../assets/images/icon-decrement-quantity.svg";
import plus from "../assets/images/icon-increment-quantity.svg";
import remove from "../assets/images/icon-remove-item.svg";

const MyCart = () => {
  const { myCart, setMyCart } = useContext(ProductContext);

  const handleRemoveFromCart = (productId) => {
    const updatedCart = myCart.filter((product) => product.id !== productId);
    setMyCart(updatedCart);
  };

  const handleIncrementQuantity = (productId) => {
    const updatedCart = myCart.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setMyCart(updatedCart);
  };
  const handleDecrementQuantity = (productId) => {
    const updatedCart = myCart
      .map((product) =>
        product.id === productId && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
      .filter((product) => product.quantity > 0);

    setMyCart(updatedCart);
  };

  return (
    <div
      className="cart-container"
      style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        position: "fixed",
        top: "55px",
        right: "353px",
      }}
    >
      <h1
        style={{
          color: "rgb(200, 59, 14)",
        }}
      >
        My Cart ({myCart.length})
      </h1>
      {myCart.length === 0 ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            style={{
              height: "100px",
              width: "100px",
            }}
            src={emptyBox}
            alt="empty-cart"
          />
          <p
            style={{
              marginTop: "20px",
              color: "rgb(200, 59, 14)",
            }}
          >
            You items will be appears here
          </p>
        </div>
      ) : (
        myCart.map((product) => (
          <div key={product.id} className="cart-item">
            <div>
              <h5
                style={{
                  margin: "5px 0",
                }}
              >
                {product.name}
              </h5>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <h6
                  style={{
                    margin: "5px 0",
                    fontSize: "16px",
                  }}
                >
                  <span
                    style={{
                      color: "rgb(200, 59, 14)",
                    }}
                  >
                    {product.quantity}X
                  </span>
                  <span
                    style={{
                      marginLeft: "15px",
                    }}
                  >
                    @{product.price}
                  </span>
                </h6>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <button
                    style={{
                      outline: "none",
                      backgroundColor: "transparent",
                      border: "2px solid gray",
                      borderRadius: "50%",
                    }}
                    onClick={() => {
                      handleDecrementQuantity(product.id);
                    }}
                  >
                    <h6
                      style={{
                        margin: "0",
                        padding: "5px",
                        fontSize: "20px",
                      }}
                    >
                      -
                    </h6>
                  </button>
                  <button
                    style={{
                      outline: "none",
                      backgroundColor: "transparent",
                      border: "2px solid gray",
                      borderRadius: "50%",
                    }}
                    onClick={() => {
                      handleIncrementQuantity(product.id);
                    }}
                  >
                    <h6
                      style={{
                        margin: "0",
                        padding: "5px",
                        fontSize: "20px",
                      }}
                    >
                      +
                    </h6>
                  </button>
                </div>

                <div>
                  <button
                    style={{
                      outline: "none",
                      backgroundColor: "transparent",
                      border: "2px solid gray",
                      borderRadius: "50%",
                    }}
                    onClick={() => {
                      handleRemoveFromCart(product.id);
                    }}
                  >
                    <h6
                      style={{
                        margin: "0",
                        padding: "5px",
                        fontSize: "20px",
                      }}
                    >
                      x
                    </h6>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      <p>
        Total: $
        {myCart.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        )}
      </p>
    </div>
  );
};

export default MyCart;
