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

// Create a season
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
    1: createSeason(36),
    2: createSeason(40),
    3: createSeason(40),
    4: createSeason(40),
    5: createSeason(40),
    6: createSeason(44)
};

// =====================================
// Add your episode links here
// =====================================

// Season 1
seasons[1][0].video = "blob:https://playfulone.web.app/69213db3-f4b0-4e62-ad62-13a4b9620334";
seasons[1][0].download = "";

seasons[1][1].video = "";
seasons[1][1].download = "";

seasons[1][2].video = "";
seasons[1][2].download = "";

// Season 2
seasons[2][0].video = "";
seasons[2][0].download = "";

// Season 3
// seasons[3][0].video = "";
// seasons[3][0].download = "";

// Season 4
// seasons[4][0].video = "";
// seasons[4][0].download = "";

// Season 5
// seasons[5][0].video = "";
// seasons[5][0].download = "";

// Season 6
// seasons[6][0].video = "";
// seasons[6][0].download = "";
