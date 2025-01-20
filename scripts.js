document.addEventListener("DOMContentLoaded", async function () {
    const resultsDiv = document.getElementById("results");
    const filterGenre = document.getElementById("filter-genre");
    const filterLevel = document.getElementById("filter-level");
    const filterSkills = document.getElementById("filter-skills");
    const clearFiltersButton = document.getElementById("clear-filters");

    // Fetch songs from the database
    async function fetchSongs() {
        const response = await fetch("https://your-github-link-to-json-or-api/songs.json");
        return response.json();
    }

    // Placeholder for filters - replace these with actual user inputs from the filter page
    const userFilters = {
        genre: "rock",
        level: "beginner",
        skills: ["strumming"]
    };

    // Filter songs based on userFilters
    function filterSongs(songs, filters) {
        return songs.filter(song => {
            const genreMatch = filters.genre === "All" || song.genre === filters.genre;
            const levelMatch = filters.level === "All" || song.level === filters.level;
            const skillsMatch =
                filters.skills.length === 0 ||
                filters.skills.every(skill => song.skills.includes(skill));
            return genreMatch && levelMatch && skillsMatch;
        });
    }

    // Render songs to the resultsDiv
    function renderSongs(songs) {
        resultsDiv.innerHTML = "";

        if (songs.length > 0) {
            songs.forEach(song => {
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
    }

    // Initialize filters and render results
    async function initialize() {
        const songs = await fetchSongs();

        // Display filters on the bar
        filterGenre.textContent = userFilters.genre || "All";
        filterLevel.textContent = userFilters.level || "All";
        filterSkills.textContent = userFilters.skills.length > 0 ? userFilters.skills.join(", ") : "All";

        // Filter and render songs
        const filteredSongs = filterSongs(songs, userFilters);
        renderSongs(filteredSongs);

        // Clear filters functionality
        clearFiltersButton.addEventListener("click", () => {
            userFilters.genre = "All";
            userFilters.level = "All";
            userFilters.skills = [];
            filterGenre.textContent = "All";
            filterLevel.textContent = "All";
            filterSkills.textContent = "All";

            renderSongs(songs); // Render all songs
        });
    }

    initialize();
    }
