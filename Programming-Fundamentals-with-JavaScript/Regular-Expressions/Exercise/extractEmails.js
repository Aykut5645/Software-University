function extractEmails([input]) {
    let pattern = /\s\b[^_][a-z0-9.\-_]+[^_]\b@\b[a-z]+\b.[a-z]+(\.[a-z]+)*/g;

    let match = input.match(pattern);

    if (match) {
        for (const m of match) {
            console.log(m.trim());
        }
    }
}

extractEmails(['Please contact us at: support@@@@github.com.']);
//extractEmails(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.']);
//extractEmails(['Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.']);