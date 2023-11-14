function changeImage(thumbnail) {
  var principalImage = document.querySelector(".product .principal");

  var thumbnails = document.querySelectorAll(".thumbnails img");

  thumbnails.forEach(function (otherThumbnail) {
    otherThumbnail.classList.remove("selectedthumbnail");
    otherThumbnail.style.opacity = "1";
  });

  thumbnail.classList.add("selectedthumbnail");

  principalImage.src = thumbnail.getAttribute("data-src");
}
