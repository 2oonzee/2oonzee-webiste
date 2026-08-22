// =====================================
// Stardima - Gumball Video.js Player
// =====================================

const player = videojs("videoPlayer", {

    controls: true,

    autoplay: false,

    preload: "metadata",

    responsive: true,

    fluid: true,

    playbackRates: [
        0.5,
        0.75,
        1,
        1.25,
        1.5,
        2
    ]

});


const seasonSelect =
    document.getElementById("seasonSelect");

const episodeList =
    document.getElementById("episodeList");

const episodeTitle =
    document.getElementById("episodeTitle");

const episodeDescription =
    document.getElementById("episodeDescription");

const downloadBtn =
    document.getElementById("downloadEpisode");

const prevBtn =
    document.getElementById("prevEpisode");

const nextBtn =
    document.getElementById("nextEpisode");


let currentSeason = 1;

let currentEpisode = 0;


// =====================================
// LOAD SEASONS
// =====================================

function loadSeasons() {

    seasonSelect.innerHTML = "";

    Object.keys(seasons).forEach(function(season) {

        const option =
            document.createElement("option");

        option.value = season;

        option.textContent =
            `الموسم ${season}`;

        seasonSelect.appendChild(option);

    });

}


// =====================================
// LOAD EPISODES
// =====================================

function loadEpisodes() {

    episodeList.innerHTML = "";

    const list = seasons[currentSeason];

    if (!list) {
        return;
    }


    list.forEach(function(episode, index) {

        const div =
            document.createElement("div");

        div.className = "episode";


        if (index === currentEpisode) {

            div.classList.add("active");

        }


        div.innerHTML = `

            <div class="episode-left">

                <span>
                    🎬
                </span>

                <span class="episode-title">
                    ${episode.title}
                </span>

            </div>

            <span>
                ▶
            </span>

        `;


        div.addEventListener(
            "click",
            function() {

                currentEpisode = index;

                loadEpisodes();

                playEpisode(episode);

            }
        );


        episodeList.appendChild(div);

    });

}


// =====================================
// PLAY EPISODE
// =====================================

function playEpisode(episode) {

    if (!episode) {
        return;
    }


    episodeTitle.textContent =
        `الموسم ${currentSeason} • ${episode.title}`;


    episodeDescription.textContent =
        episode.description;


    // Video

    if (
        episode.video &&
        episode.video.trim() !== ""
    ) {

        player.src({

            src: episode.video,

            type: "video/mp4"

        });


        if (episode.poster) {

            player.poster(
                episode.poster
            );

        }


        player.load();

    }


    else {

        player.pause();

        episodeDescription.textContent =
            "لم تتم إضافة رابط الفيديو لهذه الحلقة بعد.";

    }


    // Download

    if (
        episode.download &&
        episode.download.trim() !== ""
    ) {

        downloadBtn.href =
            episode.download;

        downloadBtn.style.opacity = "1";

        downloadBtn.style.pointerEvents =
            "auto";

    }

    else {

        downloadBtn.href = "#";

        downloadBtn.style.opacity = ".5";

        downloadBtn.style.pointerEvents =
            "none";

    }


    updateButtons();

}


// =====================================
// BUTTONS
// =====================================

function updateButtons() {

    const list =
        seasons[currentSeason];

    if (!list) {
        return;
    }


    prevBtn.disabled =
        currentEpisode === 0;


    nextBtn.disabled =
        currentEpisode >= list.length - 1;

}


// =====================================
// PREVIOUS
// =====================================

prevBtn.addEventListener(
    "click",
    function() {

        if (currentEpisode <= 0) {
            return;
        }


        currentEpisode--;


        loadEpisodes();


        playEpisode(
            seasons[currentSeason][currentEpisode]
        );

    }
);


// =====================================
// NEXT
// =====================================

nextBtn.addEventListener(
    "click",
    function() {

        const list =
            seasons[currentSeason];


        if (!list) {
            return;
        }


        if (
            currentEpisode >=
            list.length - 1
        ) {

            return;

        }


        currentEpisode++;


        loadEpisodes();


        playEpisode(
            list[currentEpisode]
        );

    }
);


// =====================================
// CHANGE SEASON
// =====================================

seasonSelect.addEventListener(
    "change",
    function() {

        currentSeason =
            Number(seasonSelect.value);


        currentEpisode = 0;


        loadEpisodes();


        playEpisode(
            seasons[currentSeason][0]
        );

    }
);


// =====================================
// START
// =====================================

loadSeasons();

seasonSelect.value =
    String(currentSeason);

loadEpisodes();

playEpisode(
    seasons[currentSeason][0]
);
