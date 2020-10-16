// Check/uncheck an item on the list
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Delete an item on the list
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });

    e.stopPropagation();
});

// Add an item to the list
$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        // Grab text from input and reset input value
        let todoText = $(this).val();
        $(this).val("");

        // create new li with todoText and add to ul
        $('ul').append("<li><span>X</span> " + todoText + "</li>");
    }
})