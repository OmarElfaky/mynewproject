// option color
$(".style-switcher span").on('click', function(){
  $(".style-switcher").toggleClass("style-switcher-style");
});
//Change color color
$('.style-switcher__link--color').click(function (){
    $('link[href="css/monochrome.css"]').attr('href','css/color.css');
});
//Change color monochrome
$('.style-switcher__link--mono').click(function (){
    $('link[href="css/color.css"]').attr('href','css/monochrome.css');
});

// Link List header mobile
$(".style-bars span").on('click', function(){
  $(".nav-header").toggleClass("disblayBlock");
  $(".nav-header").toggleClass("navbar-style");
  $('.style-bars').css('display', 'none');
});
// close header X
const closeLink = document.querySelectorAll('.nav-header ul li a.link-jq');
index = 0;
closeLink.forEach((closeLink, i) => {
  closeLink.addEventListener('click', () => {
    $('.nav-header').removeClass('navbar-style disblayBlock');
    $('.style-bars').css('display', 'contents')
    index = i;
  });
});
// close header by click linke and move to #
const closeLinkBlog = document.querySelectorAll('.bog-jq ul li a.link-jq');
index = 0;
closeLinkBlog.forEach((closeLinkBlog, i) => {
  closeLinkBlog.addEventListener('click', () => {
    $('.nav-header').removeClass('navbar-style disblayBlock');
    $('.style-bars').css('display', 'contents')
    index = i;
  });
});

// close header by click linke and move to # blog.html
const closeHeader = document.querySelector('.clo');
closeHeader.addEventListener('click', closeHeaderBox);
function closeHeaderBox (){
  $('.nav-header').removeClass('navbar-style disblayBlock');
  $('.style-bars').css('display', 'contents')
}

// typing other-blog  touch-footer
var pos=0;
var speed=300;
var str=document.getElementById('type-js').innerText;
var strHello=document.getElementById('type-hallo').innerText;
var strResume=document.getElementById('type-resume').innerText;
var strProjects=document.getElementById('type-projects').innerText;
var strPost=document.getElementById('type-posts').innerText;
var strFooter=document.getElementById('type-footer').innerText;


document.getElementById('type-js').innerText  = '';
document.getElementById('type-hallo').innerText = '';
document.getElementById('type-resume').innerText = '';
document.getElementById('type-projects').innerText = '';
document.getElementById('type-posts').innerText = '';
document.getElementById('type-footer').innerText = '';


function type(){
  if(pos<str.length){
    document.getElementById('type-js').innerHTML += str.charAt(pos);
    document.getElementById('type-hallo').innerHTML += strHello.charAt(pos);
    document.getElementById('type-resume').innerHTML += strResume.charAt(pos);
    document.getElementById('type-projects').innerHTML += strProjects.charAt(pos);
    document.getElementById('type-posts').innerHTML += strPost.charAt(pos);
    document.getElementById('type-footer').innerHTML += strFooter.charAt(pos);

  }
  pos++;
  setTimeout(type,speed);
}
setTimeout(type,speed);
