// =====================================
// Stardima V3 - Gumball Episodes
// =====================================

function createEpisode(number) {
    return {
        title: `الحلقة ${number}`,
        description: "نتمنى لكم مشاهدة ممتعة ويمكنكم تحميل الحلقة في أي وقت.",
        video: "",
        download: "",
        poster: "banner.jpg"
    };
}

function createSeason(totalEpisodes) {
    return Array.from({ length: totalEpisodes }, (_, i) => createEpisode(i + 1));
}

const seasons = {
    1: createSeason(18),
    2: createSeason(20),
    3: createSeason(20),
    4: createSeason(40),
    5: createSeason(40),
    6: createSeason(44)
};
