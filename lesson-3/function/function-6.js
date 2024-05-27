let students = [
    { name: 'Alex', score: 50 },
    { name: 'Bean', score: 80 },
    { name: 'Cam', score: 90 }
];
function calculateAvgScore(students) {
    let totalScore = 0;
    let numberOfStudents = students.length;
    for (let i = 0; i < numberOfStudents; i++) {
        totalScore += students[i].score
    }
    let averageScore = totalScore / numberOfStudents;

    return averageScore;
}
let averageScore = calculateAvgScore(students);
console.log(`Điểm trung bình của các sinh viên là: ${averageScore}`);