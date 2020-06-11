

$(function(){

$('.icon-item_about').not('.active').click(function(){
    var index = $(this).index();
    var content = $('.tabs__container').eq(index);
    $(this).addClass('active').siblings().removeClass('active');
    $('.tabs__container').css('display', 'none').eq(index).css('display', 'block');
})

    $('.icon-item_about:first').addClass('active');
    $('.tabs__container:first').css('display', 'block');

})

$(function(){

$('.icon-item_services').not('.active').click(function(){
    var index = $(this).index();
    var content = $('.text_cont').eq(index);
    $(this).addClass('active').siblings().removeClass('active');
    $('.text_cont').css('display', 'none').eq(index).css('display', 'block');
})

    $('.icon-item_services:first').addClass('active');
    $('.text_cont:first').css('display', 'block');

})

// функция диаграмм
var Circle = function(sel){
    var circles = document.querySelectorAll(sel);
    [].forEach.call(circles,function(el){
        var valEl = parseFloat(el.innerHTML);
        valEl = valEl*408/100;
        el.innerHTML = '<svg width="160" height="160"><circle transform="rotate(-90)" r="65" cx="-80" cy="80" /><circle transform="rotate(-90)" style="stroke-dasharray:'+valEl+'px 408px;" r="65" cx="-80" cy="80" /></svg>';
        
    });
};
Circle('.circle');
//masonry 
$(function() {
    $('.masonry__list li').click(function() {
        var get_id = this.id;
        var get_current = $('.masonry__container .' + get_id);

        $('.masonry__item').not(get_current).hide(400);
        get_current.show(400);
    });

    $('#all-works').click(function() {
        $('.masonry__item').show(400);
    });
})
// карусель резюме
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    dots:true,
  });
});


//прогресс бар 
$("svg.tbc").each(function(i, item) {
  var $item = $(item);
  var rate = $item.parent().find(".percent").attr("rate");
  $item.find(".bar").attr("width", rate);
});

//
$(document).ready(function(){
  $('.blog__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    dots: true,
    arrows: false,
    swipeToSlide: true 
  });

});
// //скролл 
// jQuery(function()
// {
//     jQuery('.scroll-pane').jScrollPane();
// });
//исчезновение блока в картах
function tgl_div() {
            div = document.querySelector('div.map_hover');
            div.style.display = div.style.display == "none" ? "block" : "none";
        }

