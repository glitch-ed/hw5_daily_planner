$(document).ready(function () {

    // I need a var for the times in the planner
    // I need need a var for moment.js

    let times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm" ];
    let mom = moment();
    let date = mom.format("dddd MMM Do YYYY")
    console.log(times)
    
    
    $("#currentDay").text(date);
    $("#currentDay").css({"font-size":"24px", "font-weight":"bold"});
   
    // create an element for the planner itself, time, input area, and save button     
   
    
    
    for(i = 0; i< times.length; i++) { 
    
        let newEl = $("<div>");
        let timeEl = $("<div>");
        let desEl = $("<textArea>");
        let btnEl = $("<button>");
        let iconEl = $("<i>");
    
        //create class attributes for elements to get a handle on them
        newEl.attr("data-hour", times[i]);
        newEl.attr("class", "row");
        timeEl.attr("class", "time-Block col-1");
        
        // set text for input area to local storage
        // added the or operator to set the value to the local storage or empty
        desEl.attr("class", "description col-10");
        const value = localStorage.getItem(times[i]) || "";
        desEl.val(value);
        
        //need to pull the image for the btn
        btnEl.attr("class", "saveBtn col-1");
        iconEl.attr("class", "far fa-save");
        
        $(".container").append(newEl);
        newEl.append(timeEl);
        newEl.append(desEl);
        newEl.append(btnEl);
        btnEl.append(iconEl);
        timeEl.text(times[i]);
        
        //if statement for colorchange?
        //since moment is in military time, need to add 9 to i to bring it to 9 and so on
        //simple if else statements adding class attr for css property 
        if((i+9) < moment().hour()){
            desEl.attr("class", "past col-10 description");
        }else if((i+9) === moment().hour()){
            desEl.attr("class", "present col-10 description");
        }else{
            desEl.attr("class", "future col-10 description");
        }
        
        
        
        
        
        
        //click function to set the value of the desciption to localStorage
        //used .parent and .find to locate .description in it's parent
        //ued .parent.attr to locate the attribute of the element and use said element as the key

        btnEl.click(function() {
            let data = $(this).parent().find(".description").val()
            let key = $(this).parent().attr("data-hour")
            localStorage.setItem(key, data);
    
        })
      
    }
    
})











