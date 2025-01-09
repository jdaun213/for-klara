document.getElementById("show-love").addEventListener("click", function () {
  // 사진 갤러리 보이게 하기
  const photoGallery = document.getElementById("photo-gallery");
  photoGallery.classList.remove("hidden");
  photoGallery.classList.add("active");

  // 사랑 메시지 표시
  const loveMessage = document.getElementById("love-message");
  loveMessage.style.display = "block";
});
