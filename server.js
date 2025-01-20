const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'GPRAC',
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

// Fetch songs with filters
app.get('/songs', (req, res) => {
    const { genre, level, skill } = req.query;
    let query = `
        SELECT Songs.song_name AS name, Songs.youtube_link AS video, Songs.lead_sheet_link AS leadsheet 
        FROM Songs 
        JOIN SongGenres ON Songs.song_id = SongGenres.song_id
        JOIN Genres ON SongGenres.genre_id = Genres.genre_id
        JOIN SongLevels ON Songs.song_id = SongLevels.song_id
        JOIN Levels ON SongLevels.level_id = Levels.level_id
        JOIN SongSkills ON Songs.song_id = SongSkills.song_id
        JOIN Skills ON SongSkills.skill_id = Skills.skill_id
        WHERE 1=1
    `;

    if (genre) query += ` AND Genres.genre_name = '${genre}'`;
    if (level) query += ` AND Levels.level_name = '${level}'`;
    if (skill) query += ` AND Skills.skill_name IN (${skill.split(',').map(s => `'${s}'`).join(',')})`;

    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching data.');
        } else {
            res.json(results);
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
