//fullpage
const myFullpage = new fullpage('#fullpage', {
    navigation: true,
    responsiveWidth: 1279, //1279이상일때 부터 적용하도록
    
    afterLoad: function(origin, destination, direction){
        //afterLoad 풀페이지화면이 전환되고 나서 실행
        //인덱스 번호로 이벤트 넣기

        if(destination.index === 1){ //index가 1일때 show를 추가한다.
            $('.sc-onlinemarketer').addClass('show')
            $('.btn-bottom-wrap').addClass('on'); //상단 이동 버튼
        }else if (destination.index > 0) {
        } else {
            $('.btn-bottom-wrap').removeClass('on');
        }

        if(destination.index === 2 ){
            $('.sc-services').addClass('show')
        }
        if(destination.index === 3){
            $('.sc-history').addClass('show')
        }
        if(destination.index === 4){
            $('.sc-advertiser').addClass('show')
        }
        if(destination.index === 5){
            $('.sc-news').addClass('show')
        }
        if(destination.index === 6){
            $('.sc-visual2').addClass('show')
        }
    }
});

//상단이동버튼
//fullpage상단이동
$('.btn-top').click(function () {
    myFullpage.moveTo(1);
});
//1279이하 상단 이동버튼 이벤트
const scrollingTop = document.querySelector(".btn-bottom-wrap");

window.addEventListener("scroll", () => {
   
    if (window.scrollY > 100) { 
        scrollingTop.classList.add("on");
    } else {
        scrollingTop.classList.remove("on"); 
    }
});



//상단 메뉴 부분
$('.gnb .nav-list').hover(function(){

    if($(this).find('.sub').length){
            $('.gnb').addClass('on');
            $(this).find('.sub').addClass('on')
        } //자식이 있을경우에
    
        },function(){
            $('.gnb').removeClass('on');
            $(this).find('.sub').removeClass('on')
})



//슬라이드 메뉴부분
$('.btn-slide').click(function(){
        if($(this).hasClass('on')){
             $('.slide-menu').removeClass('on')
             $('body').removeClass('on')

             $('.nav').removeClass('on').siblings('.sub-list').stop().slideUp()
             //전에 남아있던 아코디언 메뉴 컨트롤없애기
        }else{
            $('.slide-menu').addClass('on')
            $('body').addClass('on')
        }

        $(this).toggleClass('on')
        $('.line1,.line2,.line3').toggleClass('on')
})
//딤드눌렀을때 닫히도록
$('.header-inner .dimmed').click(function(){
        $('.btn-slide,.line1,.line2,.line3').removeClass('on')
        $('.slide-menu').removeClass('on')
        $('body').removeClass('on')
})



// slidemenu 아코디언메뉴
$('.nav').click(function(e){
    e.preventDefault();

    // $(this).toggleClass('on').siblings('.sub').slideToggle()
    if ($(this).hasClass('on')) {
        $('.nav').removeClass('on').siblings('.sub-list').stop().slideUp()
    } else {
        $('.nav').removeClass('on').siblings('.sub-list').stop().slideUp()
        //.nav같은 경우네는 전체 nav를 지칭한다
        $(this).addClass('on').siblings('.sub-list').stop().slideDown()
        //this같은 경우에는 내가 선택한 nav이고 
        //stop사용이유: 연타사용시 한번만 열리게 하기 위해
    }

  })


// 모바일 헤더
const scrollingBox = document.querySelector(".header .m-bg");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) { // 스크롤 위치가 100px 이상일 때
        scrollingBox.classList.add("show");
    } else {
        scrollingBox.classList.remove("show");
    }
});



//sc-visual
//도형 움직임
$('.sc-visual .img-wrap .imgpo').each(function(i,el){
//공통클레스로 반복문 돌리기
    $(el).mousemove(function(e){
        w = $(this).width();  //넓이값
        h = $(this).height(); //높이값
        xVal = e.offsetX - w/2; //중심값잡아주기
        yVal = e.offsetY - h/2; //중심값잡아주기
        //offset으로 선택한 요소의 좌표를 가져옴
    
        gsap.to($(this).find('img'), {
            rotateX:-xVal/10,
            rotateY:yVal/20
        });
    })

})


    
//sc-services 
//탭 메뉴
$(".sc-services .group-tab button").mouseover(function(){

    const thisNum = $(this).index();
    //버튼 순서를 데이터값으로 선언하여

    $(".on-ic").css({
        'top': 'calc((100%/4)* ' + thisNum +')',
        //css에 top을 계산하여 표현
    })
    
})
//탭    
const tabTl = gsap.timeline({})
tabTl
.to('.sc-services .content > *',1.8,{opacity:1},"a")

