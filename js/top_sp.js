
/* スライド */
$(function(){
  var swiper = new Swiper('.slide_sp', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 18,
  });
});


/* 高さ揃え */
$(function(){
  var h = 0;
  $("#cJob-map section").each(function(){
    if($(this).height() > h){
      h = $(this).height();
    }
  });
  $("#cJob-map section").css("height", h + "px");
});
$(function(){
  var h = 0;
  $("#cHowto section").each(function(){
    if($(this).height() > h){
      h = $(this).height();
    }
  });
  $("#cHowto section").css("height", h + "px");
});
$(function(){
  var h = 0;
  $("#cSodan section").each(function(){
    if($(this).height() > h){
      h = $(this).height();
    }
  });
  $("#cSodan section").css("height", h + "px");
});
$(function(){
  var h = 0;
  $("#cIssue-job section").each(function(){
    if($(this).height() > h){
      h = $(this).height();
    }
  });
  $("#cIssue-job section").css("height", h + "px");
});
$(function(){
  var h = 0;
  $("#cInterview section").each(function(){
    if($(this).height() > h){
      h = $(this).height();
    }
  });
  $("#cInterview section").css("height", h + "px");
});


/* アコーディオン */
$(document).ready(function(){
    $('.js-slideUp dt').on('click', function() {
      $('.js-slideUp dd').slideUp(500);
      var findElm = $(this).next(".js-slideUp dd");
      if($(this).hasClass('open')){
        $(this).removeClass('open');
      }else{
        $('.open').removeClass('open');
        $(this).addClass('open');
        $(findElm).slideDown(500);
      }
    });
});

/* ヘッダー */
var beforePos = 0;
function ScrollAnime() {
    var elemTop = $('#cPoint').offset().top;
	  var scroll = $(window).scrollTop();
    //ヘッダーの出し入れをする
    if(scroll == beforePos) {
		//IE11対策で処理を入れない
    }else if(elemTop > scroll || 0 > scroll - beforePos){
		//ヘッダーが上から出現する
		$('#header').removeClass('UpMove');	//#headerにUpMoveというクラス名を除き
		$('#header').addClass('DownMove');//#headerにDownMoveのクラス名を追加
    }else {
		//ヘッダーが上に消える
        $('#header').removeClass('DownMove');//#headerにDownMoveというクラス名を除き
		$('#header').addClass('UpMove');//#headerにUpMoveのクラス名を追加
    }
    
    beforePos = scroll;
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});
$(window).on('load', function () {
	ScrollAnime();
});

$(".btn-search").click(function () {
  $(".search_header").fadeToggle();
});



/* ページトップ */
const scroll_to_top_btn = document.querySelector('#top');

//クリックイベントを追加
scroll_to_top_btn.addEventListener( 'click' , scroll_to_top );

function scroll_to_top(){
  window.scroll({top: 0, behavior: 'smooth'});
};
window.addEventListener( 'scroll' , scroll_event );

function scroll_event(){
	
	if(window.pageYOffset > 400){
		scroll_to_top_btn.style.opacity = '1';
	}else	if(window.pageYOffset < 400){
		scroll_to_top_btn.style.opacity = '0';
	}
	
};

// ドロワーナビゲーション
$(".header_toggle").click(function () {
	$(this).toggleClass('active');
    $(".header-nav").toggleClass('nav-active');
});

$(".header-nav a").click(function () {
    $(".header_toggle").removeClass('active');
    $(".header-nav").removeClass('nav-active');
    $(".btn-search").show();
});