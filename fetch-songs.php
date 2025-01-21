<?php
// Database connection
$host = 'localhost';
$dbname = 'GPRAC';
$username = 'root';
$password = '';

$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Get filters from the frontend
$filters = json_decode(file_get_contents("php://input"), true);

$query = "
    SELECT DISTINCT s.song_name AS name, s.youtube_link, s.lead_sheet_link
    FROM Songs s
    LEFT JOIN SongGenres sg ON s.song_id = sg.song_id
    LEFT JOIN Genres g ON sg.genre_id = g.genre_id
    LEFT JOIN SongLevels sl ON s.song_id = sl.song_id
    LEFT JOIN Levels l ON sl.level_id = l.level_id
    LEFT JOIN SongSkills ss ON s.song_id = ss.song_id
    LEFT JOIN Skills sk ON ss.skill_id = sk.skill_id
    WHERE 1=1
";

$params = [];

// Apply filters dynamically
if (!empty($filters["genre"])) {
    $query .= " AND g.genre_name = :genre";
    $params[":genre"] = $filters["genre"];
}

if (!empty($filters["level"])) {
    $query .= " AND l.level_name = :level";
    $params[":level"] = $filters["level"];
}

if (!empty($filters["skills"])) {
    $query .= " AND sk.skill_name IN (" . str_repeat("?,", count($filters["skills"]) - 1) . "?)";
    $params = array_merge($params, $filters["skills"]);
}

// Execute query
$stmt = $conn->prepare($query);
$stmt->execute($params);
$songs = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($songs);
?>
