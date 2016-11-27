var ToDoApp = {};

$(document).ready(function() {

	var todoStorage = new Storage('todoList')

	if (!todoStorage.getValue()) {
		todoStorage.initialize();
	}

	$(".submit_form").on('click', function(event){

		event.preventDefault();
		var todo = $(".text_box").val();
		todoStorage.saveValue(todo);
		// $(".list").append('<li> <span>' + todo + '</span> <img id="deleteImg" src="images/delete.png" /> </li>');
		addToList(todo);

	});

	$(document).on('click', 'li', function(){
		$(this).remove();
		todoStorage.removeValue(this.innerText.trim());

	});


	var todoListArray = todoStorage.getValue();
		$.each(todoListArray, function(val, todoListArray){
			// $(".list").append('<li> <span>' + todoListArray + '</span> <img id="deleteImg" src="images/delete.png" /> </li>');
			addToList(todoListArray);
		});


	function addToList (item) {
		$(".list").append('<li> <span>' + item + '</span> <img id="deleteImg" src="/images/delete.png" /> </li>');
	}

});