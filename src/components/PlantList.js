import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  if (!plants) {
    return null; // or render a loading state
  }
  return (
    <ul className="cards">
      {plants.map(plant => <PlantCard key={plant.id} plant={plant} />)}
    </ul>
  );
}

export default PlantList;
