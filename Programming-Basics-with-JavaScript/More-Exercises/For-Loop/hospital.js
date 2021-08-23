function solve(input) {
    let daysCount = Number(input[0]);

    let totalTreated = 0;
    let totalUntreated = 0;

    let currentDoctorCount = 7;

    for (let i = 1; i <= daysCount; i++) {
        let currentPatiens = Number(input[i]);

        let treated = 0;
        let untreated = 0;

        if (i % 3 == 0 && totalUntreated > totalTreated) {
            currentDoctorCount++;
        }

        if (currentDoctorCount >= currentPatiens) {
            treated = currentPatiens;
            untreated = 0;
        } else {
            treated = currentDoctorCount;
            untreated = currentPatiens - currentDoctorCount;
        }

        totalTreated += treated;
        totalUntreated += untreated;
    }

    console.log(`Treated patients: ${totalTreated}.`);
    console.log(`Untreated patients: ${totalUntreated}.`);
}

solve([ '3', '7', '7', '7' ]);