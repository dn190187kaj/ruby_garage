$(document).ready(function(){
	var table_row = '<tr><td class="checkbox"><input type="checkbox" name="task1"></td><td class="space"></td><td class="name">Add Javascript to implement adding / editing / removing fot todo items and lists taking into account as more use cases as possible</td><td class="buttons"><ul class="hide"><li><a href="#"></a></li><li><a href="#"></a></li><li><a href="#"></a></li></ul></td></tr>';
	var new_list = '<section><div class="header"><h4>For Home</h4><ul><li><a href="#"></a></li><li><a class="delete" href="#"></a></li></ul></div><table><tr><th colspan="2"><div class="plus_green"></div></th><th><form><input type="text" name="create_field" placeholder="Start typing here to create a task"></form></th><th><div for="create_field"><a href="#">Add Task</a></div></th></tr></table><div class="table_bottom"></div></section>';
	// Добавляем лист
	$('.add_list').click(function(){
		$(this).parent().before(new_list);
	})

	// Добавляем строку
	$('.plus_green').click(function(){

		$(this).parent().parent().parent().append(table_row);
	})

	// Удаляем строку
	$('.delete').click(function(){
		$(":checked").parent().parent().remove();
	})
});

