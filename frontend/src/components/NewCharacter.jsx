import "../styles/addacharacter.css";

function NewCharacter() {
  return (
    <form>
      <h1>Add a character</h1>
      <div>
        <input type="file" id="imageInput" accept="image/*" />
        <button type="button">Add a picture</button>
        <div className="FullName">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            // value={formData.fullName}
            // onChange={handleChange}
            required
          />
        </div>

        <div className="AlternateName">
          <label htmlFor="alternateName">Alternate Name</label>
          <input
            type="text"
            name="alternateName"
            id="alternateName"
            // value={formData.alternateName}
            // onChange={handleChange}
          />
        </div>

        <div className="JapaneseName">
          <label htmlFor="japaneseName">Japanese Name</label>
          <input
            type="text"
            name="japaneseName"
            id="japaneseName"
            // value={formData.japaneseName}
            // onChange={handleChange}
          />
        </div>

        <div className="Birthday">
          <label htmlFor="birthday">Birthday</label>
          <input
            type="text"
            name="birthday"
            id="birthday"
            // value={formData.birthday}
            // onChange={handleChange}
          />
        </div>

        <div className="HobbiesLikes">
          <label htmlFor="likesHobbies">Likes and Hobbies</label>
          <input
            type="text"
            name="likesHobbies"
            id="likesHobbies"
            // value={formData.likesHobbies}
            // onChange={handleChange}
          />
        </div>

        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default NewCharacter;
