document.addEventListener('DOMContentLoaded', function () {
    const resultsDiv = document.getElementById('results');
    const genreSelect = document.getElementById('genre');
    const levelSelect = document.getElementById('level');
    const skillSelect = document.getElementById('skill');

    // Fetch songs from the server (replace URL with your server endpoint)
    async function fetchSongs(filters = {}) {
        const query = new URLSearchParams(filters).toString();
        const response = await fetch(`https://your-server-url/songs?${query}`);
        const songs = await response.json();
        return songs;
    }

    // Render songs in the results section
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

    // Apply filters and fetch data
    async function applyFilters() {
        const filters = {
            genre: genreSelect.value === "all" ? null : genreSelect.value,
            level: levelSelect.value === "all" ? null : levelSelect.value,
            skill: [...skillSelect.selectedOptions].map(option => option.value).includes("all")
                ? null
                : [...skillSelect.selectedOptions].map(option => option.value),
        };

        const songs = await fetchSongs(filters);
        renderSongs(songs);
    }

    // Clear filters and fetch all songs
    async function clearFilters() {
        genreSelect.value = "all";
        levelSelect.value = "all";
        skillSelect.value = "all";
        const songs = await fetchSongs();
        renderSongs(songs);
    }

    // Initial render
    applyFilters();
});

    }

    initialize();
    }
