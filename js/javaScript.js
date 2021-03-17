// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 50px";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("navbar").style.backgroundColor="rgb(21 3 46)";
    document.getElementById("logo-navbar").style.width="15%";
    // document.getElementById("navbar").style.background="linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(7,7,8,1) 53%, rgba(0,0,0,0.9452731776304272) 100%)";

  } else {
    document.getElementById("navbar").style.padding = "50px 50px";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("navbar").style.backgroundColor="#f1f1f100";

  }
}



