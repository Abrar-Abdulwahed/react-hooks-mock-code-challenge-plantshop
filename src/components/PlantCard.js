import React from "react";
import { FaRegTrashCan, FaPenToSquare } from "react-icons/fa6";
function PlantCard({ plant }) {
  const { name, image, price } = plant;
  return (
    <li className="card">
      <img src={image || "https://via.placeholder.com/400"} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button onClick={null}><FaPenToSquare className="green" /></button>
			<button onClick={null}><FaRegTrashCan  className="red" /></button>
    </li>
  );
}

export default PlantCard;
