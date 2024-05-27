
function calculateBMI(height, weight) {
    return weight / (height * height);
}
let weight = 61
let height = 1.70
let BMI = calculateBMI(height, weight)
if (BMI < 18.5) {
    console.log("Thiếu cân");
} else if (BMI < 25) {
    console.log("Bình thường");
} else if (BMI < 30) {
    console.log("Thừa cân");
} if (BMI >= 30)
    console.log("Béo phì");

