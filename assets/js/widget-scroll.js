window.addEventListener("scroll", function () {
  var container = document.getElementById("tradingview-widget-container");
  var containerRect = container.getBoundingClientRect();
  var scrollTop = window.pageYOffset;

  if (scrollTop > containerRect.top) {
    container.classList.add("fixed-tradingview-widget");
  } else {
    container.classList.remove("fixed-tradingview-widget");
  }
});
