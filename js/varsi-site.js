$(document).ready(function() {
	// Fills the icon background to allow user to see they clicked
	// When icon is moused over it will then show the ul for the menu choices
	// Fallback for mobile where hover doesn't always work

    $('#menu-icon').mouseenter(function(){
    	$(this).css("background-color", "#0099cc");
    	$(this).on('click', function(){
    		$('ul#mobile').css("display", "block");
    	});
    });
});