// انتخاب عناصر DOM
const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");
const playlistItems = document.querySelectorAll(".playlist li");

// اضافه کردن رویداد کلیک به هر آیتم لیست
playlistItems.forEach((item) => {
  item.addEventListener("click", () => {
    const song = item.getAttribute("data-song");
    audioSource.src = `music/${song}`;
    audioPlayer.load();
    audioPlayer.play();
  });
});
