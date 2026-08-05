// ==============================
// Stardima Player V3
// ==============================

const player = videojs("videoPlayer", {
    controls: true,
    autoplay: false,
    preload: "auto",
    responsive: true,
    fluid: true,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    controlBar: {
        pictureInPictureToggle: true
    }
});

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

    list.forEach((episode, index) => {

        const div = document.createElement("div");

        div.className = "episode";
        div.textContent = episode.title;

        div.onclick = () => {

            document.querySelectorAll(".episode").forEach(item => {
                item.classList.remove("active");
            });

            div.classList.add("active");

            playEpisode(episode);

        };

        episodeList.appendChild(div);

    });

    // Automatically load first episode
    if (list.length > 0) {

        episodeList.firstChild.classList.add("active");

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

    player.pause();

    player.src({
        src: episode.video,
        type: "video/mp4"
    });

    player.poster(episode.poster || "");

    player.load();

    downloadBtn.href = episode.download || "#";

}

// ==============================
// Change Season
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
