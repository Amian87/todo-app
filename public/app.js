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
		addToList(todo);

	}); 

	$(document).on('click', 'li', function(){
		$(this).remove();
		todoStorage.removeValue(this.innerText.trim());

	});


	var todoListArray = todoStorage.getValue();
		$.each(todoListArray, function(val, todoListArray){
			addToList(todoListArray);
		});


	function addToList (item) {
		$(".list").append('<li> <span>' + item + '</span> <img id="deleteImg" src="/images/delete.png" /> </li>');
	}

});