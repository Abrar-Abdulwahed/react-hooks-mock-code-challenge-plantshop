import React, { useState } from "react";
import { FaRegTrashCan, FaPenToSquare } from "react-icons/fa6";
import { deletePlant, updatePlant } from "../api/plants";
import { useMutation, useQueryClient } from "react-query";

function PlantCard({ plant }) {
  const { id, name, image, price } = plant;
  const queryClient = useQueryClient();
  const [edit, setEdit] = useState(false);
  const [inStock, setInStock] = useState(true);
  const [inputPrice, setInputPrice] = useState(price);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputPrice(value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      updatePlantMutate.mutate({ price: inputPrice });
      setEdit((prev) => !prev);
    }
  };
  const updatePlantMutate = useMutation((updatedPlant) => updatePlant(id, updatedPlant), {
    onSuccess: () => {
      queryClient.invalidateQueries("plants");
    }
  });
  const deletePlantMutate = useMutation(deletePlant, {
      onSuccess: () => {
          queryClient.invalidateQueries("plants")
      }
  })
  return (
    <li className="card">
      <img src={image || "https://via.placeholder.com/400"} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={() => setInStock(false)}>In Stock</button>
        ) : (
        <button className="secondary" onClick={() => setInStock(true)}>Out of Stock</button>
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
			<button onClick={() => deletePlantMutate.mutate({id})}><FaRegTrashCan  className="red" /></button>
    </li>
  );
}

export default PlantCard;
