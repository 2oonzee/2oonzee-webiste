// =====================================
// Stardima - Gumball Episodes
// Supports MP4 + Jumpshare Embeds
// =====================================


// =====================================
// Create Episode
// =====================================

function episode(
    number,
    video = "",
    embed = "",
    download = "",
    description = ""
) {

    return {

        title: `الحلقة ${number}`,

        // Direct MP4/video URL
        video: video,

        // Embedded player URL
        // Example:
        // https://jumpshare.com/embed/XXXXXXXX
        embed: embed,

        // Download URL
        download: download,

        // Episode description
        description:
            description ||
            "استمتع بمشاهدة الحلقة، ويمكنك تحميلها للمشاهدة لاحقًا.",

        // Optional poster
        poster: ""

    };

}


// =====================================
// Create Empty Season
// =====================================

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
// SEASON 1
// =====================================


// Episode 1 - Jumpshare

seasons[1][0].embed =
    "https://jumpshare.com/embed/75BKBXMwzQOA54idFW7k";


// Episode 2

seasons[1][1].video = "https://jumpshare.com/embed/75BKBXMwzQOA54idFW7k";

seasons[1][1].download = "";


// Episode 3

seasons[1][2].video = "";

seasons[1][2].download = "";


// Episode 4

seasons[1][3].video = "";

seasons[1][3].download = "";


// Episode 5

seasons[1][4].video = "";

seasons[1][4].download = "";


// Episode 6

seasons[1][5].video = "";

seasons[1][5].download = "";


// Episode 7

seasons[1][6].video = "";

seasons[1][6].download = "";


// Episode 8

seasons[1][7].video = "";

seasons[1][7].download = "";


// Episode 9

seasons[1][8].video = "";

seasons[1][8].download = "";


// Episode 10

seasons[1][9].video = "";

seasons[1][9].download = "";


// Episode 11

seasons[1][10].video = "";

seasons[1][10].download = "";


// Episode 12

seasons[1][11].video = "";

seasons[1][11].download = "";


// Episode 13

seasons[1][12].video = "";

seasons[1][12].download = "";


// Episode 14

seasons[1][13].video = "";

seasons[1][13].download = "";


// Episode 15

seasons[1][14].video = "";

seasons[1][14].download = "";


// Episode 16

seasons[1][15].video = "";

seasons[1][15].download = "";


// Episode 17

seasons[1][16].video = "";

seasons[1][16].download = "";


// Episode 18

seasons[1][17].video = "";

seasons[1][17].download = "";


// Episode 19

seasons[1][18].video = "";

seasons[1][18].download = "";


// Episode 20

seasons[1][19].video = "";

seasons[1][19].download = "";


// Episode 21

seasons[1][20].video = "";

seasons[1][20].download = "";


// Episode 22

seasons[1][21].video = "";

seasons[1][21].download = "";


// Episode 23

seasons[1][22].video = "";

seasons[1][22].download = "";


// Episode 24

seasons[1][23].video = "";

seasons[1][23].download = "";


// Episode 25

seasons[1][24].video = "";

seasons[1][24].download = "";


// Episode 26

seasons[1][25].video = "";

seasons[1][25].download = "";


// Episode 27

seasons[1][26].video = "";

seasons[1][26].download = "";


// Episode 28

seasons[1][27].video = "";

seasons[1][27].download = "";


// Episode 29

seasons[1][28].video = "";

seasons[1][28].download = "";


// Episode 30

seasons[1][29].video = "";

seasons[1][29].download = "";


// Episode 31

seasons[1][30].video = "";

seasons[1][30].download = "";


// Episode 32

seasons[1][31].video = "";

seasons[1][31].download = "";


// Episode 33

seasons[1][32].video = "";

seasons[1][32].download = "";


// Episode 34

seasons[1][33].video = "";

seasons[1][33].download = "";


// Episode 35

seasons[1][34].video = "";

seasons[1][34].download = "";


// Episode 36

seasons[1][35].video = "";

seasons[1][35].download = "";



// =====================================
// SEASON 2
// =====================================

// Add your Season 2 links here.
//
// Example:
//
// seasons[2][0].embed =
//     "https://jumpshare.com/embed/YOUR-ID";
//
// OR:
//
// seasons[2][0].video =
//     "https://example.com/episode.mp4";


seasons[2][0].video = "";
seasons[2][0].embed = "";
seasons[2][0].download = "";



// =====================================
// SEASON 3
// =====================================

seasons[3][0].video = "";
seasons[3][0].embed = "";
seasons[3][0].download = "";



// =====================================
// SEASON 4
// =====================================

seasons[4][0].video = "";
seasons[4][0].embed = "";
seasons[4][0].download = "";



// =====================================
// SEASON 5
// =====================================

seasons[5][0].video = "";
seasons[5][0].embed = "";
seasons[5][0].download = "";



// =====================================
// SEASON 6
// =====================================

seasons[6][0].video = "";
seasons[6][0].embed = "";
seasons[6][0].download = "";
