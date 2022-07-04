new Pageable("#wrapper", {
	animation: 500,
	
	onScroll: function() {
	
	},

});


// gnb
$('#gnbwrap').on('mouseenter', () => {
  $('nav #gnbwrap .gnb_sub').stop().slideDown();
});
$('#gnbwrap').on('mouseleave', () => {
  $('nav #gnbwrap .gnb_sub').stop().slideUp();
});

$('.round_btn').on('mouseenter', () => {
  $('.bg7 .email_box').stop().slideDown();
});
$('.round_btn').on('mouseleave', () => {
  $('.bg7 .email_box').stop().slideUp();
});