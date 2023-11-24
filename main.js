function changeImage(thumbnail) {
  let principalImage = document.querySelector(".product .principal");
  let thumbnails = document.querySelectorAll(".thumbnails img");

  thumbnails.forEach(function (otherThumbnail) {
    otherThumbnail.classList.remove("selectedthumbnail");
  });

  thumbnail.classList.add("selectedthumbnail");

  principalImage.src = thumbnail.getAttribute("data-src");
}

function border(thumbnail) {
  let thumbBorder = document.querySelectorAll(".thmb");

  thumbBorder.forEach(function (container) {
    container.classList.remove("thmborder");
  });

  thumbnail.classList.add("thmborder");
}

document.addEventListener('DOMContentLoaded', function () {
  let productQuantity = document.querySelector(".qvalue");
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