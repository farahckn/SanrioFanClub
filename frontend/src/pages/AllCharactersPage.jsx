import { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";
import "../styles/characterspage.css";

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
      <div className="character_card_container">
        {characters.map((character) => (
          <CharacterCard data={character} />
        ))}
      </div>
    </div>
  );
}

export default AllCharactersPage;
