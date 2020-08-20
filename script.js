$(document).ready(function () {

// I need a var for the times in the planner
// I need need a var for moment.js

    var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm" ];
    var mom = moment();
    var date = mom.format("dddd MMM Do YYYY")
    console.log(times)
    
    
    $("#currentDay").text(date);
    $("#currentDay").css({"font-size":"24px", "font-weight":"bold"});
   
// create an element for the planner itself, time, input area, and save button     
    
    
    
    for(var i = 0; i< times.length; i++) { 
    
        var newEl = $("<div>");
        var timeEl = $("<div>");
        var desEl = $("<textArea>");
        var btnEl = $("<button>");
        var iconEl = $("<i>");
    

        newEl.attr("data-hour", times[i]);
        newEl.attr("class", "row");
        timeEl.attr("class", "time-Block col-1");
        desEl.attr("class", "description col-10");
        const value = localStorage.getItem(times[i]) || "";
        desEl.val(value);
        btnEl.attr("class", "saveBtn col-1");
        iconEl.attr("class", "far fa-save");
        
        $(".container").append(newEl);
        newEl.append(timeEl);
        newEl.append(desEl);
        newEl.append(btnEl);
        btnEl.append(iconEl);
        timeEl.text(times[i]);
        
        

        btnEl.click(function() {
            var data = $(this).parent().find(".description").val()
            var key = $(this).parent().attr("data-hour")
            localStorage.setItem(key, data);
    
        })
      
    }
    localStorage.getItem("data")
})