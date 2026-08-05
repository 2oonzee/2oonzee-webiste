// ==============================
// Stardima V2 Player
// ==============================

const player = videojs("videoPlayer", {
    controls: true,
    autoplay: false,
    preload: "auto",
    responsive: true,
    fluid: true
});

const seasonSelect = document.getElementById("seasonSelect");
const episodeList = document.getElementById("episodeList");

const episodeTitle = document.getElementById("episodeTitle");
const episodeDescription = document.getElementById("episodeDescription");
const downloadBtn = document.getElementById("downloadBtn");

let currentSeason = 1;
let currentEpisode = null;

// ==============================
// Load Seasons
// ==============================

function loadSeasons() {

    seasonSelect.innerHTML = "";

    Object.keys(seasons).forEach(season => {

        const option = document.createElement("option");

        option.value = season;
        option.textContent = "الموسم " + season;

        seasonSelect.appendChild(option);

    });

}

// ==============================
// Load Episodes
// ==============================

function loadEpisodes() {

    episodeList.innerHTML = "";

    seasons[currentSeason].forEach((episode) => {

        const item = document.createElement("div");

        item.className = "episode";
        item.textContent = episode.title;

        item.onclick = () => {

            document
                .querySelectorAll(".episode")
                .forEach(e => e.classList.remove("active"));

            item.classList.add("active");

            playEpisode(episode);

        };

        episodeList.appendChild(item);

    });

}

// ==============================
// Play Episode
// ==============================

function playEpisode(episode) {

    currentEpisode = episode;

    episodeTitle.textContent = episode.title;

    episodeDescription.textContent =
        "نتمنى لكم مشاهدة ممتعة، ويمكنكم تحميل الحلقة لمشاهدتها لاحقًا.";

    player.pause();

    player.src({
        src: episode.video,
        type: "video/mp4"
    });

    if (episode.poster) {
        player.poster(episode.poster);
    }

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
// Start Website
// ==============================

loadSeasons();

seasonSelect.value = 1;

loadEpisodes();
