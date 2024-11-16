function toggle() {
  var l1 = document.querySelector(".line1");
  var l2 = document.querySelector(".line2");
  var l3 = document.querySelector(".line3");
  l1.classList.toggle("move-down-and-rotate-anti-clockwise");
  l3.classList.toggle("move-up-and-rotate-clockwise");
  l2.classList.toggle("rotate-anti-clockwise");
}
