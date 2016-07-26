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
	// it works!
	$(".task__button").on("click",".fa-star",function(){
		$(this).toggleClass('task__button--favorite');
	});

	//Delete task
	$(".task__button").on("click",".fa-trash-o",function(){
		var itemToDelete = $(this).closest(".row").addClass('task--delete');
		itemToDelete.remove();		
	});
});