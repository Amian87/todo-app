$(document).ready(function(){

	// Add item to list

	$(".submit_form").on('click', function(event){
		
		event.preventDefault();
		var user_todo = $(".text_box").val();
		$(".list").append('<li> <span>' + user_todo + '</span> <span> X </span> </li>');

	});
		
	
	// Delete item from list

	$(this).on('click', function(){
		alert("hey");


	});

	// $(".list > li:last-child > span:nth-child(2)").on('click', function(){
	
	// 	alert("delete");
	
	// });

		// 1. Delete should be functioning.
		// 	remove the item clicked on.
		// 2. Organize the code
		// 	break into two functions add item / remove item
		// 3. add or remove items in the browser database (local store & index db)
		// 	 load items from local storage
});