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


});
