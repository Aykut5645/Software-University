function solve(input1, input2, input3) {
    let bandName = input1;
    let albumName = input2;
    let songName = input3;

    let bandNameL = bandName.length;
    let albumNameL = albumName.length;
    let songNameL = songName.length;

    let songDuration = (bandNameL * albumNameL * songNameL) / 2;
    let songRotation = Math.ceil(songDuration / 2.5);
    
    console.log(`The plate was rotated ${songRotation} times.`);
}

solve('Black Sabbath', 'Paranoid', 'War Pigs');