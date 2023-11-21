function changeImage(thumbnail) {
  var principalImage = document.querySelector(".product .principal");

  var thumbnails = document.querySelectorAll(".thumbnails img");

  thumbnails.forEach(function (otherThumbnail) {
    otherThumbnail.classList.remove("selectedthumbnail");
  });

  thumbnail.classList.add("selectedthumbnail");

  principalImage.src = thumbnail.getAttribute("data-src");
}

function border(thumbnail) {
  var thumbBorder = document.querySelectorAll(".thmb");

  thumbBorder.forEach(function (container) {
    container.classList.remove("thmborder");
  });

  thumbnail.classList.add("thmborder");
}