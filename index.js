// parallax scrolling
var rellax = new Rellax('.rellax');


var prevScrollpos = window.pageYOffset;

let vw = window.innerWidth;
let vh = window.innerHeight;



window.onscroll = function() { 
  scrollFunction()};

  var os = $('#forest').offset().top; // pixels to the top of div1
        var ht = $('#forest').height(); // height of div1 in pixels

function scrollFunction() {

  /* As you scroll, the first project will be shown */
  if (((document.body.scrollTop) > (vh/4))  || ((document.documentElement.scrollTop) > (vh/4))  )
  {
    document.getElementById('project1').classList.remove("offscreen");
    document.getElementById('mock1').classList.remove("offscreen");
    document.getElementById('content1').classList.add("projects");
    document.getElementById('content1').classList.add("content2");
    document.getElementById('content1').classList.add("animate__flipInX");
      }

      /*after scrolling past intro page, change background color to pale green*/
  if (((document.body.scrollTop) > (vh/1.3))  || ((document.documentElement.scrollTop) > (vh/1.3)) ) 
  {
    document.getElementById("links").style.backgroundColor = "#E1EEDD";
    document.getElementById("links").style.opacity = "0.95";
    document.body.style.backgroundColor = "#E1EEDD";
    
  }

  /*scroll and project 2 appears */

  if (((document.body.scrollTop) > (vh/1.3))  || ((document.documentElement.scrollTop) > (vh/1.3)))  {
    document.getElementById('project2').classList.remove("offscreen");
    document.getElementById('mock2').classList.remove("offscreen");
    document.getElementById('content2').classList.add("projects");
    document.getElementById('content2').classList.add("content2");
    document.getElementById('content2').classList.add("animate__flipInX");

  }

  if (((document.body.scrollTop) > (vh/0.8))  || ((document.documentElement.scrollTop) > (vh/0.8)))  {
    document.getElementById('project3').classList.remove("offscreen");
    document.getElementById('mock3').classList.remove("offscreen");
    document.getElementById('content3').classList.add("projects");
    document.getElementById('content3').classList.add("content3");
    document.getElementById('content3').classList.add("animate__flipInX");

  }


    /*if you go back up, the background changes back to yellow */
  else {
    document.getElementById("links").style.backgroundColor = "#fefbe9";
    document.body.style.backgroundColor = "#fefbe9";
    mybutton.style.display = "none";
  } 
  }

  //Get the yellow up button:
mybutton = document.getElementById("yellowArrow");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}