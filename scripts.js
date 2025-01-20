document.addEventListener('DOMContentLoaded', function () {
    const songs = [
        {
            name: "Wonderwall",
            chords: ["C", "G", "D", "Am"],
            genre: "rock",
            level: "beginner",
            skills: ["strumming"],
            video: "https://www.youtube.com/watch?v=6hzrDeceEKc",
            leadsheet: "leadsheets/wonderwall.pdf"
        },
        {
            name: "Let It Be",
            chords: ["C", "G", "Am", "F"],
            genre: "pop",
            level: "beginner",
            skills: ["fingerpicking"],
            video: "https://www.youtube.com/watch?v=2xDzVZcqtYI",
            leadsheet: "leadsheets/letitbe.pdf"
        },
    ];

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "";

    // Replace this with actual filter criteria logic from previous pages
    const filteredSongs = songs; // Placeholder: Adjust based on user input

    if (filteredSongs.length > 0) {
        filteredSongs.forEach(song => {
            resultsDiv.innerHTML += `
                <div>
                    <h3>${song.name}</h3>
                    <a href="${song.video}" target="_blank">Watch Video</a><br>
                    <a href="${song.leadsheet}" target="_blank">View Lead Sheet</a>
                </div>
                <hr>
            `;
        });
    } else {
        resultsDiv.innerHTML = "<p>No songs found that match your criteria.</p>";
    }
});