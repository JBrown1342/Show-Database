CREATE table artists (
  id SERIAL primary key,
  artist_name varchar (100),
  artist_website varchar (200)
);

INSERT INTO artists (artist_name, artist_website)
VALUES ('Band 1', 'www.band1.com');

INSERT INTO artists (artist_name, artist_website)
VALUES ('Group 2', 'www.group2.com');
