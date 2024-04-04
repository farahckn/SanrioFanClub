import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import "../styles/charactercard.css";

function CharacterCard({ data }) {
  const deleteCharacter = () => {
    axios
      .delete(`http://localhost:3310/api/character/${data.id}`)
      .then((response) => {
        console.info(response);
        window.location.reload();
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="character-card">
      <img src={data.img} alt={data.full_name} />
      <h2>{data.full_name}</h2>
      <p>Alternate Name: {data.alternate_name}</p>
      <p>Japanese Name: {data.japanese_name} </p>
      <p>Birthday: {data.birthday}</p>
      <p>Likes and Hobbies: {data.likes_hobbies}</p>
      <div>
        <Link to={`/modify/${data.id}`}>
          <button type="button">Modify a character</button>
        </Link>
        <button type="button" onClick={deleteCharacter}>
          Delete
        </button>
      </div>
    </div>
  );
}

CharacterCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
    alternate_name: PropTypes.string,
    japanese_name: PropTypes.string,
    birthday: PropTypes.string,
    likes_hobbies: PropTypes.string,
  }).isRequired,
};

export default CharacterCard;
