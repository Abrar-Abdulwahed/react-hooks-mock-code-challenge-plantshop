import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import axios from "axios";
import { useQuery } from "react-query";
import { getPlants } from "../api/plants";

function PlantPage() {  
  const { data: plants, isLoading, error } = useQuery('plants', getPlants);
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Error: {error.message}</span>
  }

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
