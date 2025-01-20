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

$response = [];

// Fetch chords
$sql = "SELECT chord_id AS id, chord_name AS name FROM Chords";
$result = $conn->query($sql);
$response['chords'] = $result->fetch_all(MYSQLI_ASSOC);

// Fetch genres
$sql = "SELECT genre_id AS id, genre_name AS name FROM Genres";
$result = $conn->query($sql);
$response['genres'] = $result->fetch_all(MYSQLI_ASSOC);

// Fetch levels
$sql = "SELECT level_id AS id, level_name AS name FROM Levels";
$result = $conn->query($sql);
$response['levels'] = $result->fetch_all(MYSQLI_ASSOC);

// Fetch skills
$sql = "SELECT skill_id AS id, skill_name AS name FROM Skills";
$result = $conn->query($sql);
$response['skills'] = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($response);

$conn->close();
?>
