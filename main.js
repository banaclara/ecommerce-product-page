function changeImage(thumbnail) {
  const principalImage = document.querySelector(".product .principal");
  const thumbnails = document.querySelectorAll(".thumbnails img");
  const thumbBorders = document.querySelectorAll(".thmb");

  thumbnails.forEach(function (otherThumbnail) {
    otherThumbnail.classList.remove("selectedthumbnail");
  });

  thumbBorders.forEach(function (container) {
    container.classList.remove("thmborder");
  });

  thumbnail.querySelector("img").classList.add("selectedthumbnail");
  thumbnail.classList.add("thmborder");

  principalImage.src = thumbnail.querySelector("img").getAttribute("data-src");
}


document.addEventListener('DOMContentLoaded', function () {
  const productQuantity = document.querySelector(".qvalue");
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");
  
  plus.onclick = function () {
    productQuantity.textContent++;
  };

  minus.onclick = function () {
    if (productQuantity.textContent > 0) {
      productQuantity.textContent--;
    }
  };
});
