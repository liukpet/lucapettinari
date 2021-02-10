$("document").ready(function (){

  $("#contact-button").click(function (){
    document.getElementsByTagName("FOOTER")[0].scrollIntoView();
  });

  let offset = 250;
  let animation_delay = 1500; // ms
  let state = false;

  var div_animated = Array.from(this.querySelectorAll(".div-animated"))
  div_pos = div_animated.map(div => {return div.getBoundingClientRect().top - offset});
  dots_pos = document.getElementsByClassName("cdots")[0].getBoundingClientRect().top;
  animation = Array.from({length: div_pos.length}, i => i = false);

  $(window).scroll(function (){
    let scroll_position = window.scrollY;

    if (scroll_position > dots_pos && state === false) {
      $(".mainpage-section-1").animate({backgroundColor: "#343a40"}, 500);
      state = !state;
    }

    for (var i = 0; i < div_pos.length; i++){
      if (scroll_position > div_pos[i] && !animation[i]) {
        $(div_animated[i]).animate({opacity: "1"}, animation_delay);
        animation[i] = true;
      }
    }
  });
});
