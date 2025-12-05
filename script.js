// Inisialisasi variabel skor dan timer
let score = 0;
let timeLeft = 10; // Game berlangsung selama 10 detik
let timerInterval;
let gameActive = false;

// Ambil elemen dari DOM
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const clickBtn = document.getElementById("click-btn");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restart-btn");

// Fungsi untuk memulai ulang game
function startGame() {
    score = 0;
    timeLeft = 10;
    gameActive = true;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
    message.textContent = "";
    clickBtn.disabled = false; // Aktifkan tombol klik
    restartBtn.style.display = "none";

    // Kurangi waktu tiap detik
    timerInterval = setInterval(function () {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// Fungsi saat game berakhir
function endGame() {
    gameActive = false;
    clickBtn.disabled = true; // Matikan tombol klik
    clearInterval(timerInterval);
    message.textContent = `Waktu Habis! Skor Akhir: ${score}`;
    restartBtn.style.display = "block";
}

// Event: Saat tombol klik ditekan
clickBtn.addEventListener("click", function () {
    if (!gameActive) return; // Jika belum aktif, abaikan
    score++;
    scoreDisplay.textContent = score;
    // Animasi efek saat diklik
    clickBtn.style.transform = "scale(1.1)";
    setTimeout(() => {
        clickBtn.style.transform = "scale(1)";
    }, 100);
});

// Event: Mulai ulang game
restartBtn.addEventListener("click", function () {
    startGame();
});

// Game mulai saat halaman di-load
window.onload = startGame;
