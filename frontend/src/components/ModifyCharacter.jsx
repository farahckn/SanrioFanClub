import React from "react";

function ModifyCharacter() {
  return (
    <form>
      <h1>Add a character</h1>
      <div className="newFullName">
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

      <div className="newAlternanteName">
        <label htmlFor="alternateName">Alternate Name</label>
        <input
          type="text"
          name="alternateName"
          id="alternateName"
          // value={formData.alternateName}
          // onChange={handleChange}
        />
      </div>

      <div className="newJapaneseName">
        <label htmlFor="japaneseName">Japanese Name</label>
        <input
          type="text"
          name="japaneseName"
          id="japaneseName"
          // value={formData.japaneseName}
          // onChange={handleChange}
        />
      </div>

      <div className="newBirthday">
        <label htmlFor="birthday">Birthday</label>
        <input
          type="text"
          name="birthday"
          id="birthday"
          // value={formData.birthday}
          // onChange={handleChange}
        />
      </div>

      <div className="newHobbiesLikes">
        <label htmlFor="likesHobbies">Likes and Hobbies</label>
        <input
          type="text"
          name="likesHobbies"
          id="likesHobbies"
          // value={formData.likesHobbies}
          // onChange={handleChange}
        />
      </div>

      <button type="submit">Modify</button>
    </form>
  );
}

export default ModifyCharacter;
