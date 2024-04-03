import "../styles/charactercard.css";

function CharacterCard() {
  return (
    <div>
      <button type="button">Modify a character</button>
      <div className="character-card">
        <button type="button">Delete</button>
        <img src="" alt="" />
        <h2>Full name</h2>
        <p>Alternate Name:</p>
        <p>Japanese Name: </p>
        <p>Birthday: </p>
        <p>Likes and Hobbies:</p>
      </div>
    </div>
  );
}

export default CharacterCard;
