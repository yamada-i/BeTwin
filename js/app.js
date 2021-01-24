$(function() {
  const width = window.parent.screen.width;
  if(width <= 768) {
    $('.slick-slider').slick( {
      autoplay: true,
      dots: true,
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  //スマホレイアウト時、施工事例ページ詳細セクションの画像をテキストの間に移動
  const width = window.parent.screen.width;
  console.log(width);
  const before1 = document.querySelector('#js-insertBefore1');
  const target1 = document.querySelector('#js-insertTarget1');
  const parent1 = before1.parentNode;

  const before2 = document.querySelector('#js-insertBefore2');
  const target2 = document.querySelector('#js-insertTarget2');
  const parent2 = before2.parentNode;

  const before3 = document.querySelector('#js-insertBefore3');
  const target3 = document.querySelector('#js-insertTarget3');
  const parent3 = before3.parentNode;

  if(width <= 768) {
    parent1.insertBefore(target1, before1);
    parent2.insertBefore(target2, before2);
    parent3.insertBefore(target3, before3);
  
  }

  var timer = 0;
  var currentWidth = window.innerWidth;
	window.onresize = function() {
    if (currentWidth == window.innerWidth) {
      return;
    }
    if (timer > 0) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      location.reload();
    }, 200);
	};
});



