
 $(document).ready(function(){
  $('.fade').slick({
    accessibility: true,
    arrows: true,
    autoplay: true, //自動再生
    dots: true, //ドットのナビゲーションを表示
    infinite: true, //スライドのループ有効化
    speed: 1000, //切り替えのスピード（小さくすると速くなる）
    fade: true, //フェードの有効化
  });
});

$('.thumbnail').slick({
  infinite: true, //スライドのループ有効化
  arrows: false, //矢印非表示
  fade: true, //フェードの有効化
  draggable: false //ドラッグ操作の無効化
});
$('.thumbnail-thumb').slick({
  infinite: true, //スライドのループ有効化
  slidesToShow: 6, //表示するスライドの数
  focusOnSelect: true, //フォーカスの有効化
  asNavFor: '.thumbnail', //thumbnailクラスのナビゲーション
});


$(function() {
	// 初期表示を非表示にする
	$('.sakebi').hide();

	$("button").click(function() {
		// 表示する
    $(".sakebi").show();
  })
  ;})

 
  $('.sakebi').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 9000,
    arrows: false,
    cssEase: 'linear',
responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 5
    }
}]
});






// $('.lang-select').click(function() {
//   var lang = $(this).attr('data-lang');
//   window.location = $(this).attr('href');
//   location.reload();
// });

// function googleTranslateElementInit() {
//   new google.translate.TranslateElement({
//     pageLanguage: 'ja', 
//     layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT
//   }, 'google_translate_element');

