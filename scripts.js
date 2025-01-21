document.addEventListener('DOMContentLoaded', function () {
    const songs = [
        {
           {
  name: "Let It Be",
  chords: ["C", "G", "Am", "F"],
  genre: "pop",
  level: "beginner",
  skills: ["fingerpicking"],
  video: "https://youtu.be/2xDzVZcqtYI",
  leadsheet: "https://example.com/let-it-be-lead-sheet"
},
{
  name: "Wonderwall",
  chords: ["Em", "G", "D", "A7"],
  genre: "pop",
  level: "beginner",
  skills: ["strumming"],
  video: "https://youtu.be/Fd9OhpddIVU",
  leadsheet: "https://example.com/wonderwall-lead-sheet"
},
{
  name: "Perfect",
  chords: ["G", "Em", "C", "D"],
  genre: "pop",
  level: "beginner",
  skills: ["strumming"],
  video: "https://youtu.be/2Vv-BfVoq4g",
  leadsheet: "https://example.com/perfect-lead-sheet"
},
{
  name: "Shape of You",
  chords: ["C#m", "F#m", "A", "B"],
  genre: "pop",
  level: "beginner",
  skills: ["strumming"],
  video: "https://youtu.be/JGwWNGJdvx8",
  leadsheet: "https://example.com/shape-of-you-lead-sheet"
},
{
  name: "Hallelujah",
  chords: ["C", "Am", "F", "G"],
  genre: "pop",
  level: "beginner",
  skills: ["fingerpicking"],
  video: "https://youtu.be/y8AWFf7EAc4",
  leadsheet: "https://example.com/hallelujah-lead-sheet"
},
{
  name: "Knockin’ on Heaven’s Door",
  chords: ["G", "D", "Am", "C"],
  genre: "rock",
  level: "beginner",
  skills: ["strumming"],
  video: "https://youtu.be/rq2fKfNryY8",
  leadsheet: "https://example.com/knockin-lead-sheet"
},
{
  name: "Sweet Home Alabama",
  chords: ["D", "C", "G"],
  genre: "rock",
  level: "beginner",
  skills: ["strumming"],
  video: "https://youtu.be/ye5BuYf8q4o",
  leadsheet: "https://example.com/sweet-home-lead-sheet"
},
{
  name: "Imagine",
  chords: ["C", "Cmaj7", "F", "Am"],
  genre: "pop",
  level: "beginner",
  skills: ["fingerpicking"],
  video: "https://youtu.be/YkgkThdzX-8",
  leadsheet: "https://example.com/imagine-lead-sheet"
},
{
  name: "Thinking Out Loud",
  chords: ["D", "A", "Bm", "G"],
  genre: "pop",
  level: "beginner",
  skills: ["strumming"],
  video: "https://youtu.be/lp-EO5I60KA",
  leadsheet: "https://example.com/thinking-out-loud-lead-sheet"
},
{
  name: "Hotel California",
  chords: ["B", "F#", "A", "E"],
  genre: "rock",
  level: "intermediate",
  skills: ["fingerpicking"],
  video: "https://youtu.be/EqPtz5qN7HM",
  leadsheet: "https://example.com/hotel-california-lead-sheet"
},
{
  name: "Smoke on the Water",
  chords: ["G", "Bb", "C", "D"],
  genre: "rock",
  level: "beginner",
  skills: ["strumming"],
  video: "https://youtu.be/zUwEIt9ez7M",
  leadsheet: "https://example.com/smoke-on-water-lead-sheet"
},
{
  name: "Blackbird",
  chords: ["G", "Am", "C", "D"],
  genre: "rock",
  level: "intermediate",
  skills: ["fingerpicking"],
  video: "https://youtu.be/Man4Xw8Xypo",
  leadsheet: "https://example.com/blackbird-lead-sheet"
},
{
  name: "Tears in Heaven",
  chords: ["A", "E", "F#m", "D"],
  genre: "pop",
  level: "beginner",
  skills: ["fingerpicking"],
  video: "https://youtu.be/JxPj3GAYYZ0",
  leadsheet: "https://example.com/tears-in-heaven-lead-sheet"
},
{
  name: "Boulevard of Broken Dreams",
  chords: ["Em", "G", "D", "A"],
  genre: "rock",
  level: "beginner",
  skills: ["strumming"],
  video: "https://youtu.be/Soa3gO7tL-c",
  leadsheet: "https://example.com/boulevard-lead-sheet"
},
{
  name: "Yesterday",
  chords: ["F", "C", "G7", "Am"],
  genre: "pop",
  level: "beginner",
  skills: ["strumming"],
  video: "https://youtu.be/NrgmdOz227I",
  leadsheet: "https://example.com/yesterday-lead-sheet"
},
{
  name: "Creep",
  chords: ["G", "B", "C", "Cm"],
  genre: "rock",
  level: "beginner",
  skills: ["strumming"],
  video: "https://youtu.be/XFkzRNyygfk",
  leadsheet: "https://example.com/creep-lead-sheet"
},
{
  name: "Hey Jude",
  chords: ["F", "C", "G", "Am"],
  genre: "pop",
  level: "beginner",
  skills: ["strumming"],
  video: "https://youtu.be/A_MjCqQoLLA",
  leadsheet: "https://example.com/hey-jude-lead-sheet"
},
{
  name: "Love Yourself",
  chords: ["E", "C#m", "A", "B"],
  genre: "pop",
  level: "beginner",
  skills: ["strumming"],
  video: "https://youtu.be/oyEuk8j8imI",
  leadsheet: "https://example.com/love-yourself-lead-sheet"
},
{
  name: "Someone Like You",
  chords: ["A", "E", "F#m", "D"],
  genre: "pop",
  level: "beginner",
  skills: ["fingerpicking"],
  video: "https://youtu.be/hLQl3WQQoQ0",
  leadsheet: "https://example.com/someone-like-you-lead-sheet"
},
{
  name: "All of Me",
  chords: ["C", "Am", "F", "G"],
  genre: "pop",
  level: "beginner",
  skills: ["strumming"],
  video: "https://youtu.be/450p7goxZqg",
  leadsheet: "https://example.com/all-of-me-lead-sheet"
}

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
