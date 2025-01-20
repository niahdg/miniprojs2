<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "GPRAC";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents('php://input'), true);

// Extract filter criteria from the request
$selectedChords = implode(',', $data['chords']);
$selectedGenres = implode(',', $data['genres']);
$selectedLevels = implode(',', $data['levels']);
$selectedSkills = implode(',', $data['skills']);

// SQL query to find matching songs
$query = "
    SELECT DISTINCT s.song_name, s.youtube_link, s.lead_sheet_link
    FROM Songs s
    JOIN SongChords sc ON s.song_id = sc.song_id
    JOIN SongGenres sg ON s.song_id = sg.song_id
    JOIN SongLevels sl ON s.song_id = sl.song_id
    JOIN SongSkills ss ON s.song_id = ss.song_id
    WHERE sc.chord_id IN ($selectedChords)
    AND sg.genre_id IN ($selectedGenres)
    AND sl.level_id IN ($selectedLevels)
    AND ss.skill_id IN ($selectedSkills)
";

$result = $conn->query($query);
$songs = $result->fetch_all(MYSQLI_ASSOC);

// Return matching songs as JSON
echo json_encode($songs);

$conn->close();
?>