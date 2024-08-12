window.addEventListener("mousemove", function (dets) {
  var rect = document.querySelector("#rect");
  var loc = rect.getBoundingClientRect();
  var half = loc.width / 2;
  var behind = 100 + loc.width / 2;

  var xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    200 + behind,
    window.innerWidth - (200 + behind),
    dets.clientX
  );

  gsap.to("#rect", {
    left: xval,
    ease: "power3",
  });
});
