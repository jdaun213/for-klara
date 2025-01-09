document.getElementById("show-love").addEventListener("click", function () {
  const loveMessage = document.getElementById("love-message");
  loveMessage.style.display = "block"; // 메시지 표시

  const music = document.getElementById("background-music");
  music.play(); // 배경 음악 재생
});
