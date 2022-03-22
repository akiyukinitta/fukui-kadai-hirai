$('.slider').slick({
    autoplay: true, //自動的再生
    autoplaySpeed: 3000,  //3秒毎に再生
    dots: true,//下部ドットナビゲーションの表示
    infinite: true,//スライドをループさせる。
    slidesToShow: 4,//スライドを画面に4枚見せる
    slidesToScroll: 4,//1回のスクロールで4枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
    arrows: false,
    adaptiveHeight: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 769,//モニターの横幅が769px以下の見せ方
        settings: {
          slidesToShow: 1,//スライドを画面に1枚見せる
          slidesToScroll: 4,//1回のスクロールで4枚の写真を移動して見せる
          centerMode: false,
        }
      },
    ]
  });