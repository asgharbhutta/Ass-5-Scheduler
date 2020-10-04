$(document).ready(function() {
    $(".saveBtn").on("click", function(){
        //listen for even click
         var value = $(this).siblings(".description").val(); //this value comes from the description box
         var time = $(this).parent().attr("id"); // this is the value in the id="hour-9"

         //save to localstorage
         localStorage.setItem(time, value);
    });

    $(".description").on("click", function(){
        $(this).addClass("target");
    })

    $(".description").on("blur", function(){
        $(this).removeClass("target");
    })

    function hourUpdated(){
        //store current time
        var currentHour = moment().hours();

        $(".time-block").each(function(){
            var blockHour = parseInt($(this).attr("id").split("-")[1]);

            //check conditionals to see which classes to apply
            if(blockHour < currentHour){
                $(this).addClass("past");
                //$(this).removeClass("present");
                //$(this).removeClass("future");
            }
            else if(blockHour === currentHour){
                $(this).removeClass("past");
                $(this).addClass("present");
                //$(this).removeClass("future");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }         
        });
    }

    hourUpdated();

    var interval = setInterval(hourUpdated, 15000);

    //load local storage data
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-1 .description").val(localStorage.getItem("hour-13"));
    $("#hour-2 .description").val(localStorage.getItem("hour-14"));
    $("#hour-3 .description").val(localStorage.getItem("hour-15"));
    $("#hour-4 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    $("#currentDay").text(moment().format("dddd, MMMM Do"));

});

