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
		var itemToDelete = $(this).closest(".row");
		itemToDelete.remove();		
	});


	//Show tasks
	$(".task__button--add").on("click", function(){
		$(this).parent().siblings(".task__list").find(".task__form").toggleClass('task__form--hidden');
	});

	//Add tasks
	$(".task__button--save").on("click", function(){
		var title 		= $("#title").val();
		var description = $("#description").val();
		var icon 		= $("input:checked").val();

		var source = $("#task-template").html();
		var template = Handlebars.compile(source);

		var data = {
			tasks: [{
				title: title,
				description: description,
				icon: icon
			}]
		};

		console.log(data);
		$('.task__list').append(template(data));
	});

});