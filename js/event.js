$(document).ready(function(){

    $("#fname, #lname").change(function(){
        const firstName = $("#fname").val();
        const lastName = $("#lname").val();

        $("#disname").text(firstName + " " + lastName);
    })

    $('#male, #female').change(function () {
        const sex = $("input[type='radio']:checked").val(); 
        $("#dissex").text(sex);
    });

    $("#nationality").change(function(){
        const nationality = $(this).val();
        $("#disnationality").text(nationality);
    })
})