$(document).ready(function() {
    var i = 0;

// 1920 슬라이드
$(".right").click(function() {
    if (i < 2) {
        i++;
    }
    $(".sec_6_con_list").animate({
        left: - (33.3 * i) + "%"
    });
});

$(".left").click(function() {
    if (i > 0) {
        i--;
    }
    $(".sec_6_con_list").animate({
        left: - (33.3 * i) + "%"
    });
});


// 가로 1500 미만일 시 가로 위치 원복
$(window).resize(function() {
    if ($(window).width() < 1500) {
        i = 0;
        $(".sec_6_con_list").css({
            left: "0"});
    }
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    /* spaceBetween: 30, */
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

});

});