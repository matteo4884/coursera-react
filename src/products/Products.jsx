import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./Products.css";
import { PLANTS } from "../plants";

export default function Products() {
  const [cart, setCart] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <div>
      <Header
        cart={cart}
        setCart={setCart}
        totalProducts={totalProducts}
        setTotalProducts={setTotalProducts}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
      <div style={{ paddingTop: "100px" }}>
        {PLANTS.categories.map((el, i) => {
          return (
            <Category
              cart={cart}
              category={el}
              setCart={setCart}
              setTotalProducts={setTotalProducts}
              setTotalPrice={setTotalPrice}
              key={"category" + i}
            />
          );
        })}
      </div>
    </div>
  );
}

export function Category({
  cart,
  category,
  setCart,
  setTotalProducts,
  setTotalPrice,
}) {
  return (
    <>
      <div className="air">{category.name}</div>
      <div className="category_plant">
        {category.plants.map((plant, i) => {
          return (
            <Plant
              cart={cart}
              plant={plant}
              setCart={setCart}
              setTotalProducts={setTotalProducts}
              setTotalPrice={setTotalPrice}
              key={"plant" + i}
            />
          );
        })}
      </div>
    </>
  );
}

export function Plant({
  cart,
  plant,
  setCart,
  setTotalProducts,
  setTotalPrice,
}) {
  const [isAdded, setIsAdded] = useState(false);
  useEffect(() => {
    const plantExists = cart.some((el) => el.title === plant.title);
    plantExists ? setIsAdded(true) : setIsAdded(false);
  }, [cart, plant.title]);
  return (
    <>
      <div className="box_plant">
        <div>{plant.title}</div>

        <img src={process.env.PUBLIC_URL + `${plant.image}`} alt="plant" />

        <div>$ {plant.price}</div>
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          {plant.description}
        </p>
        <button
          onClick={() => [
            setIsAdded(true),
            setCart((prev) => [...prev, plant]),
            !isAdded && setTotalPrice((prev) => prev + plant.price),
            !isAdded && setTotalProducts((prev) => prev + 1),
          ]}
          style={{ backgroundColor: isAdded && "grey" }}
          disabled={isAdded}
        >
          {isAdded ? "Added to cart" : "Add to cart"}
        </button>
      </div>
    </>
  );
}
