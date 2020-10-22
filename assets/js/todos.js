// Make the List Items Sortable (Drag and move)
$("#sortable").sortable();
$("#sortable").disableSelection(); // prevent accidentally selecting an item while dragging

alert('js connected');

// Count how many items is left to complete
countTodos();

// Complete all the Items
$("#completeAllItems").click(function () {
  completeAllItems();
});

// Create a To-Do Item
$("addToDoItem").on("keypress", function (e) {
  e.preventDefault;
  if (e.which == 13) {
    if ($(this).val != "") {
      var toDo = $(this).val();
      createToDoItem(toDo);
      countTodos();
    } else {
      // Validate
    }
  }
});

// Complete an Item from the ToDoList
$(".todoList").on("change", "#sortable li input[type=checkbox]", function () {
  if ($(this).prop("checked")) {
    let doneItem = $(this).parent().parent().find("label").text();
    $(this).parent().parent().parent().addClass('remove');
    done(doneItem);
    countTodos();
  }
});

// Delete an Item from the Completed ToDoList
$('.todolist').on('click', '.removeItem', function(){
    removeItem(this);
});

// Count Amount of Items
function countTodos() {
    let count = $("sortable li").length;
    $('.count-todos').html(count);
}

// Create a new Item
function createToDoItem(item){
    let markup = '<li class="ui-state-default"><div class="checkbox"><label><input type="checkbox" value="" />'+ item +'</label></div></li>';
    $('#sortable').append(markup);
    $('.add-todo').val('');
}

// Set an Item to be Done
function done(doneItem){
    let done = doneItem;
    let markup = '<li>'+ done +'<button class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>';
    $('#completedItems').append(markup);
    $('.remove').remove();
}

// Set All Items to be Done
function completeAllItems(){
    var myArray = [];

    $('#sortable li').each( function() {
         myArray.push($(this).text());   
    });
    
    // add to done
    for (i = 0; i < myArray.length; i++) {
        $('#completedItems').append('<li>' + myArray[i] + '<button class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>');
    }
    
    // myArray
    $('#sortable li').remove();
    countTodos();
}

// Remove an Item from the Completed ToDoList
function removeItem(item) {
    $(item).parent().remove();
}