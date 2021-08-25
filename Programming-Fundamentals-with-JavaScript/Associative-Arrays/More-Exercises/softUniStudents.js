function softUniStudents(input) {
    let obj = {};

    for (const line of input) {
        if (line.includes(':')) {
            let [courseName, capacity] = line.split(': ');
            capacity = Number(capacity);

            if (!obj.hasOwnProperty(courseName)) {
                obj[courseName] = { capacity };
            } else {
                obj[courseName]['capacity'] += capacity;
            }
        } else {
            let pattern = /(?<userName>.+)\[(?<credits>\d+)\] with email (?<email>.+) joins (?<courseName>.+)/g;
            let match = pattern.exec(line);

            if (Object.keys(obj).find(x => x == match.groups.courseName)) {
                obj[match.groups.courseName]['capacity'] -= 1;
                if (obj[match.groups.courseName]['capacity'] >= 0) {
                    obj[match.groups.courseName][match.groups.credits] = [match.groups.userName, match.groups.email];
                } else {
                    obj[match.groups.courseName]['capacity'] = 0;
                }
            }
        }
    }

    Object.keys(obj).sort((a, b) => Object.keys(obj[b]).length - Object.keys(obj[a]).length).forEach(course => {
        console.log(`${course}: ${obj[course]['capacity']} places left`);
        delete obj[course]['capacity'];

        Object.entries(obj[course]).sort((a, b)=> b[0] - a[0]).forEach(kvp => {
            console.log(`--- ${kvp[0]}: ${kvp[1].join(', ')}`);
        });;
    });
}

softUniStudents([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
]);