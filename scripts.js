// انتخاب عناصر
const audioPlayer = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const progressBar = document.getElementById("progressBar");

// وضعیت پخش
let isPlaying = false;

// توابع کنترل پخش
playPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    audioPlayer.pause();
    playPauseBtn.textContent = "▶️";
  } else {
    audioPlayer.play();
    playPauseBtn.textContent = "⏸️";
  }
  isPlaying = !isPlaying;
});

// به‌روزرسانی نوار پیشرفت
audioPlayer.addEventListener("timeupdate", () => {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.style.setProperty("--progress", `${progress}%`);
});
