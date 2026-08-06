// =====================================
// Stardima Player V3 (Plyr)
// =====================================

const player = new Plyr('#player', {
    controls: [
        'play-large',
        'play',
        'progress',
        'current-time',
        'duration',
        'mute',
        'volume',
        'settings',
        'pip',
        'fullscreen'
    ],

    settings: ['speed'],

    speed: {
        selected: 1,
        options: [0.5, 0.75, 1, 1.25, 1.5, 2]
    }
});

const video = document.getElementById("player");

const seasonSelect = document.getElementById("seasonSelect");
const episodeList = document.getElementById("episodeList");

const episodeTitle = document.getElementById("episodeTitle");
const episodeDescription = document.getElementById("episodeDescription");
const downloadBtn = document.getElementById("downloadBtn");

let currentSeason = 1;

// ==============================
// Seasons
// ==============================

function loadSeasons() {

    seasonSelect.innerHTML = "";

    Object.keys(seasons).forEach(season => {

        const option = document.createElement("option");

        option.value = season;
        option.textContent = `الموسم ${season}`;

        seasonSelect.appendChild(option);

    });

}

// ==============================
// Episodes
// ==============================

function loadEpisodes() {

    episodeList.innerHTML = "";

    const list = seasons[currentSeason];

    list.forEach((episode) => {

        const div = document.createElement("div");

        div.className = "episode";

        div.innerHTML = `
            <div class="episode-left">
                <span class="episode-icon">🎬</span>
                <span class="episode-title">${episode.title}</span>
            </div>

            <span class="episode-arrow">▶</span>
        `;

        div.onclick = () => {

            document.querySelectorAll(".episode").forEach(item => {
                item.classList.remove("active");
            });

            div.classList.add("active");

            playEpisode(episode);

        };

        episodeList.appendChild(div);

    });

    if (list.length) {

        episodeList.firstElementChild.classList.add("active");

        playEpisode(list[0]);

    }

}

// ==============================
// Player
// ==============================

function playEpisode(episode) {

    episodeTitle.textContent = episode.title;

    episodeDescription.textContent =
        episode.description ||
        "نتمنى لكم مشاهدة ممتعة ويمكنكم تحميل الحلقة في أي وقت.";

    video.src = episode.video || "";

    video.poster = episode.poster || "";

    video.load();

    downloadBtn.href = episode.download || "#";

}

// ==============================
// Season Changed
// ==============================

seasonSelect.addEventListener("change", () => {

    currentSeason = Number(seasonSelect.value);

    loadEpisodes();

});

// ==============================
// Start
// ==============================

loadSeasons();

seasonSelect.value = 1;

loadEpisodes();
