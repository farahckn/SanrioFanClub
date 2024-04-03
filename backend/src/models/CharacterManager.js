const AbstractManager = require("./AbstractManager");

class CharacterManager extends AbstractManager {
  constructor() {
    super({ table: "sanrio" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows;
  }

  async create(character) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (full_name, alternate_name, japanese_name, birthday, likes_hobbies) VALUES (?, ?, ?, ?, ?)`,
      [
        character.full_name,
        character.alternate_name,
        character.japanese_name,
        character.birthday,
        character.likes_hobbies,
      ]
    );
    return rows;
  }

  async updateCharacter(character) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET full_name=?, alternate_name=?, japanese_name=?, birthday=?, likes_hobbies=? WHERE id=?`,
      [
        character.full_name,
        character.alternate_name,
        character.japanese_name,
        character.birthday,
        character.likes_hobbies,
        character.id,
      ]
    );
    return rows;
  }

  async deleteCharacter(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );
    return rows;
  }
}

module.exports = CharacterManager;
