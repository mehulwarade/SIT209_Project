const API_URL = 'http://localhost:5000/api';


//#region predef

(function ($) {
    "use strict";

    /*==================================================================
    [ Validate after type ]*/
    $('.validate-input .input100').each(function(){
        console.log("1");
        $(this).on('blur', function(){
            if(validate(this) == false){
                showValidate(this);
            }
            else {
                $(this).parent().addClass('true-validate');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        console.log("2");
        var check = true;
        
        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        console.log("4");
        $(this).focus(function(){
           hideValidate(this);
           $(this).parent().removeClass('true-validate');
        });
    });

     function validate (input) {
        console.log("5");
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        console.log("6");
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
        $(thisAlert).append('<span class="btn-hide-validate">&#xf135;</span>')
        $('.btn-hide-validate').each(function(){
            $(this).on('click',function(){
               hideValidate(this);
            });
        });
    }

    function hideValidate(input) {
        console.log("7");
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
        $(thisAlert).find('.btn-hide-validate').remove();
    }
    
    

})(jQuery);


  //#endregion
$('#register').on('click', function () {    
    const name = $('#reg_name').val();
    const email = $('#reg_email').val();
    const user = $('#reg_username').val();
    const password = $('#reg_password').val();
    const confirm_password = $('#reg_confirm_password').val();

    if(password === confirm_password){
       $.post(`${API_URL}/register`, { name, user, password, email}).then((response) =>{
            if (response.success) {                 
                window.open('/shroud.html#t2','_parent');
                location.href = '/shroud.html#t2';
            } 
            else {
                console.log($,{response});
                $('#message').append(`<p class="alert alert-danger">${response}</p>`);
            }
        });       
    }
    else{$('#messege').append('<p class="alert alert-danger">Password does not match. </p>');  }
});

$('#login').on('click', function () {    
    const user = $('#log_name').val();
    const password = $('#log_password').val();
    console.log(user + password);

    $.post(`${API_URL}/authenticate`, { user, password }).then((response) =>{
        console.log('2');
        if (response.success) {
            console.log("hehehehe");
            localStorage.setItem('user', response.name);
            localStorage.setItem('password', password);
            localStorage.setItem('email', response.email);
            window.open('./Whole web pages/robots connection/index.html','_parent');
        } 
        else {
            $('#message').append(`<p class="alert alert-danger">${response}</p>`);
            console.log($,{response});
        }
    });
});


function up(){
    $.post(`${API_URL}/top`).then((response) =>{
        console.log(response);      
    });
}

function down(){
  $.post(`${API_URL}/down`).then((response) =>{
    console.log(response);      
});
}
function left(){
  $.post(`${API_URL}/left`).then((response) =>{
    console.log(response);      
});
}
function right(){
  $.post(`${API_URL}/right`).then((response) =>{
    console.log(response);      
});
}