/////////////top-pop
$(document).ready(function () {
  $('#pop-btn').on('click',function(){
    
  if($('#pop-btn').hasClass('off')){
    $('.top-pop').css('height','50px');
    $('.pop-text').removeClass('d-none');
    $('#pop-btn').removeClass('off');
    $('#pop-btn').addClass('on');
    $('#pop-btn').removeClass('xi-angle-down');
    $('#pop-btn').addClass('xi-angle-up');
}else{
    $('.top-pop').css('height','20px');
    $('.pop-text').addClass('d-none');
    $('#pop-btn').removeClass('on');
    $('#pop-btn').addClass('off');
    $('#pop-btn').removeClass('xi-angle-up');
    $('#pop-btn').addClass('xi-angle-down');
}
  });
});

/////스크롤 따라다니는 헤더
onscroll = function() {
  var nVScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if(nVScroll > 100){
    $("#header").addClass('fixed');
    $("#header").removeClass('absol');
  } 
  else{ 
    $("#header").removeClass('fixed');
    $("#header").addClass('absol');
}
};


