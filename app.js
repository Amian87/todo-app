var ToDoApp = {};

$(document).ready(function() {

	var todoStorage = new Storage('todoList')

	if (!todoStorage.getValue()) {
		todoStorage.initialize();
	}

	$(".submit_form").on('click', function(event){

		event.preventDefault();
		var todo = $(".text_box").val();
		todoStorage.putValue(todo);
		$(".list").append('<li> <span>' + todo + '</span> <img id="deleteImg" src="images/delete.png" /> </li>');

	});

	$(document).on('click', 'li', function(){
		$(this).remove();
		todoStorage.removeValue(this.innerText.trim());

	});


	var todoArray = todoStorage.getValue();
			$.each(todoArray, function(val, todoArray){
			$(".list").append('<li> <span>' + todoArray + '</span> <img id="deleteImg" src="images/delete.png" /> </li>');
		});


});