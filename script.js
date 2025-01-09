let clickCount = 0;

document.getElementById("show-love").addEventListener("click", function () {
  clickCount++;

  // 첫 번째 클릭: 사진 갤러리 보이게 하기
  if (clickCount === 1) {
    const photoGallery = document.getElementById("photo-gallery");
    photoGallery.classList.remove("hidden");
    photoGallery.classList.add("active");
  }

  // 두 번째 클릭: 사랑 편지 보이게 하기
  if (clickCount === 2) {
    const loveLetter = document.getElementById("love-letter");
    loveLetter.style.display = "block";
  }
});
