$(function(){
	console.log( "ready!" );
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
	$(document).on("click",".fa-star",function(){
		$(this).toggleClass('task__button--favorite');
	});

	//Delete task
	$(document).on("click",".fa-trash-o",function(){
		var itemToDelete = $(this).closest(".row");
		itemToDelete.remove();	
	});


	//Show tasks
	$(".task__button--add").on("click", function(){
		var task__form = $(".task__form").toggleClass('task__form--hidden');
		$(this).find(".fa-plus").toggleClass('fa-minus');
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
		$("#title").val("");
		$("#description").val("");

		var close__form = $(this).parent().parent().parent().toggleClass('task__form--hidden');
		var change_icon  = $(".task__button--add").find(".fa-minus").removeClass('fa-minus');

	});

});