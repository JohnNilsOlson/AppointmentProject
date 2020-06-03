$(document).ready(function(){
  $("#appointmentDetails").submit(function(event){
    const nameInput = $("input#name").val();
    const descriptionInput = $("input#description").val();
    const dateInput = $("input#date").val();
    const startTimeInput = $("input#startTime").val();
    const endTimeInput= $("input#endTime").val();

    $(".name1").text(nameInput);
    $(".description1").text(descriptionInput);
    $(".date1").text(dateInput);
    $(".startTime1").text(startTimeInput);
    $(".endTime1").text(endTimeInput);

    $("#output").show();
    
    event.preventDefault();

  })

});