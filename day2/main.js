function toggle() {
    console.log("toggle");
  var l1 = document.querySelector(".line1");
  var l2 = document.querySelector(".line2");
  var l3 = document.querySelector(".line3");
  l1.toggleAttribute("class", "line1-l-r");
  l2.toggleAttribute("class", "line2-hidden");
  l3.toggleAttribute("class", "line3-r-l");
}
