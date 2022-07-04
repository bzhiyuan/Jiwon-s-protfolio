const swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
       type: 'fraction'
      },
    autoplay: {
      delay: 2000,
    },
  });

/* Top btn */
  window.addEventListener('scroll',() => {
    if(document.querySelector('html').scrollTop > 120) {
        document.querySelector('.fixround').style.display = "block";
    }else {
        document.querySelector('.fixround').style.display = "none";
    }
});

/* 스크롤 */
addEventListener('scroll', () => {
  if(document.querySelector('html').scrollTop > 120) {
    document.querySelector('.fixround').style.display = "block";
  } else {
    document.querySelector('.fixround').style.display = "none";
  }
});

document.querySelector('.fixround').addEventListener('click', (e) => {
  e.preventDefault();
  scrollTo({
    top:0,
    //left:0
    behavior:'smooth'
  });
});

/* 타이머 설정 */
console.log (new Date().getHours());
console.log (new Date().getMinutes());
console.log (new Date().getSeconds());

let time = setInterval(() => {
    const now = new Date();
    const hr =  now.getHours();
    const min =  now.getMinutes();
    const sec =  now.getSeconds();
    
    if(hr < 10){
        hr = "0" + hr;
    }
      if(min < 10) {
        min = "0" + min;
      }
      if(sec < 10) {
        sec ="0" + sec;
      }
    document.querySelectorAll('.hr')[1].innerHTML = hr;
    document.querySelectorAll('.min')[1].innerHTML = min;
    document.querySelectorAll('.sec')[2].innerHTML = sec;
        
},1000);

setInterval( ()=> {
    document.body.classList.toggle('bg_color');
}, 3000);

/*section 3  사진 */
setInterval( () =>{   
  $('li').first().appendTo('#box');
},2000);

/* section 7 페이지 */
$('.arrow .left').first().on('click', () => {
  $('#gallery li').last().prependTo('#gallery');
});
$('.arrow .right').eq(1).on('click', () => {
  $('#gallery li').eq(0).appendTo('#gallery');
});

/* 마우스 이벤트 */
  $('.icon-wrap').on('mouseenter', () => {
    $('.icon-wrap img').stop().attr({'color':'red'});
    $('.icon-wrap p').stop().attr({'color':'red'});

  });