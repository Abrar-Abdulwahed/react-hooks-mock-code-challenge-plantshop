import React, { useState } from "react";
import { FaRegTrashCan, FaPenToSquare } from "react-icons/fa6";
import { updatePlant } from "../api/plants";
import { useMutation, useQueryClient } from "react-query";

function PlantCard({ plant }) {
  const { id, name, image, price } = plant;
  const queryClient = useQueryClient();
  const [edit, setEdit] = useState(false)
  const [inputPrice, setInputPrice] = useState(price);

  const handleBlur = () => {
    mutatePlant.mutate({ price: inputPrice });
    setEdit((prev) => !prev);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setInputPrice(value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      mutatePlant.mutate({ price: inputPrice });
      setEdit((prev) => !prev);
    }
  };
  const mutatePlant = useMutation((updatedPlant) => updatePlant(id, updatedPlant), {
    onSuccess: () => {
      queryClient.invalidateQueries("plants");
    }
  });
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
      {edit? (
          <input
            type="text"
            name="price"
            placeholder={price}
            value={inputPrice}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
      ) : (
        <button onClick={() => setEdit(prev => !prev)}><FaPenToSquare className="green" /></button>
      )}
			<button onClick={null}><FaRegTrashCan  className="red" /></button>
    </li>
  );
}

export default PlantCard;
