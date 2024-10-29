import { useState } from "react";
import "./Products.css";
import { FaShoppingCart } from "react-icons/fa";

export default function Header({
  cart,
  setCart,
  setTotalProducts,
  totalProducts,
  totalPrice,
  setTotalPrice,
}) {
  const [openCart, setOpenCart] = useState(false);
  return (
    <>
      <header>
        <div style={{ padding: "30px 50px" }}>
          <div>
            <h1>Paradise Nursery</h1>
            <div>Where green Meets Serenity</div>
          </div>
          <div>Plants</div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => setOpenCart((prev) => !prev)}
          >
            {totalProducts}
            <FaShoppingCart size={25} />
          </div>
        </div>
      </header>
      {openCart && (
        <Cart
          cart={cart}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          setTotalProducts={setTotalProducts}
          setCart={setCart}
        />
      )}
    </>
  );
}

export function Cart({
  cart,
  setCart,
  totalPrice,
  setTotalPrice,
  setTotalProducts,
}) {
  return (
    <div className="cart">
      <div style={{ fontWeight: "600", fontSize: "20px", margin: "50px 0px" }}>
        Total Cart Amount: $ {totalPrice}{" "}
      </div>
      {cart.map((el, i) => {
        return (
          <CartPlant
            plant={el}
            setTotalPrice={setTotalPrice}
            setTotalProducts={setTotalProducts}
            cart={cart}
            setCart={setCart}
            key={"cart" + i}
          />
        );
      })}
    </div>
  );
}

export function CartPlant({ plant, setTotalPrice, setTotalProducts, setCart }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="cart-plant">
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + plant.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "200px",
        }}
      ></div>
      <div
        style={{
          marginLeft: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={{ fontWeight: "600", fontSize: "20px" }}>{plant.title}</div>
        <div>$ {plant.price}</div>
        <div className="quantity">
          <button
            onClick={(e) => {
              e.preventDefault();
              quantity > 1 && setTotalPrice((prev) => prev - plant.price);
              quantity > 1 && setQuantity((prev) => prev - 1);
              quantity > 1 && setTotalProducts((prev) => prev - 1);
            }}
          >
            -
          </button>{" "}
          <div>{quantity}</div>{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              setTotalPrice((prev) => prev + plant.price);
              setQuantity((prev) => prev + 1);
              setTotalProducts((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>
        <div>Total: $ {quantity * plant.price}</div>
        <button
          onClick={() => {
            setTotalPrice((prev) => prev - quantity * plant.price);
            setTotalProducts((prev) => prev - quantity);
            setCart((prev) => prev.filter((el) => el.title !== plant.title));
            console.log(quantity);
          }}
          style={{ backgroundColor: "#ff0000" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
