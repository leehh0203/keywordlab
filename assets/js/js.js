
//풀페이지
Selectio1nFlag = true;
Selectio2nFlag = true;
Selectio3nFlag = true;
Selectio4nFlag = true;
Selectio5nFlag = true;
Selectio6nFlag = true;


var myFullpage = new fullpage('#fullpage', {
    // verticalCentered: true,
    // anchors: ['anchor1', 'anchor2', 'anchor3'],
    navigation: true,
    responsiveWidth: 1279,
    afterLoad: function(origin, destination, direction){

        if(destination.index === 1 && Selectio1nFlag == true){
            $('.sc-onlinemarketer').addClass('show')
            Selectio1nFlag = false;
        }else if(destination.index === 2 && Selectio2nFlag == true){
            $('.sc-services').addClass('show')
            Selectio1nFlag = false;
        }else if(destination.index === 3 && Selectio3nFlag == true){
            $('.sc-history').addClass('show')
            Selectio1nFlag = false;
        }else if(destination.index === 4 && Selectio4nFlag == true){
            $('.sc-advertiser').addClass('show')
            Selectio1nFlag = false;
        }else if(destination.index === 5 && Selectio5nFlag == true){
            $('.sc-news').addClass('show')
            Selectio1nFlag = false;
        }else if(destination.index === 6 && Selectio6nFlag == true){
            $('.sc-visual2').addClass('show')
            Selectio1nFlag = false;
        }

        //상단이동버튼
        if (destination.index == 1) {
            $('.btn-bottom-wrap').addClass('on');
        } else if (destination.index > 0) {
            // 여기에 destination.index가 0보다 클 경우 실행하고자 하는 코드를 추가합니다.
        } else {
            $('.btn-bottom-wrap').removeClass('on');
        }

    }


});


//상단이동버튼
$('.btn-top').click(function () {
    myFullpage.moveTo(1);
});
//모바일 숨켰다 나오기
const scrollingTop = document.querySelector(".btn-bottom-wrap");

window.addEventListener("scroll", () => {
    // 스크롤 위치를 확인하여 스크롤이 아래로 내려갈 때와 위로 올라갈 때의 애니메이션을 제어합니다.
    if (window.scrollY > 100) { // 스크롤 위치가 100px 이상일 때
        scrollingTop.classList.add("on"); // 박스에 "scrolled" 클래스를 추가하여 스타일을 변경합니다.
    } else {
        scrollingTop.classList.remove("on"); // 박스에서 "scrolled" 클래스를 제거하여 스타일을 변경합니다.
    }
});



//gnb
$('.gnb .nav-list').hover(function(){

    if($(this).find('.sub').length){
            $('.gnb').addClass('on');
            $(this).find('.sub').addClass('on')
        } //자식이 있을경우에
    
        },function(){
            $('.gnb').removeClass('on');
            $(this).find('.sub').removeClass('on')
})



// const slidemenuTl = gsap.timeline({
//         paused:true,
//     })
//     slidemenuTl
//     .to('.header-inner .dimmed',.4,{opacity: 1,visibility: 'visible'},)
//     .to('.header .slide-menu',.2,{xPercent:-100},)
// slidemenu   
$('.btn-slide').click(function(){
        if($(this).hasClass('on')){
             $('.slide-menu').removeClass('on')
             $('body').removeClass('on')

             $('.nav').removeClass('on').siblings('.sub-list').stop().slideUp()
        }else{
            $('.slide-menu').addClass('on')
            $('body').addClass('on')
        }

        $(this).toggleClass('on')
        $('.line1,.line2,.line3').toggleClass('on')
})

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
        $(this).addClass('on').siblings('.sub-list').stop().slideDown()

    }

  })


// 모바일 헤더
const scrollingBox = document.querySelector(".header .m-bg");

window.addEventListener("scroll", () => {
    // 스크롤 위치를 확인하여 스크롤이 아래로 내려갈 때와 위로 올라갈 때의 애니메이션을 제어합니다.
    if (window.scrollY > 100) { // 스크롤 위치가 100px 이상일 때
        scrollingBox.classList.add("show"); // 박스에 "scrolled" 클래스를 추가하여 스타일을 변경합니다.
    } else {
        scrollingBox.classList.remove("show"); // 박스에서 "scrolled" 클래스를 제거하여 스타일을 변경합니다.
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

    $(".on-ic").css({
        'top': 'calc((100%/4)* ' + thisNum +')',
        
    })
    
})
//탭    
const tabTl = gsap.timeline({})
tabTl
.to('.content #tab1',1.8,{opacity:1},"a")
.to('.content #tab2',1.8,{opacity:1},"a")
.to('.content #tab3',1.8,{opacity:1},"a")
.to('.content #tab4',1.8,{opacity:1},"a")

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
        $(this).removeClass('on')
        $('.btn-wrap').stop().slideUp()
        $(this).addClass('on')
        $('.btn-wrap').stop().slideDown()
    }
})
//모바일 탭 데이터값 가지고 오기
const buttons = document.querySelectorAll('.btn-wrap button');
const output = document.getElementById('output');

// 각 버튼에 클릭 이벤트 리스너를 추가합니다.
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // 클릭한 버튼의 값으로 스팬의 텍스트를 업데이트합니다.
        output.textContent = this.value;
        $('.sc-history .m-tab').removeClass('on')
        
    });
});


//슬라이드
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
    disableOnInteraction: false,
    
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
        // duration: 0.2,
        // ease: "power2.easeOut",
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







