
$(document).ready(function () {
   
    var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm" ];
    
    console.log(times)
    
    for(var i = 0; i< times.length; i++) { 
    
        var newEl = $("<div>");
        var timeEl = $("<div>");
        var desEl = $("<textArea>");
        var btnEl = $("<button>");
        var iconEl = $("<i>");


        newEl.attr("data-hour", times[i]);
        newEl.attr("class", "row");
        timeEl.attr("class", "time-Block col-1");
        desEl.attr("class", "description col-10",);
        btnEl.attr("class", "saveBtn col-1");
        iconEl.attr("class", "far fa-save");
        
        $(".container").append(newEl);
        
        newEl.append(timeEl);
        newEl.append(desEl);
        newEl.append(btnEl);
        btnEl.append(iconEl);
        
        timeEl.text(times[i]);
    
    }

})