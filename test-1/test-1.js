let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K6";
let crew = ["Khang", "Yến", "Ánh"];
function launchShip(crew) {
    let crewList = crew.join(', ');
    let message = `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewList} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
    return message;
}

console.log(launchShip(crew));

function calculateDistance(speed, time) {
    return speed * time;
}

let speed = 1000;
let time = 24;

let distance = calculateDistance(speed, time);

console.log(`Khoảng cách là: ${distance}`)


function convertTimeToHex(time) {
    let hexTime = time.toString(16);
    return hexTime;
}
let timeInSeconds = 120;
let hexTime = convertTimeToHex(timeInSeconds);

console.log(`Thời gian ${timeInSeconds} giây trong hệ thập lục phân là: ${hexTime}`);

//cach 1
function decryptCode(code) {
    let decrypted = '';
    for (let char of code) {
        if (char >= 'a' && char <= 'z') {
            decrypted += char.toUpperCase();
            continue
        }
        if (char >= 'A' && char <= 'Z') {
            decrypted += char.toLowerCase();
            continue
        }
        decrypted += char;
    }
    return decrypted;
}

// cach 2
function decryptCode(code) {
    let decrypted = '';
    for (let i = 0; i < code.length; i++) {
        let char = code[i];
        if (char >= 'a' && char <= 'z') {
            decrypted += char.toUpperCase();
            continue;
        }
        if (char >= 'A' && char <= 'Z') {
            decrypted += char.toLowerCase();
            continue;
        }
        decrypted += char;
    }
    return decrypted;
}

// cach 3
function decryptCode(code) {
    let decrypted = '';
    for (let char of code) {
        switch (true) {
            case (char >= 'a' && char <= 'z'):
                decrypted += char.toUpperCase();
                break;
            case (char >= 'A' && char <= 'Z'):
                decrypted += char.toLowerCase();
                break;
            default:
                decrypted += char;
                break;
        }
    }
    return decrypted;
}

//cach 4
function decryptCode(code) {
    let decrypted = '';
    code.split('').forEach(char => {
        if (char >= 'a' && char <= 'z') {
            decrypted += char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            decrypted += char.toLowerCase();
        } else {
            decrypted += char;
        }
    });
    return decrypted;
}

let code = "K6 Challenge";

let decryptedCode = decryptCode(code);

console.log(`Mật mã đã giải mã: ${decryptedCode}`);

function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
    return;
}

returnToEarth()