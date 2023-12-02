import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import axios from "axios";
import { useQuery } from "react-query";

function PlantPage() {
  const fetchPlantsList = async () => {
    const response = await axios.get("http://localhost:6001/plants");
    return response.data;
  }
  
  const { data: plants, isLoading, error } = useQuery('plants', fetchPlantsList);
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
