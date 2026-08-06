// =====================================
// Stardima V3 - Episodes
// =====================================

// Create one episode
function episode(number, video = "", download = "", description = "") {
    return {
        title: `الحلقة ${number}`,
        description:
            description ||
            "استمتع بمشاهدة الحلقة، ويمكنك تحميلها للمشاهدة لاحقًا.",

        // Video URL
        video: video,

        // Download URL
        download: download,

        // Optional thumbnail
        poster: ""
    };
}

// Create an empty season
function createSeason(totalEpisodes) {

    const list = [];

    for (let i = 1; i <= totalEpisodes; i++) {

        list.push(episode(i));

    }

    return list;

}

// =====================================
// Seasons
// =====================================

const seasons = {

    // Season 1
    1: createSeason(36),

    // Season 2
    2: createSeason(40),

    // Season 3
    3: createSeason(40),

    // Season 4
    4: createSeason(40),

    // Season 5
    5: createSeason(40),

    // Season 6
    6: createSeason(44)

};

// =====================================
// Add your video links here
// =====================================

// -------- Season 1 --------

seasons[1][0].video = "";
seasons[1][0].download = "";

seasons[1][1].video = "";
seasons[1][1].download = "";

seasons[1][2].video = "";
seasons[1][2].download = "";

// Continue adding more...

// -------- Season 2 --------

seasons[2][0].video = "";
seasons[2][0].download = "";

// Continue...

// -------- Season 3 --------

// seasons[3][0].video = "";
// seasons[3][0].download = "";

// -------- Season 4 --------

// -------- Season 5 --------

// -------- Season 6 --------
