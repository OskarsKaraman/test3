$(document).ready(function(){



  $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
        $('.header-fixed').addClass("sticky");
        }
        else{
        $('.header-fixed').removeClass("sticky");
        }
    });


$('.blog_page_sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        dots: true,
        arrows:false,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 1,
            autoplay:true,
            slidesToScroll: 1,
            arrows:false,
            dots: true,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            dots: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            dots: true,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            dots: true,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            dots: true,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
              dots: true,
            }
          }
      ]
  });


    $('.slidss').slick({
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows:false,
                      dots: true,
                      fade: false,
                      centerMode:true,
                      autoplay:true,
                      autoplaySpeed: 4700,
                      centerPadding: '180px',
                      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
            centerMode:true,
            centerPadding: '180px',
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
            centerMode:false,
            centerPadding: '180px',
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
            centerMode:true,
            centerPadding: '180px',
          }
        },


          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots:false,
              slidesToScroll: 1,
              dots: true,
              arrows:false,
              centerMode:true,
            centerPadding: '180px',
            }
          }
      ]

});

$('.prev-arrow').on('click', function() {
  $('.slidss').slick('slickNext');
});

$('.next-arrow').on('click', function() {
  $('.slidss').slick('slickPrev');
});

 $('.slids').slick({
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows:false,
                      dots: true,
                      fade: false,
                      centerMode:true,
                      centerPadding: '300px',
                      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
            centerMode:true,
            centerPadding: '300px',
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
            centerMode:true,
            centerPadding: '300px',
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
            centerMode:true,
            centerPadding: '300px',
          }
        },


          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots:false,
              slidesToScroll: 1,
              dots: true,
              arrows:false,
              centerMode:false,
            centerPadding: '300px',
            }
          }
      ]

});

$('.prev-arrow').on('click', function() {
  $('.slids').slick('slickNext');
});

$('.next-arrow').on('click', function() {
  $('.slids').slick('slickPrev');
});


let select = document.querySelector('.select');
let deploy_btn = document.getElementById('deploy-btn');
let deploy_btns = document.getElementById('deploy-btns');
let options_list = document.querySelector('.options-list');
let value_wrap = document.querySelector('.value-wrap');

let options = document.querySelectorAll('.option');
let input = document.getElementById('country');

for (let option of options){
    option.onclick = selectOption;
}


//console.log(deploy_btn);
deploy_btns.onclick = function(){

    if ( deploy_btn.getAttribute('data-state') == 'rolled' ){
        options_list.style.display = 'flex';
        options_list.style.opacity = 1;
        deploy_btn.setAttribute('data-state', 'deployed');
        deploy_btn.style.rotate = '180deg';
    } else{
        options_list.style.opacity = 0;
        options_list.style.display = 'none';
        deploy_btn.setAttribute('data-state', 'rolled');
        deploy_btn.style.rotate = '360deg';
    }
}

function selectOption(){
    let current = options_list.querySelector('.current');
    current.classList.remove('current');
    this.classList.add('current');
    deploy_btn.setAttribute('data-state', 'rolled');
    options_list.style.opacity = 0;
    options_list.style.display = 'none';
    deploy_btn.style.rotate = '360deg';

    let country = this.querySelector('span').innerHTML;
    let flag = this.querySelector('img').src;
    
    let event = new CustomEvent("optionSelected", {detail: { country: country, flag: flag } });
    select.dispatchEvent(event);

}

select.addEventListener("optionSelected", setNewCurentOpton);

function setNewCurentOpton(event){
    value_wrap.querySelector('img').src = event.detail.flag;
    country.value = event.detail.country;
}

//deploy_btn.getAttribute('data-state');


let selectr = document.querySelector('.selectr');
let deploy_btnr = document.getElementById('deploy-btnr');
let deploy_btnsr = document.getElementById('deploy-btnsr');
let options_listr = document.querySelector('.options-listr');
let value_wrapr = document.querySelector('.value-wrapr');

let optionsr = document.querySelectorAll('.optionr');
let inputr = document.getElementById('countryr');

for (let optionr of optionsr){
    optionr.onclick = selectOptionr;
}


//console.log(deploy_btn);
deploy_btnsr.onclick = function(){

    if ( deploy_btnr.getAttribute('data-state') == 'rolled' ){
        options_listr.style.display = 'flex';
        options_listr.style.opacity = 1;
        deploy_btnr.setAttribute('data-state', 'deployed');
        deploy_btnr.style.rotate = '180deg';
    } else{
        options_listr.style.opacity = 0;
        options_listr.style.display = 'none';
        deploy_btnr.setAttribute('data-state', 'rolled');
        deploy_btnr.style.rotate = '360deg';
    }
}

function selectOptionr(){
    let currentr = options_listr.querySelector('.currentr');
    currentr.classList.remove('currentr');
    this.classList.add('currentr');
    deploy_btnr.setAttribute('data-state', 'rolled');
    options_listr.style.opacity = 0;
    options_listr.style.display = 'none';
    deploy_btnr.style.rotate = '360deg';

    let country = this.querySelector('span').innerHTML;
    let flag = this.querySelector('img').src;
    
    let event = new CustomEvent("optionSelected", {detail: { country: country, flag: flag } });
    select.dispatchEvent(event);

}

select.addEventListener("optionSelected", setNewCurentOptonr);

function setNewCurentOptonr(event){
    value_wrapr.querySelector('img').src = event.detail.flag;
    countryr.value = event.detail.countryr;
}

//deploy_btn.getAttribute('data-state');


const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});



});




