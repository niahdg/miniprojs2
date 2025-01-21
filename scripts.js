document.addEventListener("DOMContentLoaded", function () {
    const resultsDiv = document.getElementById("results");

    // Fetch and display songs based on filters
    function fetchSongs(filters = {}) {
        fetch("fetch_songs.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(filters),
        })
            .then(response => response.json())
            .then(data => {
                resultsDiv.innerHTML = ""; // Clear previous results

                if (data.length > 0) {
                    data.forEach(song => {
                        resultsDiv.innerHTML += `
                            <div>
                                <h3>${song.name}</h3>
                                <a href="${song.youtube_link}" target="_blank">Watch Video</a><br>
                                <a href="${song.lead_sheet_link}" target="_blank">View Lead Sheet</a>
                            </div>
                            <hr>
                        `;
                    });
                } else {
                    resultsDiv.innerHTML = "<p>No songs found that match your criteria.</p>";
                }
            });
    }

    // Apply filters
    document.getElementById("apply-filters").addEventListener("click", function () {
        const filters = {
            genre: document.getElementById("genre").value,
            level: document.getElementById("level").value,
            skills: Array.from(document.getElementById("skills").selectedOptions).map(
                option => option.value
            ),
        };
        fetchSongs(filters);
    });

    // Clear filters
    document.getElementById("clear-filters").addEventListener("click", function () {
        document.getElementById("filters-form").reset();
        fetchSongs(); // Fetch all songs
    });

    // Initial fetch (no filters applied)
    fetchSongs();
});


    }

    initialize();
    }
