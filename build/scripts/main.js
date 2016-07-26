$(window).load(function(){

	// Checking/Unchecking tasks
	$("input[type=checkbox]").on("click", function(){

		var currentCheck = $(this).parent().siblings();

		if($(this).is(':checked')){

			currentCheck.find('.task__item--title, .task__item--description').addClass('task__item--completed');
			currentCheck.find('.task__icon > .fa').addClass('task__icon--completed');
			currentCheck.find('.fa-star').attr('class', 'fa fa-trash-o');

		}else{

			currentCheck.find('.task__item--title, .task__item--description').removeClass('task__item--completed');
			currentCheck.find('.task__icon > .fa').removeClass('task__icon--completed');
			currentCheck.find('.fa-trash-o').attr('class', 'fa fa-star');

		}
	});

	// Favorites
	// it works! but works with fa-trash-o too :(
	$(".fa-star").on("click",function(){
		$(this).toggleClass('task__button--favorite');
	});
});