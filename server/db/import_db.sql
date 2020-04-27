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

ALTER TABLE trade_information ADD COLUMN pair TEXT NOT NULL;
ALTER TABLE trade_information ADD COLUMN direction TEXT NOT NULL;

INSERT INTO 
  trade_information (user_id, date, time, pair, lot_size, entry_price, exit_price, direction, dollar_gained_lost, pips_gained_lost)
VALUES
  (67, '2020-04-25 20:44:45.928704', '7:45AM', 'EUR/USD', '0.01', '1.3900', '1.3800', 'sell', '10', '+100');

-- Makes Notes and Photos table auto-increment id column the way PostgreSQL does it under the hood
CREATE SEQUENCE notes_id_seq;
ALTER TABLE notes ALTER COLUMN id SET DEFAULT nextval('notes_id_seq');
ALTER SEQUENCE notes_id_seq OWNED BY notes.id;

CREATE SEQUENCE photos_id_seq;
ALTER TABLE photos ALTER COLUMN id SET DEFAULT nextval('photos_id_seq');
ALTER SEQUENCE photos_id_seq OWNED BY photos.id;

INSERT INTO
  notes (trade_id, title, body, photo_id)
VALUES
  (1, 'Awesome!', 'Trade is a winner', 1);

INSERT INTO
  photos (note_id, photo_url)
VALUES
  (1, 'https://www.fakeurl.com/');