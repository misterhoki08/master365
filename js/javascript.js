$(document).ready(function () {
	$("#btn-menu").click(function(){
		var is_display = $(".dropdown-menu").css('display') == 'block';
		$(".dropdown-menu").css('display', is_display ? 'none' : 'block');
	});
});