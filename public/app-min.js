var ToDoApp={};$(document).ready(function(){function e(e){$(".list").append("<li> <span>"+e+'</span> <img id="deleteImg" src="/images/delete.png" /> </li>')}var t=new Storage("todoList");t.getValue()||t.initialize(),$(".submit_form").on("click",function(i){i.preventDefault();var n=$(".text_box").val();t.saveValue(n),e(n)}),$(document).on("click","li",function(){$(this).remove(),t.removeValue(this.innerText.trim())});var i=t.getValue();$.each(i,function(t,i){e(i)})});