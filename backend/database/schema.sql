CREATE TABLE sanrio (
  id INT NOT NULL AUTO_INCREMENT,
  img VARCHAR(255) NOT NULL,
  full_name VARCHAR(100) NOT NULL,
  alternate_name VARCHAR(100) NOT NULL,
  japanese_name VARCHAR(100),
  birthday VARCHAR(100) NULL,
  likes_hobbies TEXT NULL,
  PRIMARY KEY (id)
);

INSERT INTO sanrio (img, full_name, alternate_name, japanese_name, birthday, likes_hobbies) 
VALUES 
    ("https://img.pixers.pics/pho(s3:700/PI/23/43/700_PI2343_cc54ad0c8436396505f07eb66936a0c2_5b7abbb2c40ca_.,700,700,jpg)/stickers-hello-kitty.jpg.jpg", "Hello Kitty", "Kitty, Kitty-chan", "ハローキティ (Harō Kitī)" , "November 1, 1974", "Baking cookies, collecting cute things, Mama's homemade apple pie, English, music, art, apples and the colour red"),
    ("https://i.pinimg.com/564x/a9/e9/8d/a9e98d0d97c438a82f6c2e43b7dd69aa.jpg", "My Melody", "My Melo", "マイメロディ (Mai Merodi)", "January 18", "Baking almond cakes, Almond pound cake, Hood her grandma made for her"),
    ("https://i.pinimg.com/564x/99/c7/c6/99c7c6e67b807920c17ad9252e2026bf.jpg", "Kuromi", "Kurumi Nui, Gijinka", "クロミ (Kuromi)", "October 31st (Halloween)", "Writing in her diary, Cooking, Reading, Romantic short stories, food, shallots, meat, Black, Hot pink, Making mischief, Attractive men");