$('.group-tab button').click(function(){
    
    tabName=$(this).data('tab');
    
    if ($(this).hasClass('on')) {
        tabTl.play()      
    } else {
        $(this).addClass('on').siblings().removeClass('on')
        $(tabName).addClass('on').siblings().removeClass('on')
        tabTl.restart()
    }
})
//모바일 슬라이드
const swiper7 = new Swiper('.sc-services .swiper', {
    slidesPerView: 'auto',
    spaceBetween:15,
});



// sc-history
//탭슬라이드
$('.sc-history .history-tab button').click(function(){

    tabName=$(this).data('tabslide');
    
    $(this).addClass('on').siblings().removeClass('on')
    $(tabName).addClass('on').siblings().removeClass('on')

    //모바일 탭 접기
    if($(window).width() < 767) {
            $('.btn-wrap').slideUp()
    }

})

//모바일 탭
$('.sc-history .m-tab').click(function(e){
    e.preventDefault();

    if ($(this).hasClass('on')) {
        $('.btn-wrap').stop().slideUp()
        $(this).removeClass('on')
    } else {
        $(this).removeClass('on') //on을 빼주어 on이 들어갈 수 있는 상태로 만들어놈
        // $('.btn-wrap').stop().slideUp()
        $(this).addClass('on')
        $('.btn-wrap').stop().slideDown()
    }
})
//모바일 탭 데이터값 가지고 오기
const buttons = document.querySelectorAll('.btn-wrap button');
const output = document.getElementById('output');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        output.textContent = this.value;
        $('.sc-history .m-tab').removeClass('on')
        //on을 제거하여 on클래스가 추가할 수 있는 상태로 만들어줌
    });
});


//tab 슬라이드
const swiper = new Swiper('#slide1 .swiper', {
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  spaceBetween: 15,
});

const swiper2 = new Swiper('#slide2 .swiper', {
    navigation: {
      nextEl: ".next2",
      prevEl: ".prev2",
    },
    spaceBetween: 15,
});

const swiper3 = new Swiper('#slide3 .swiper', {
    navigation: {
      nextEl: ".next3",
      prevEl: ".prev3",
    },
    spaceBetween: 15,
});

const swiper4 = new Swiper('#slide4 .swiper', {
    navigation: {
      nextEl: ".next4",
      prevEl: ".prev4",
    },
    spaceBetween: 15,
});

const swiper5 = new Swiper('#slide5 .swiper', {
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    spaceBetween: 15,
});



//sc-news
//슬라이드
const swiper6 = new Swiper('.news-slide', {
    slidesPerView:2,
    spaceBetween:22,
    navigation: {
      nextEl: ".sc-news .next",
      prevEl: ".sc-news .prev",
    },
    pagination: {
        el: ".sc-news .swiper-pagination",
        type: "progressbar",
      },
    //swiper 반응형 작업할때 breakpints를 사용하여 슬라이드보여지는 갯수를 설정
    breakpoints: {
        768: {
            slidesPerView: 3,  //브라우저가 768보다 클 때
            spaceBetween: 40,
          },
        1280: {
        slidesPerView: 4,  //브라우저가 1024보다 클 때
        spaceBetween: 50,
        },
      },
});



// /sc-visual2
//마우스커스텀
const customCursor = document.querySelector(".mouse");

gsap.set('.mouse',{scale: 0})
document.addEventListener("mousemove", (e) => {
    gsap.to(customCursor, {
        x: e.clientX,
        y: e.clientY,
        //마우스 따라다니도록 하기
    });
});

const hoverElements = document.querySelectorAll(".sc-visual2 a");

$('.sc-visual2 .inner').hover(function(){
        gsap.to(customCursor, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
        });
},function(){
        gsap.to(customCursor, {
            opacity: 0,
            scale: 0,
            duration: 0.3,
        });
})







