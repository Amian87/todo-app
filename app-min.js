var ToDoApp={};$(document).ready(function(){var e=new Storage("todoList");e.getValue()||e.initialize(),$(".submit_form").on("click",function(i){i.preventDefault();var t=$(".text_box").val();e.saveValue(t),$(".list").append("<li> <span>"+t+'</span> <img id="deleteImg" src="images/delete.png" /> </li>')}),$(document).on("click","li",function(){$(this).remove(),e.removeValue(this.innerText.trim())});var i=e.getValue();$.each(i,function(e,t){$(".list").append("<li> <span>"+i+'</span> <img id="deleteImg" src="images/delete.png" /> </li>')}),vc});