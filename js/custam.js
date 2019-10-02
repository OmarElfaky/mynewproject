/*global, console , $, alert*/
// it smooler scroll
$(function () {
    "use strict";
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 50}, 800);
        return false;
    });
});
/* Nav bar */
function fixedHeader() {
  var ww = $(window).scrollTop();
  if(ww > 0){
      $('.nav-header').addClass('white');
      $('.nav-header ul li a').css("color", "#555555");
  }else{
      $('.nav-header').removeClass('white');
      $('.nav-header ul li a').removeClass('white');
      $('.nav-header ul li a').css("color", "#fff");
  }
}
fixedHeader();
$(window).on('scroll', function () {
    fixedHeader();
});
/* carousel TESTIMONTALS */
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const indicatorParent = document.querySelector('.control ul');
const indicators = document.querySelectorAll('.control li');
index = 0;
indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.control .selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translateX(' + (i) * -25 + '%)';
    index = i;
  });
});
left.addEventListener('click', function() {
  index = (index > 0) ? index -1 : 0;
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + (index) * -25 + '%)';
});
right.addEventListener('click', function() {
  index = (index < 4 - 1) ? index+1 : 3;
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + (index) * -25 + '%)';
});
/* model */
const openModel = document.querySelector('#model-click');
const myModel = document.querySelector('#my-model');
const closeModel = document.querySelector('.close');
openModel.addEventListener('click', openMyMolel);
closeModel.addEventListener('click', closeMyModel);
window.addEventListener('click', outsideClick);
function openMyMolel (){
  myModel.style.display = 'block';
  $('.nav-header').css("display", "none");
}
function closeMyModel (){
  myModel.style.display = 'none';
  $('.nav-header').css("display", "block");
  $('.nav-header').css('display','none')
}
/* modal tow */
const openModelBox = document.querySelector('#model-tow-click');
const myModelBox = document.querySelector('#my-tow-model');
const closeModelBox = document.querySelector('.toow');
openModelBox.addEventListener('click', openMyMolelTow);
closeModelBox.addEventListener('click', closeMyModelTow);
window.addEventListener('click', outsideClick);
function openMyMolelTow (){
  myModelBox.style.display = 'block';
  $('.nav-header').css("display", "none");
}
function closeMyModelTow (){
  myModelBox.style.display = 'none';
  $('.nav-header').css("display", "block");
  $('.nav-header').css('display','none')
}

/* modal three */
const openModelBoxThree = document.querySelector('#model-three-click');
const myModelBoxThree = document.querySelector('#my-three-model');
const closeModelBoxThree = document.querySelector('.threee');
openModelBoxThree.addEventListener('click', openMyMolelThree);
closeModelBoxThree.addEventListener('click', closeMyModelThree);
window.addEventListener('click', outsideClick);
function openMyMolelThree (){
  myModelBoxThree.style.display = 'block';
  $('.nav-header').css("display", "none");
}
function closeMyModelThree (){
  myModelBoxThree.style.display = 'none';
  $('.nav-header').css("display", "block");
  $('.nav-header').css('display','none')
}
function outsideClick(e) {
  if (e.target == myModelBoxThree) {
    myModelBoxThree.style.display = 'none';
    $('.nav-header').css("display", "block");
  }
  if (e.target == myModelBox) {
    myModelBox.style.display = 'none';
    $('.nav-header').css("display", "block");
  }
  if (e.target == myModel) {
    myModel.style.display = 'none';
    $('.nav-header').css("display", "block");
  }
}

// it tabs
$(function () {
    'use strict';
    $('#projects .inform-list li').click(function () {
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.contant-infom div.J-Q').hide();
        $('.' + $(this).data('class')).fadeIn();
    });
});

// it is window open
const myButton = document.querySelector('#open-blog-jq');
const myThreeButton = document.querySelector('#open-blog-three-jq');
const myTowButton = document.querySelector('#open-blog-tow-jq');

myButton.onclick = function() {
    'use strict'
    window.open('blog.html', '_self', 'width=400,heigth=400,top=200,right=200,menubar=no o,statu=no',
        'true');
    console.log('hhh')
};
myTowButton.onclick = function() {
    'use strict'
    window.open('blog.html', '_self', 'width=400,heigth=400,top=200,right=200,menubar=no o,statu=no',
        'true');
    console.log('hhh')
};
myThreeButton.onclick = function() {
    'use strict'
    window.open('blog.html', '_self', 'width=400,heigth=400,top=200,right=200,menubar=no o,statu=no',
        'true');
    console.log('hhh')
};

// it go back history
function goBack() {
  window.history.back();
}
