import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useQuery } from "react-query";
import { getPlants, searchPlants } from "../api/plants";

function PlantPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const plantsQuery = useQuery("plants", getPlants);
  const searchQuery = useQuery(
    ["plants", searchTerm],
    () => searchPlants(searchTerm),
    {
      enabled: searchTerm !== ""
    }
  );

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const plants = searchTerm ? searchQuery.data : plantsQuery.data;

  return (
    <main>
      <NewPlantForm />
      <Search onSearch={handleSearch} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;