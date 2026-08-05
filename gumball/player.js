// ===============================
// Stardima - Gumball Player
// ===============================

const player = videojs('videoPlayer');

const seasonSelect = document.getElementById("seasonSelect");
const episodeList = document.getElementById("episodeList");

const episodeTitle = document.getElementById("episodeTitle");
const episodeDescription = document.getElementById("episodeDescription");
const downloadBtn = document.getElementById("downloadBtn");

let currentSeason = 1;

// ===============================
// Load Seasons
// ===============================

function loadSeasons(){

    seasonSelect.innerHTML = "";

    Object.keys(seasons).forEach(season=>{

        const option = document.createElement("option");

        option.value = season;

        option.textContent = "الموسم " + season;

        seasonSelect.appendChild(option);

    });

}

// ===============================
// Load Episodes
// ===============================

function loadEpisodes(){

    episodeList.innerHTML = "";

    seasons[currentSeason].forEach((episode,index)=>{

        const div = document.createElement("div");

        div.className = "episode";

        div.textContent = episode.title;

        div.onclick = ()=>{

            playEpisode(episode);

        };

        episodeList.appendChild(div);

    });

}

// ===============================
// Play Episode
// ===============================

function playEpisode(episode){

    episodeTitle.textContent = episode.title;

    episodeDescription.textContent =
    "استمتع بالمشاهدة على Stardima";

    player.src({

        src: episode.video,

        type:"video/mp4"

    });

    player.poster(episode.poster || "");

    player.load();

    downloadBtn.href = episode.download;

}

// ===============================
// Change Season
// ===============================

seasonSelect.addEventListener("change",()=>{

    currentSeason = Number(seasonSelect.value);

    loadEpisodes();

});

// ===============================
// Start
// ===============================

loadSeasons();

seasonSelect.value = 1;

loadEpisodes();
