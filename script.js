document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById('one').addEventListener('click',function(){
    document.getElementById('img1').style.display="block";
    document.getElementById('img2').style.display="none";
    document.getElementById('img3').style.display="none";
    document.getElementById('img4').style.display="none";
    document.getElementById('one').style.backgroundColor="white";
    document.getElementById('two').style.backgroundColor="#bbb";
    document.getElementById('three').style.backgroundColor="#bbb";
    document.getElementById('four').style.backgroundColor="#bbb";
});
document.getElementById('two').addEventListener('click',function(){
    document.getElementById('img1').style.display="none";
    document.getElementById('img2').style.display="block";
    document.getElementById('img3').style.display="none";
    document.getElementById('img4').style.display="none";
    document.getElementById('one').style.backgroundColor="#bbb";
    document.getElementById('two').style.backgroundColor="white";
    document.getElementById('three').style.backgroundColor="#bbb";
    document.getElementById('four').style.backgroundColor="#bbb";
});
document.getElementById('three').addEventListener('click',function(){
    document.getElementById('img1').style.display="none";
    document.getElementById('img2').style.display="none";
    document.getElementById('img3').style.display="block";
    document.getElementById('img4').style.display="none";
    document.getElementById('one').style.backgroundColor="#bbb";
    document.getElementById('two').style.backgroundColor="#bbb";
    document.getElementById('three').style.backgroundColor="white";
    document.getElementById('four').style.backgroundColor="#bbb";
});
document.getElementById('four').addEventListener('click',function(){
    document.getElementById('img1').style.display="none";
    document.getElementById('img2').style.display="none";
    document.getElementById('img3').style.display="none";
    document.getElementById('img4').style.display="block";
    document.getElementById('one').style.backgroundColor="#bbb";
    document.getElementById('two').style.backgroundColor="#bbb";
    document.getElementById('three').style.backgroundColor="#bbb";
    document.getElementById('four').style.backgroundColor="white";
});
});
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}