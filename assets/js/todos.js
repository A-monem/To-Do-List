// check off to do
$("ul").on("click", "li", function(){
    $(this).toggleClass("checked_off"); 
});

// delete to do
$("ul").on("click", "span",  function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//adding to do
$("input[type='text']").keypress(function (e) { 
    if (e.which === 13){
        var new_todo= $(this).val();
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ new_todo +"</li>");
        $(this).val("");
    }
});

$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
    $("input[type='text']").val("");
});