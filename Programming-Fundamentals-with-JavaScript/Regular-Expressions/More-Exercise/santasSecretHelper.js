function santasSecretHelper(input) {
    let key = Number(input.shift());
    let line;
    
    while ((line = input.shift()) != 'end') {
        let newLine = '';
        
        for (let i = 0; i < line.length; i++) {
            let char = line.charCodeAt(i);
            newLine += String.fromCharCode(char - key);
        }
        
        let pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]+!(?<behavior>[GN])!/g;
        let match = pattern.exec(newLine);

        
        if (match && match.groups.behavior == 'G') {
            console.log(match.groups.name);
        }
    }
}


santasSecretHelper([
    '3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejn$J$',
    'CVwdq&gnmjkvng$Q$',
    'end'
]);
 
santasSecretHelper([
    '4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
    'DReh}e=<4lhzj1%K%',
    'end'
]);

santasSecretHelper([
    '3',
    "N}eideidmk$'(mnyenmCNlpamnin$J$",
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end']);
    