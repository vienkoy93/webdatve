$(document).ready(function() {
		$('.nav-link a').click(function(event) {
			event.preventDefault();
			part = $(this).attr('href'); // lấy id của thẻ tương ứng
			position = $(part).offset().top; // tìm vị trí 
			$('html, body').animate({scrollTop: position},1000,'easeInOutSine');
		});
});
//tat video modal
$('#videoModal').on('hidden.bs.modal', function () {
    $("#videoModal iframe").attr("src", $("#videoModal iframe").attr("src"));
});
//
$("#dates").click(function(){
  $("#showtimes").show();
});