document.getElementById("show-love").addEventListener("click", function () {
  // 첫 번째 클릭: 사진 갤러리 보이게 하기
  const photoGallery = document.getElementById("photo-gallery");
  photoGallery.classList.remove("hidden");
  photoGallery.classList.add("active");

  // 사랑 메시지 표시
  const loveMessage = document.getElementById("love-message");
  loveMessage.style.display = "block";

  // 두 번째 클릭 버튼 보이게 하기
  const clickMoreButton = document.getElementById("click-more");
  clickMoreButton.style.display = "inline-block";
});

document.getElementById("click-more").addEventListener("click", function () {
  // 두 번째 클릭: 편지 팝업 표시
  const loveLetterPopup = document.getElementById("love-letter");
  loveLetterPopup.style.display = "flex";
});

document.getElementById("close-letter").addEventListener("click", function () {
  // 편지 팝업 닫기
  const loveLetterPopup = document.getElementById("love-letter");
  loveLetterPopup.style.display = "none";
});
