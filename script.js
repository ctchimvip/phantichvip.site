// script.js

// Lắng nghe sự kiện nhấn nút dự đoán
document.getElementById('predictButton').addEventListener('click', function() {
    const guess = document.getElementById('guess').value;
    document.getElementById('predictionResult').innerHTML = "Dự đoán của bạn: " + (guess === "tai" ? "Tài" : "Xỉu");
});

// Lắng nghe sự kiện nhấn nút lăn xí ngầu
document.getElementById('rollButton').addEventListener('click', function() {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const dice3 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2 + dice3;

    let resultText = "Kết quả: ";
    if (sum > 10) {
        resultText += "Tài";
    } else {
        resultText += "Xỉu";
    }

    document.getElementById('rollResult').innerHTML = resultText;

    // Kiểm tra dự đoán của người dùng
    const guess = document.getElementById('guess').value;
    if ((guess === "tai" && sum > 10) || (guess === "xiu" && sum <= 10)) {
        resultText += " - Bạn dự đoán đúng!";
    } else {
        resultText += " - Bạn dự đoán sai!";
    }

    document.getElementById('rollResult').innerHTML = resultText;
});
