$(".description").on("click", function(){
    var currentText = $(this).closest("textarea").text();
})

$(".description").on("blur", function(){
    var newText = $(this).closest("textarea").val();
    currentText = newText;

    saveTasks();
})


saveTasks = function(){
    localStorage.setItem("description", JSON.stringify(currentText));
}

loadTasks = function(){
    var text = JSON.parse(localStorage.getItem("description"));
    console.log(text);
    $(this).closest("textarea") = text;

}

loadTasks();