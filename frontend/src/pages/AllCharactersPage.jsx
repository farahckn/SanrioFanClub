import { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";
import NavBar from "../components/NavBar";

function AllCharactersPage() {
  const [characters, setCharacter] = useState([]);
  const fetchCharacter = () => {
    axios
      .get("http://localhost:3310/api/character/")
      .then((response) => {
        console.info("REPONSE : ", response);
        setCharacter(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  return (
    <div>
      <NavBar />
      {characters.map((character) => (
        <CharacterCard data={character} />
      ))}
    </div>
  );
}

export default AllCharactersPage;
