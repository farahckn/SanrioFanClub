const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const characters = await tables.sanrio.readAll();
    res.json(characters);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  const { id } = req.params;
  try {
    const character = await tables.sanrio.read(id);
    res.json(character);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const sanrioInfos = {
    img: req.body.img,
    full_name: req.body.full_name,
    alternate_name: req.body.alternate_name,
    japanese_name: req.body.japanese_name,
    birthday: req.body.birthday,
    likes_hobbies: req.body.likes_hobbies,
  };

  try {
    const result = await tables.sanrio.create(sanrioInfos);
    console.info(result);
    res.status(200).json({
      msg: "new character registered, YAY!",
      status: result,
    });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const sanrioInfos = {
    img: req.body.img,
    full_name: req.body.full_name,
    alternate_name: req.body.alternate_name,
    japanese_name: req.body.japanese_name,
    birthday: req.body.birthday,
    likes_hobbies: req.body.likes_hobbies,
    id: req.params.id,
  };

  try {
    const result = await tables.sanrio.updateCharacter(sanrioInfos);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "character not found :(" });
    } else {
      res.json({ msg: "character modified, YAY!" });
    }
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await tables.sanrio.deleteCharacter(req.params.id);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "character not found :(" });
    } else {
      res.json({ msg: "character deleted" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
  update,
  destroy,
};
