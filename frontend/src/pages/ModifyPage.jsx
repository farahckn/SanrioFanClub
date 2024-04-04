import { useEffect, useState, useParams } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/addmodifyacharacter.css";

function ModifyCharacter() {
  const { id } = useParams();
  const [updateForm, setUpdateForm] = useState({
    img: "",
    full_name: "",
    alternate_name: "",
    japanese_name: "",
    birthday: "",
    likes_hobbies: "",
    id: 1,
  });

  const handleUpdate = (event) => {
    setUpdateForm({
      ...updateForm,
      [event.target.name]: event.target.value,
    });
  };

  const fetchCharacterById = () => {
    axios
      .get(`http://localhost:3310/api/character/${id}`)
      .then((response) => {
        console.info("REPONSE : ", response);
        setUpdateForm(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchCharacterById();
  }, []);

  const updateCharacter = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3310/api/character/${id}`, updateForm)
      .then((response) => console.info(response))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Link to="/characters">
        <button type="button">Go back to all the characters</button>
      </Link>
      <form onSubmit={updateCharacter}>
        <h1>Modify a character</h1>
        <div className="picture">
          <label htmlFor="picture">URL of your favorite picture</label>
          <input
            type="text"
            name="img"
            id="pic"
            value={updateForm.img}
            onChange={handleUpdate}
            required
          />
        </div>
        <div className="names">
          <div className="full_name">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="full_name"
              id="full_name"
              value={updateForm.full_name}
              onChange={handleUpdate}
              required
            />
          </div>

          <div className="alternate_name">
            <label htmlFor="alternateName">Alternate Name</label>
            <input
              type="text"
              name="alternate_name"
              id="alternate_name"
              value={updateForm.alternate_name}
              onChange={handleUpdate}
            />
          </div>

          <div className="japanese_name">
            <label htmlFor="japaneseName">Japanese Name</label>
            <input
              type="text"
              name="japanese_name"
              id="japanese_name"
              value={updateForm.japanese_name}
              onChange={handleUpdate}
            />
          </div>
        </div>
        <div className="other">
          <div className="birthday">
            <label htmlFor="birthday">Birthday</label>
            <input
              type="text"
              name="birthday"
              id="birthday"
              value={updateForm.birthday}
              onChange={handleUpdate}
            />
          </div>

          <div className="hobbies_likes">
            <label htmlFor="likesHobbies">Likes and Hobbies</label>
            <input
              type="text"
              name="likes_hobbies"
              id="likes_hobbies"
              value={updateForm.likes_hobbies}
              onChange={handleUpdate}
            />
          </div>
        </div>

        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default ModifyCharacter;
