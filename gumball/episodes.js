function createEpisodes(count){

    const episodes = [];

    for(let i = 1; i <= count; i++){

        episodes.push({

            title: `الحلقة ${i}`,

            players:{
                one:"",
                two:"",
                three:""
            },

            download:""

        });

    }

    return episodes;

}

const seasons = {

    1: createEpisodes(18),

    2: createEpisodes(20),

    3: createEpisodes(20),

    4: createEpisodes(40),

    5: createEpisodes(40),

    6: createEpisodes(44)

};
