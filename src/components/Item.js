import React, { useState } from "react";

function Item({ name, category }) {
const [inCart, setInCart] = useState(false);

  function handleClick() {
    setInCart((inCart) => !inCart);
  }

  const itemClassName = inCart ? "in-cart" : "";

  return (
    <li className="">
      <span>{name}</span>
      <span className= { itemClassName }>{category}</span>
      <button className="add" onClick = { handleClick }> { inCart ? "Add to Cart" : "Remove from Cart" } </button>
    </li>
  );
}

export default Item;
