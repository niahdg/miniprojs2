

-- Create the database
CREATE DATABASE GPRAC;

-- Use the database
USE GPRAC;

-- Table for chords
CREATE TABLE Chords (
    chord_id INT AUTO_INCREMENT PRIMARY KEY,
    chord_name VARCHAR(50) NOT NULL UNIQUE
);

-- Table for genres
CREATE TABLE Genres (
    genre_id INT AUTO_INCREMENT PRIMARY KEY,
    genre_name VARCHAR(50) NOT NULL UNIQUE
);

-- Table for levels
CREATE TABLE Levels (
    level_id INT AUTO_INCREMENT PRIMARY KEY,
    level_name VARCHAR(50) NOT NULL UNIQUE
);

-- Table for skills
CREATE TABLE Skills (
    skill_id INT AUTO_INCREMENT PRIMARY KEY,
    skill_name VARCHAR(50) NOT NULL UNIQUE
);

-- Table for songs
CREATE TABLE Songs (
    song_id INT AUTO_INCREMENT PRIMARY KEY,
    song_name VARCHAR(100) NOT NULL,
    youtube_link VARCHAR(255) NOT NULL,
    lead_sheet_link VARCHAR(255),
    UNIQUE(song_name, youtube_link)
);

-- Table for song-chord relationships (many-to-many)
CREATE TABLE SongChords (
    song_id INT,
    chord_id INT,
    PRIMARY KEY (song_id, chord_id),
    FOREIGN KEY (song_id) REFERENCES Songs(song_id) ON DELETE CASCADE,
    FOREIGN KEY (chord_id) REFERENCES Chords(chord_id) ON DELETE CASCADE
);

-- Table for song-genre relationships (many-to-many)
CREATE TABLE SongGenres (
    song_id INT,
    genre_id INT,
    PRIMARY KEY (song_id, genre_id),
    FOREIGN KEY (song_id) REFERENCES Songs(song_id) ON DELETE CASCADE,
    FOREIGN KEY (genre_id) REFERENCES Genres(genre_id) ON DELETE CASCADE
);

-- Table for song-level relationships (many-to-many)
CREATE TABLE SongLevels (
    song_id INT,
    level_id INT,
    PRIMARY KEY (song_id, level_id),
    FOREIGN KEY (song_id) REFERENCES Songs(song_id) ON DELETE CASCADE,
    FOREIGN KEY (level_id) REFERENCES Levels(level_id) ON DELETE CASCADE
);

-- Table for song-skill relationships (many-to-many)
CREATE TABLE SongSkills (
    song_id INT,
    skill_id INT,
    PRIMARY KEY (song_id, skill_id),
    FOREIGN KEY (song_id) REFERENCES Songs(song_id) ON DELETE CASCADE,
    FOREIGN KEY (skill_id) REFERENCES Skills(skill_id) ON DELETE CASCADE
);

-- Insert sample data into Chords
INSERT INTO Chords (chord_name) VALUES 
('C'), ('G'), ('D'), ('Em'), ('Am'), ('E'), ('A'), 
('F'), ('Dm'), ('Bm'), ('B'), ('Gm'), ('C7'), 
('D7'), ('A7'), ('E7'), ('F#m'), ('Bb'), ('G7'), 
('F7');

-- Insert sample data into Genres
INSERT INTO Genres (genre_name) VALUES 
('Pop'), ('Rock'), ('Country'), ('Blues'), ('Jazz'), 
('Classical'), ('Folk'), ('Reggae'), ('Metal'), 
('R&B'), ('Indie');

-- Insert sample data into Levels
INSERT INTO Levels (level_name) VALUES 
('Beginner'), ('Intermediate'), ('Advanced');

-- Insert sample data into Skills
INSERT INTO Skills (skill_name) VALUES 
('Strumming'), ('Fingerpicking'), ('Barre Chords'), 
('Soloing'), ('Chord Switching');

