function melrahShake(input) {
    let [str, pattern] = input;

    while (str.includes(pattern) && pattern != '') {
        let firstIndex = str.indexOf(pattern);
        str = str.substring(0, firstIndex) + str.substring(firstIndex + pattern.length);
        let lastIndex = str.lastIndexOf(pattern);
        str = str.substring(0, lastIndex) + str.substring(lastIndex + pattern.length);

        if (firstIndex != -1 && lastIndex != -1) {
            console.log('Shaked it.');
            pattern = pattern.substring(0, pattern.length / 2) + pattern.substring(pattern.length / 2 + 1);
        }
    }

    console.log('No shake.');
    console.log(str);
}

melrahShake(['!.,$%^&*@)><(@.../o$@)@)><(@!(%!@)><(@$,.!', '', '']);
melrahShake(['mtmmtm', 'mtm', '']);