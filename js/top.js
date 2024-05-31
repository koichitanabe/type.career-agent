
/* スライド */
$(function(){
  var swiper = new Swiper('.slide_jobmap', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.button_next_02',
      prevEl: '.button_prev_02',
    },
  });

  var swiper = new Swiper('.slide_howto', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.button_next_01',
      prevEl: '.button_prev_01',
    },
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


/* タブメニュー */
// DOM取得
const tabMenus = document.querySelectorAll('.tab__menu-item');
console.log(tabMenus);

// イベント付加
tabMenus.forEach((tabMenu) => {
  tabMenu.addEventListener('click', tabSwitch);
})
// イベントの処理
function tabSwitch(e) {
  // クリックされた要素のデータ属性を取得
  const tabTargetData = e.currentTarget.dataset.tab;
  // クリックされた要素の親要素と、その子要素を取得
  const tabList = e.currentTarget.closest('.tab__menu');
  console.log(tabList);
  const tabItems = tabList.querySelectorAll('.tab__menu-item');
  console.log(tabItems);
  // クリックされた要素の親要素の兄弟要素の子要素を取得
  const tabPanelItems = tabList.
  nextElementSibling.querySelectorAll('.tab__panel-box');
  console.log(tabPanelItems);

  // クリックされたtabの同階層のmenuとpanelのクラスを削除
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove('is-active');
  })
  tabPanelItems.forEach((tabPanelItem) => {
    tabPanelItem.classList.remove('is-show');
  })

  // クリックされたmenu要素にis-activeクラスを付加
  e.currentTarget.classList.add('is-active');
  // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
  tabPanelItems.forEach((tabPanelItem) => {
    if (tabPanelItem.dataset.panel ===  tabTargetData) {
      tabPanelItem.classList.add('is-show');
    }
  })
}


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