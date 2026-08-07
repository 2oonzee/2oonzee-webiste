// =====================================
// Stardima Player - Video.js
// =====================================

const player = videojs("videoPlayer", {
    controls: true,
    autoplay: false,
    preload: "metadata",
    responsive: true,
    fluid: true,
    playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 2]
});

const seasonSelect = document.getElementById("seasonSelect");
const episodeList = document.getElementById("episodeList");

const episodeTitle = document.getElementById("episodeTitle");
const episodeDescription = document.getElementById("episodeDescription");

const downloadBtn = document.getElementById("downloadEpisode");
const prevBtn = document.getElementById("prevEpisode");
const nextBtn = document.getElementById("nextEpisode");

let currentSeason = 1;
let currentEpisode = 0;


// =====================================
// Seasons
// =====================================

function loadSeasons() {

    seasonSelect.innerHTML = "";

    Object.keys(seasons).forEach((season) => {

        const option = document.createElement("option");

        option.value = season;
        option.textContent = `الموسم ${season}`;

        seasonSelect.appendChild(option);

    });

}


// =====================================
// Episodes
// =====================================

function loadEpisodes() {

    episodeList.innerHTML = "";

    const list = seasons[currentSeason];

    if (!list || list.length === 0) {
        return;
    }

    list.forEach((episode, index) => {

        const div = document.createElement("div");

        div.className = "episode";

        if (index === currentEpisode) {
            div.classList.add("active");
        }

        div.innerHTML = `
            <div class="episode-left">
                <span class="episode-icon">🎬</span>
                <span class="episode-title">${episode.title}</span>
            </div>

            <span class="episode-arrow">▶</span>
        `;

        div.addEventListener("click", () => {

            currentEpisode = index;

            loadEpisodes();
            playEpisode(episode);

        });

        episodeList.appendChild(div);

    });

}


// =====================================
// Play Episode
// =====================================

function playEpisode(episode) {

    if (!episode) {
        return;
    }

    episodeTitle.textContent =
        `الموسم ${currentSeason} • ${episode.title}`;

    episodeDescription.textContent =
        episode.description ||
        "نتمنى لكم مشاهدة ممتعة ويمكنكم تحميل الحلقة في أي وقت.";


    // -----------------------------
    // Video source
    // -----------------------------

    if (episode.video && episode.video.trim() !== "") {

        player.src({
            src: episode.video,
            type: "video/mp4"
        });

        if (episode.poster) {
            player.poster(episode.poster);
        }

        player.load();

    } else {

        player.pause();

        player.removeAttribute("src");

        episodeDescription.textContent =
            "لم تتم إضافة رابط الفيديو لهذه الحلقة بعد.";

    }


    // -----------------------------
    // Download
    // -----------------------------

    if (episode.download && episode.download.trim() !== "") {

        downloadBtn.href = episode.download;
        downloadBtn.style.pointerEvents = "auto";
        downloadBtn.style.opacity = "1";

    } else {

        downloadBtn.href = "#";
        downloadBtn.style.pointerEvents = "none";
        downloadBtn.style.opacity = "0.5";

    }

    updateNavigation();

}


// =====================================
// Navigation
// =====================================

function updateNavigation() {

    const list = seasons[currentSeason];

    if (!list) {
        return;
    }

    prevBtn.disabled = currentEpisode <= 0;

    nextBtn.disabled =
        currentEpisode >= list.length - 1;

}


// =====================================
// Previous
// =====================================

prevBtn.addEventListener("click", () => {

    if (currentEpisode <= 0) {
        return;
    }

    currentEpisode--;

    loadEpisodes();

    playEpisode(
        seasons[currentSeason][currentEpisode]
    );

});


// =====================================
// Next
// =====================================

nextBtn.addEventListener("click", () => {

    const list = seasons[currentSeason];

    if (!list) {
        return;
    }

    if (currentEpisode >= list.length - 1) {
        return;
    }

    currentEpisode++;

    loadEpisodes();

    playEpisode(list[currentEpisode]);

});


// =====================================
// Season change
// =====================================

seasonSelect.addEventListener("change", () => {

    currentSeason = Number(seasonSelect.value);

    currentEpisode = 0;

    loadEpisodes();

    playEpisode(
        seasons[currentSeason][0]
    );

});


// =====================================
// Start
// =====================================

loadSeasons();

seasonSelect.value = String(currentSeason);

loadEpisodes();

playEpisode(
    seasons[currentSeason][0]
);
