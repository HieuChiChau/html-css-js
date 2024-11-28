$(document).ready(function(){
    $('.main-form').validate({
        rules:{
            first_name:{
                required: true,
                maxlength: 25
            },
            last_name:{
                required: true,
                maxlength: 25
            },
            year_old:{
                required: true,
                number: true,
                min: 15,
                max:150
            },
            date:{
                required: true,
                date: true
            },
            phone:{
                required: true,
                patern: /^\?+\d+$/
            }
        },
        messages:{
            first_name:{
                required: "Enter your First Name",
                maxlength: "First Name should not exceed 25 characters",
            },
            last_name:{
                required: "Enter your Last Name",
                maxlength: "Last Name should not exceed 25 characters",
            },
            year_old:{
                required: "Enter your Age",
                number: "Age should be a number",
                min: "Age should be at least 15",
                max: "Age should not exceed 150",
            },
            date:{
                required: "Enter Date",
                date: "Format dd/mm/yyyy",
            },
            phone:{
                required: "Enter your Phone Number",
                patern: "Format phone"
            }
        },
        submitHandler: function(form){
            alert("Form Submitted Successfully");
            form.submit();
        }
    });
})