-- Insert sample data into Songs
INSERT INTO Songs (song_name, youtube_link, lead_sheet_link) VALUES
('Let It Be', 'https://youtu.be/2xDzVZcqtYI', 'https://example.com/let-it-be-lead-sheet'),
('Wonderwall', 'https://youtu.be/Fd9OhpddIVU', 'https://example.com/wonderwall-lead-sheet'),
('Perfect', 'https://youtu.be/2Vv-BfVoq4g', 'https://example.com/perfect-lead-sheet'),
('Shape of You', 'https://youtu.be/JGwWNGJdvx8', 'https://example.com/shape-of-you-lead-sheet'),
('Hallelujah', 'https://youtu.be/y8AWFf7EAc4', 'https://example.com/hallelujah-lead-sheet'),
('Knockin’ on Heaven’s Door', 'https://youtu.be/rq2fKfNryY8', 'https://example.com/knockin-lead-sheet'),
('Sweet Home Alabama', 'https://youtu.be/ye5BuYf8q4o', 'https://example.com/sweet-home-lead-sheet'),
('Imagine', 'https://youtu.be/YkgkThdzX-8', 'https://example.com/imagine-lead-sheet'),
('Thinking Out Loud', 'https://youtu.be/lp-EO5I60KA', 'https://example.com/thinking-out-loud-lead-sheet'),
('Hotel California', 'https://youtu.be/EqPtz5qN7HM', 'https://example.com/hotel-california-lead-sheet'),
('Smoke on the Water', 'https://youtu.be/zUwEIt9ez7M', 'https://example.com/smoke-on-water-lead-sheet'),
('Blackbird', 'https://youtu.be/Man4Xw8Xypo', 'https://example.com/blackbird-lead-sheet'),
('Tears in Heaven', 'https://youtu.be/JxPj3GAYYZ0', 'https://example.com/tears-in-heaven-lead-sheet'),
('Boulevard of Broken Dreams', 'https://youtu.be/Soa3gO7tL-c', 'https://example.com/boulevard-lead-sheet'),
('Yesterday', 'https://youtu.be/NrgmdOz227I', 'https://example.com/yesterday-lead-sheet'),
('Creep', 'https://youtu.be/XFkzRNyygfk', 'https://example.com/creep-lead-sheet'),
('Hey Jude', 'https://youtu.be/A_MjCqQoLLA', 'https://example.com/hey-jude-lead-sheet'),
('Love Yourself', 'https://youtu.be/oyEuk8j8imI', 'https://example.com/love-yourself-lead-sheet'),
('Someone Like You', 'https://youtu.be/hLQl3WQQoQ0', 'https://example.com/someone-like-you-lead-sheet'),
('All of Me', 'https://youtu.be/450p7goxZqg', 'https://example.com/all-of-me-lead-sheet');

-- Insert sample SongChords relationships
INSERT INTO SongChords (song_id, chord_id) VALUES 
(1, 1), (1, 2), (1, 4), (2, 1), (2, 4), 
(2, 6), (3, 5), (3, 2), (4, 4), (4, 9), 
(5, 1), (5, 6), (6, 3), (6, 7), (6, 8), 
(7, 2), (7, 10), (8, 1), (8, 11), (9, 4);

-- Insert sample SongGenres relationships
INSERT INTO SongGenres (song_id, genre_id) VALUES 
(1, 1), (2, 1), (3, 1), (4, 1), (5, 6), 
(6, 3), (7, 2), (8, 2), (9, 1), (10, 2), 
(11, 2), (12, 6), (13, 5), (14, 4), (15, 1), 
(16, 1), (17, 2), (18, 2), (19, 1), (20, 1);

-- Insert sample SongLevels relationships
INSERT INTO SongLevels (song_id, level_id) VALUES 
(1, 1), (2, 1), (3, 2), (4, 2), (5, 3), 
(6, 2), (7, 2), (8, 1), (9, 1), (10, 2), 
(11, 2), (12, 3), (13, 3), (14, 2), (15, 1), 
(16, 2), (17, 3), (18, 2), (19, 1), (20, 1);

-- Insert sample SongSkills relationships
INSERT INTO SongSkills (song_id, skill_id) VALUES 
(1, 1), (2, 3), (3, 1), (4, 2), (5, 4), 
(6, 5), (7, 1), (8, 3), (9, 2), (10, 4), 
(11, 1), (12, 5), (13, 3), (14, 1), (15, 2), 
(16, 3), (17, 5), (18, 4), (19, 2), (20, 1);

-- Verify data
SELECT * FROM Songs;
SELECT * FROM Chords;
SELECT * FROM Genres;
SELECT * FROM Levels;
SELECT * FROM Skills;
