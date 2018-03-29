CREATE table artists (
  id SERIAL primary key,
  artist_name varchar (100),
  artist_website varchar (200)
);

CREATE table venues (
  id SERIAL primary key,
  venue_name varchar (100),
  venue_website varchar (200),
  venue_city varchar (50),
  venue_state varchar (50)
);

CREATE table shows (
  id SERIAL primary key,
  artist integer references artists(id),
  venue integer references venues(id),
  show_date date,
  show_time varchar (25),
  price varchar (50)
);


INSERT INTO artists (artist_name, artist_website)
VALUES ('Band 1', 'www.band1.com');

INSERT INTO artists (artist_name, artist_website)
VALUES ('Group 2', 'www.group2.com');


INSERT INTO venues (venue_name, venue_website, venue_city, venue_state)
VALUES ('Venue 1', 'www.Venue1.com', 'Boston', 'Massachusetts');

INSERT INTO venues (venue_name, venue_website, venue_city, venue_state)
VALUES ('2nd Venue', 'www.2ndVenue.com', 'New York', 'New York');


INSERT INTO shows (show_date, show_time, price, artist, venue)
SELECT to_date('2020-9-14', 'YYYY-MM-DD'), '5pm', '$10', artists.id, venues.id
FROM artists, venues
WHERE artist_name = 'Group 2' and venue_name = 'Venue 1';

INSERT INTO shows (show_date, show_time, price, artist, venue)
SELECT to_date('2019-11-28', 'YYYY-MM-DD'), '10pm', '$15', artists.id, venues.id
FROM artists, venues
WHERE artist_name = 'Band 1' and venue_name = '2nd Venue';
