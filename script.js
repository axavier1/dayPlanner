// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {    
    var saveBtn = $(".saveBtn");

    //set current date at top of page
    $("#currentDay").text(dayjs().format('dddd MMMM D YYYY'));

    var hour = dayjs().hour();
    //console.log(hour); 
    function timeBlockColor() {
        
        $(".time-block").each(function() {
            var currHour = parseInt($(this).attr("id"));
    
            if (currHour > hour) {
                $(this).addClass("future");
            } else if (currHour === hour) {
                $(this).addClass("present");
            } else {
                $(this).addClass("past");
            }
        })
    };

    saveBtn.on("click", function() {

        var time = $(this).siblings(".hour").text();
        var plan = $(this).siblings(".plan").val();
    
        localStorage.setItem(time, plan);
    });
    function usePlanner() {

        $(".hour").each(function() {
            var currHour = $(this).text();
            var currPlan = localStorage.getItem(currHour);
    
            if(currPlan !== null) {
                $(this).siblings(".plan").val(currPlan);
            }
        });
    }    
  


    timeBlockColor();
    usePlanner();


});
