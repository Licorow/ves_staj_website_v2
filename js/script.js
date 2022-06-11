// *** Created by Tolga Çelik *** //
window.smoothScroll = function (target) {
  var x = document.getElementById("myTopnav");
  x.className = "topnav";
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function (c, a, b, i) {
        i++;
        if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function () {
            scroll(c, a, b, i);
        }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}


function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }


  function navbarMobile() {
    var x = document.getElementById("myTopnav");
    var x2 = document.getElementById("l2");
    var x0 = document.getElementById("l1");

    if (x.className === "topnav") {
      x.className += " responsive";
      x2.className = "l1";
      x0.className = "l2";
    } else {
      x.className = "topnav";
      x2.className = "l2";
      x0.className = "l1";
    }
  }