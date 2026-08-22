// =====================================
// Stardima - Gumball Episodes
// =====================================

function episode(number, video = "", download = "", description = "") {

    return {

        title: `الحلقة ${number}`,

        video: video,

        download: download,

        description:
            description ||
            "استمتع بمشاهدة الحلقة، ويمكنك تحميلها للمشاهدة لاحقًا.",

        poster: ""

    };

}


function createSeason(totalEpisodes) {

    const list = [];

    for (let i = 1; i <= totalEpisodes; i++) {

        list.push(
            episode(i)
        );

    }

    return list;

}


// =====================================
// SEASONS
// =====================================

const seasons = {

    1: createSeason(36),

    2: createSeason(40),

    3: createSeason(40),

    4: createSeason(40),

    5: createSeason(40),

    6: createSeason(44)

};


// =====================================
// VIDEO LINKS
// =====================================


// Season 1

seasons[1][0].video = "https://jumpshare.com/s/75BKBXMwzQOA54idFW7k";
seasons[1][0].download = "";

seasons[1][1].video = "https://jumpshare.com/s/75BKBXMwzQOA54idFW7k";
seasons[1][1].download = "";

seasons[1][2].video = "";
seasons[1][2].download = "";


// Continue adding your episodes here.



// Season 2

seasons[2][0].video = "";
seasons[2][0].download = "";



// Season 3

// seasons[3][0].video = "";



// Season 4

// seasons[4][0].video = "";



// Season 5

// seasons[5][0].video = "";



// Season 6

// seasons[6][0].video = "";
