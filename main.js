$(document).ready(function(){
	// Добавляем лист
	$('.add_list').click(function(){
		var task_list_name = prompt('Enter TASK LIST name', 'My task list');
		new_list = '<section><div class="header"><h4>' + task_list_name + '</h4><ul><li><a class="rename" href="#"></a></li><li><a class="delete" href="#"></a></li></ul></div><table><tr><th colspan="2"><div class="plus_green"></div></th><th><form><input type="text" name="create_field" placeholder="Start typing here to create a task"></form></th><th><div class="add_row" for="create_field"><a href="#">Add Task</a></div></th></tr></table><div class="table_bottom"></div></section>';
		$(this).parent().before(new_list);
	})

	// Добавляем строку (плюсик)
	$('body').on('click', '.plus_green', function(){
	var task_name = $(this).parent().parent().children().children('form').children('[name="create_field"]').val();
	table_row = '<tr><td class="checkbox"><input type="checkbox" name="task1"></td><td class="space"></td><td class="name">' + task_name + '</td><td class="buttons"><ul class="hide"><li><a class="up" href="#"></a><hr><a class="down" href="#"></a></li><li><a class="rename_one_row" href="#"></a></li><li><a class="delete_one_row" href="#"></a></li></ul></td></tr>';
		$(this).parent().parent().parent().append(table_row);
		$(this).parent().parent().children().children('form').children('[name="create_field"]').val('');
	})

		// Добавляем строку (осн.кнопка)
	$('body').on('click', '.add_row', function(event){
	var task_name = $(this).parent().parent().children().children('form').children('[name="create_field"]').val();
	table_row = '<tr><td class="checkbox"><input type="checkbox" name="task1"></td><td class="space"></td><td class="name">' + task_name + '</td><td class="buttons"><ul class="hide"><li><a class="up" href="#"></a><hr><a class="down" href="#"></a></li><li><a class="rename_one_row" href="#"></a></li><li><a class="delete_one_row" href="#"></a></li></ul></td></tr>';
		$(this).parent().parent().parent().append(table_row);
		$(this).parent().parent().children().children('form').children('[name="create_field"]').val('');
		event.preventDefault();
	})

	// Удаляем TODO LIST (осн.кнопка)
	$('body').on('click', '.delete', function(event){
		$(this).parent().parent().parent().parent().remove();
		event.preventDefault();
	})

		// Переименовываем TODO LIST (осн.кнопка)
	$('body').on('click', '.rename', function(event){
		var rename = prompt('Enter TASK LIST name', 'My task list');
		if (rename != null) {
			$(this).parent().parent().parent().children('h4').html(rename);
		}
		event.preventDefault();
	})

		// Удаляем строку (всплывающая кнопка)
	$('body').on('click', '.delete_one_row', function(event){
		$(this).parent().parent().parent().parent().remove();
	event.preventDefault();
	})

		// Переименовываем строку (всплывающая кнопка)
	$('body').on('click', '.rename_one_row', function(event){
		var rename_one_row = prompt('Enter TASK name', 'My task');
		if (rename_one_row != null) {
			$(this).parent().parent().parent().parent().children('.name').html(rename_one_row);
		}
		event.preventDefault();
	})

		//Смещение вниз
	$('body').on('click', '.down', function(event){
		var row = $(this).parent().parent().parent().parent();
		row.insertAfter(row.next());
		event.preventDefault();
	})

		//Смещение вверх
	$('body').on('click', '.up', function(event){
		var row = $(this).parent().parent().parent().parent();
		row.insertBefore(row.prev());
		event.preventDefault();
	})

});
