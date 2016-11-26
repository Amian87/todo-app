var ToDoApp = {};

$(document).ready(function() {

	var toDoStorage = new Storage('todoList')

	if (!toDoStorage.getValue()) {
		toDoStorage.initialize();
	}

	$(".submit_form").on('click', function(event){

		event.preventDefault();
		var toDo = $(".text_box").val();
		toDoStorage.putValue(toDo);
		$(".list").append('<li> <span>' + toDo + '</span> <img id="deleteImg" src="images/delete.png" /> </li>');

	});

	$(document).on('click', 'li', function(){
		$(this).remove();
		toDoStorage.removeValue(this.innerText.trim());
	});
});