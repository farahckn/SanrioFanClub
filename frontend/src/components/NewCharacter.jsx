import { useState } from "react";
import axios from "axios";
import "../styles/addmodifyacharacter.css";

function NewCharacter() {
  const [form, setForm] = useState({
    img: "",
    full_name: "",
    alternate_name: "",
    japanese_name: "",
    birthday: "",
    likes_hobbies: "",
    id: 1,
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const submitCharacter = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3310/api/character/", form)
      .then((response) => console.info(response))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={submitCharacter}>
      <h1>Add a character</h1>
      <div className="picture">
        <label htmlFor="picture">URL of your favorite picture</label>
        <input
          type="text"
          name="img"
          id="pic"
          value={form.img}
          onChange={handleChange}
          required
        />
      </div>

      <div className="names">
        <div className="full_name">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="full_name"
            id="fullName"
            value={form.full_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="alternate_name">
          <label htmlFor="alternateName">Alternate Name</label>
          <input
            type="text"
            name="alternate_name"
            id="alternateName"
            value={form.alternate_name}
            onChange={handleChange}
          />
        </div>

        <div className="japanese_name">
          <label htmlFor="japaneseName">Japanese Name</label>
          <input
            type="text"
            name="japanese_name"
            id="japaneseName"
            value={form.japanese_name}
            onChange={handleChange}
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
            value={form.birthday}
            onChange={handleChange}
          />
        </div>

        <div className="hobbies_likes">
          <label htmlFor="likesHobbies">Likes and Hobbies</label>
          <input
            type="text"
            name="likes_hobbies"
            id="likesHobbies"
            value={form.likes_hobbies}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default NewCharacter;
