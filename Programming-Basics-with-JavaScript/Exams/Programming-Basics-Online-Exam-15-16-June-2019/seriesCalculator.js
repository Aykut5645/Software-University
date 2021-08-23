function seriesCalculator(input) {
    let tvShow = input[0];
    let seasonsCount = Number(input[1]);
    let episodesCount = Number(input[2]);
    let episodeTimeWithoutReclame = Number(input[3]);

    let reclameTime = episodeTimeWithoutReclame * 0.2;
    let episodeWithReclame = episodeTimeWithoutReclame + reclameTime;

    let specialEpisodesTime = seasonsCount * 10;
    
    let totalTime = (episodeWithReclame * episodesCount * seasonsCount) + specialEpisodesTime;

    console.log(`Total time needed to watch the ${tvShow} series is ${totalTime} minutes.`);
}

seriesCalculator([ 'Lucifer', '3', '18', '55' ]);