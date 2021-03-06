var ToDoApp = {};

$(document).ready(function() {

	var todoStorage = new Storage('todoList')

	if (!todoStorage.getValue()) {
		todoStorage.initialize();
	}

	$(".submit_form").on('click', function(event){

		event.preventDefault();
		var todo = $(".text_box").val();
		addItemAsync(todo).done(function() {
				todoStorage.saveValue(todo)
				addToList(todo);
			}
		);

	}); 

	$(document).on('click', 'li', function(todos){
	removeItemAsync(todos.currentTarget.innerText.trim()).done(function(todos){
		$(this).remove();
		todoStorage.removeValue();	
	  });
	});

	function removeItemAsync(item){
		return $.ajax({method: "DELETE", url:"/api/todo", data:{"item": item}, headers: {
		"content-type":"x-www-form-urlencoded"}

	})
	}

	getItemAsync().done(function(todos){
		var todoListArray = todoStorage.getValue();
		$.each(todos, function(index, value){
			addToList(value);
		});
	});

	function getItemAsync (item) {
		return $.ajax({method: "GET", url: "/api/todo"})
	}

	function addItemAsync (item){
		return $.ajax({ method: "POST", url: "/api/todo", data:{"item": item}
		})
	}


	function addToList (item) {
		$(".list").append('<li> <span>' + item + '</span> <img id="deleteImg" src="/images/delete.png" /> </li>');
	}

});