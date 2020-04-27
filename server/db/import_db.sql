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

CREATE INDEX trade_information_user_id_idx 
ON trade_information (user_id);

CREATE TABLE notes (
  id INTEGER PRIMARY KEY,
  trade_id INTEGER NOT NULL,
  title TEXT,
  body TEXT NOT NULL,
  photo_id INTEGER,

  FOREIGN KEY (trade_id) REFERENCES trade_information(id)
);

CREATE INDEX notes_trade_id_idx 
ON notes (trade_id);
CREATE INDEX notes_photo_id_idx 
ON notes (photo_id);

CREATE TABLE photos (
  id INTEGER PRIMARY KEY,
  note_id INTEGER,
  photo_url TEXT NOT NULL,

  FOREIGN KEY (note_id) REFERENCES notes(id)
);

CREATE INDEX photos_note_id_idx 
ON photos (note_id);

INSERT INTO 
  users (email, username, password, first_name, last_name, is_verified)
VALUES
  ('testing@testing.com', 'TestDummy123', 'hunter12', 'Test', 'Dummy', true),
  ('testing2@testing.com', 'TestDummy234', 'hunter12', 'Test2', 'Dummy2', false);

INSERT INTO 
  users (email, username, password, first_name, last_name, is_verified)
VALUES
  ('testing3@testing.com', 'TestDummy567', 'h', 'Test3', 'Dummy3', true)

DELETE FROM users
WHERE email like 'testing3@testing.com';

-- Add column that creates timestamps with time now
ALTER TABLE users ADD COLUMN created_at TIMESTAMP NOT NULL DEFAULT NOW();
ALTER TABLE users ADD COLUMN updated_at TIMESTAMP NOT NULL DEFAULT NOW();

ALTER TABLE photos ADD COLUMN created_at TIMESTAMP NOT NULL DEFAULT NOW();
ALTER TABLE photos ADD COLUMN updated_at TIMESTAMP NOT NULL DEFAULT NOW();

ALTER TABLE notes ADD COLUMN created_at TIMESTAMP NOT NULL DEFAULT NOW();
ALTER TABLE notes ADD COLUMN updated_at TIMESTAMP NOT NULL DEFAULT NOW();

ALTER TABLE trade_information ADD COLUMN created_at TIMESTAMP NOT NULL DEFAULT NOW();
ALTER TABLE trade_information ADD COLUMN updated_at TIMESTAMP NOT NULL DEFAULT NOW();

-- Make usernames citext so it's case insensitive
ALTER TABLE users ALTER COLUMN username TYPE citext;