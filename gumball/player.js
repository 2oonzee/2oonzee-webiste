// ===============================
// Stardima Player System V2
// ===============================

const seasonSelect = document.getElementById("seasonSelect");
const episodeList = document.getElementById("episodeList");

const episodeTitle = document.getElementById("episodeTitle");
const episodeDescription = document.getElementById("episodeDescription");

const downloadBtn = document.getElementById("downloadBtn");

const modal = document.getElementById("playerModal");
const closeModal = document.getElementById("closeModal");

const playerOne = document.getElementById("playerOne");
const playerTwo = document.getElementById("playerTwo");
const playerThree = document.getElementById("playerThree");

let currentSeason = 1;
let currentEpisode = null;

// ----------------------------
// Fill Seasons
// ----------------------------

for(const season in seasons){

    const option = document.createElement("option");

    option.value = season;

    option.textContent = "الموسم " + season;

    seasonSelect.appendChild(option);

}

// ----------------------------
// Load Episodes
// ----------------------------

function loadEpisodes(){

    episodeList.innerHTML = "";

    seasons[currentSeason].forEach((ep,index)=>{

        const div = document.createElement("div");

        div.className = "episode";

        div.innerHTML = `
        ▶ ${ep.title}
        `;

        div.onclick = ()=>{

            currentEpisode = index;

            updateEpisode();

            openPlayerPopup();

        };

        episodeList.appendChild(div);

    });

}

// ----------------------------
// Update Episode
// ----------------------------

function updateEpisode(){

    const ep = seasons[currentSeason][currentEpisode];

    episodeTitle.textContent =
    "الموسم " +
    currentSeason +
    " • " +
    ep.title;

    episodeDescription.textContent =
    "اختر أحد المشغلات لبدء المشاهدة.";

    downloadBtn.href = ep.download || "#";

}

// ----------------------------
// Popup
// ----------------------------

function openPlayerPopup(){

    modal.style.display = "flex";

}

function closePlayerPopup(){

    modal.style.display = "none";

}

closeModal.onclick = closePlayerPopup;

modal.onclick = (e)=>{

    if(e.target===modal){

        closePlayerPopup();

    }

};

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closePlayerPopup();

    }

});

// ----------------------------
// Players
// ----------------------------

playerOne.onclick = ()=>{

    const ep = seasons[currentSeason][currentEpisode];

    if(ep.players.one){

        window.open(ep.players.one,"_blank");

    }

};

playerTwo.onclick = ()=>{

    const ep = seasons[currentSeason][currentEpisode];

    if(ep.players.two){

        window.open(ep.players.two,"_blank");

    }

};

playerThree.onclick = ()=>{

    const ep = seasons[currentSeason][currentEpisode];

    if(ep.players.three){

        window.open(ep.players.three,"_blank");

    }

};

// ----------------------------
// Season Change
// ----------------------------

seasonSelect.onchange = ()=>{

    currentSeason = Number(seasonSelect.value);

    currentEpisode = null;

    episodeTitle.textContent = "اختر حلقة";

    episodeDescription.textContent =
    "اختر حلقة من القائمة ثم اختر المشغل المناسب.";

    downloadBtn.href = "#";

    loadEpisodes();

};

// ----------------------------
// Start
// ----------------------------

loadEpisodes();
