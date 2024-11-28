$(document).ready(function(){

    $("#first-name, #last-name").change(function(){
        const firstName = $("#first-name").val();
        const lastName = $("#last-name").val();

        $("#display-name").text(firstName + " " + lastName);
    })

    $('#male, #female').change(function () {
        const sex = $("input[type='radio']:checked").val(); 
        $("#display-sex").text(sex);
    });

    $("#nationality").change(function(){
        const nationality = $(this).val();
        $("#display-nationality").text(nationality);
    })
})