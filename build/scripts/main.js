$(window).load(function(){

	// Checking/Unchecking tasks
	var checkbox = $("input[type=checkbox]");
	checkbox.on("click", checkingTasks);

	function checkingTasks () {
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
	}

	// Favorites
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
		var task__form = $(this).parent().siblings(".task__list").find(".task__form").toggleClass('task__form--hidden');
		$(".fa").toggleClass('fa-minus-square-o');
		//$(this).is(":visible") ? $(this).find(".fa-plus").attr('class', 'fa fa-minus-square-o') : $(this).find(".fa-minus-square-o").attr('class', 'fa fa-plus');
	});

	//Add tasks
	$(".task__button--save").on("click", function(){
		var title 		= $("#title").val();
		var description = $("#description").val();
		var icon 		= $("input:checked").val();
		var countCheck  = Math.floor((Math.random() * 100) + 1);

		var source = $("#task-template").html();
		var template = Handlebars.compile(source);

		var data = {
			tasks: [{
				title: title,
				description: description,
				icon: icon,
				countCheck: countCheck
			}]
		};

		
		$('.task__list').append(template(data));

		checkbox = $("input[type=checkbox]");
		checkbox.on("click", checkingTasks);
	});

});