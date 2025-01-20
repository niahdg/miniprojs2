<?php
header('Content-Type: application/json'); // Set response type to JSON

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "GPRAC";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch filter parameters
$genre = isset($_GET['genre']) ? $_GET['genre'] : null;
$level = isset($_GET['level']) ? $_GET['level'] : null;
$skill = isset($_GET['skill']) ? $_GET['skill'] : null;

// Base SQL query
$sql = "SELECT s.song_name, s.youtube_link AS video, s.lead_sheet_link AS leadsheet
        FROM Songs s
        LEFT JOIN SongGenres sg ON s.song_id = sg.song_id
        LEFT JOIN SongLevels sl ON s.song_id = sl.song_id
        LEFT JOIN SongSkills ss ON s.song_id = ss.song_id
        WHERE 1";

// Add filters to the query if provided
if ($genre) {
    $sql .= " AND sg.genre_id = '$genre'";
}
if ($level) {
    $sql .= " AND sl.level_id = '$level'";
}
if ($skill) {
    $skillCondition = " AND ss.skill_id IN (" . implode(',', array_map('intval', $skill)) . ")";
    $sql .= $skillCondition;
}

// Execute the query
$result = $conn->query($sql);

// Check if any songs are found
if ($result->num_rows > 0) {
    $songs = [];
    while ($row = $result->fetch_assoc()) {
        $songs[] = [
            'name' => $row['song_name'],
            'video' => $row['video'],
            'leadsheet' => $row['leadsheet']
        ];
    }
    echo json_encode($songs); // Return the result as JSON
} else {
    echo json_encode([]); // No songs found
}

$conn->close();
?>
