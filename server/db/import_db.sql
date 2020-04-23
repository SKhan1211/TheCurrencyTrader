CREATE TABLE users (
  id serial PRIMARY KEY,
  email VARCHAR (50) NOT NULL UNIQUE,
  username VARCHAR (50) NOT NULL UNIQUE,
  password VARCHAR (255) NOT NULL, 
  first_name VARCHAR (50) NOT NULL,
  last_name VARCHAR (50) NOT NULL,
  is_verified BOOLEAN NOT NULL
);

CREATE TABLE trade_information (
  id serial PRIMARY KEY,
  user_id integer REFERENCES users (id),
  date VARCHAR (50),
  time VARCHAR (50),
  lot_size VARCHAR (50),
  entry_price VARCHAR (50) NOT NULL,
  exit_price VARCHAR (50) NOT NULL,
  dollar_gained_lost VARCHAR(50),
  pips_gained_lost VARCHAR(50)
);

CREATE TABLE notes (
  id INTEGER PRIMARY KEY,
  trade_id INTEGER NOT NULL,
  title TEXT,
  body TEXT NOT NULL,
  photo_id INTEGER,

  FOREIGN KEY (trade_id) REFERENCES trade_information(id)
);

CREATE TABLE photos (
  id INTEGER PRIMARY KEY,
  note_id INTEGER,
  photo_url TEXT NOT NULL,

  FOREIGN KEY (note_id) REFERENCES notes(id)
);

INSERT INTO 
  users (email, username, password, first_name, last_name, is_verified)
VALUES
  ('testing@testing.com', 'TestDummy123', 'hunter12', 'Test', 'Dummy', true),
  ('testing2@testing.com', 'TestDummy234', 'hunter12', 'Test2', 'Dummy2', false);