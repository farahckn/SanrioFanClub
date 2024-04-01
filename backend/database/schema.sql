CREATE TABLE `character` (
  id INT NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(100) NOT NULL,
  alternate_name VARCHAR(100) NOT NULL,
  japanese_name VARCHAR(100),
  birthday VARCHAR(100) NULL,
  likes_hobbies TEXT NULL,
  PRIMARY KEY (id)
);

INSERT INTO `character`(full_name, alternate_name, japanese_name, birthday, likes_hobbies) VALUES
("Hello Kitty", "Kitty, Kitty-chan", "ハローキティ
(Harō Kitī)" , "November 1, 1974", "Baking cookies, collecting cute things, Mama's homemade apple pie, English, music, art, apples and the colour red"),
("My Melody", "My Melo", "
マイメロディ
(Mai Merodi)", "
January 18", "Baking almond cakes, 
Almond pound cake, Hood her grandma made for her"),
("Kuromi", "Kurumi Nui, Gijinka", "クロミ
(Kuromi)", "
October 31st (Halloween)", "Writing in her diary, Cooking, Reading, Romantic short stories, food, shallots, meat, Black, Hot pink, Making mischief, Attractive men")