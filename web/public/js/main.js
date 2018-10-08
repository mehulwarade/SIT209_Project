const API_URL = 'http://localhost:5000/api';
//const API_URL = 'https://127.0.0.1:8080/api';
//#region PredefFunc
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate after type ]*/
    $('.validate-input .input100').each(function(){
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
        $(this).focus(function(){
           hideValidate(this);
           $(this).parent().removeClass('true-validate');
        });
    });

     function validate (input) {
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
       $.post(`${API_URL}/register`, { user, password }).then((response) =>{
            if (response.success) {                 
                localStorage.setItem('user', user);
                localStorage.setItem('password', password);
                location.href = '/';
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
   
    $.post(`${API_URL}/authenticate`, { user, password}).then((response) =>{
        console.log("qwertyuiop" +response);
    });
   
    $.post(`${API_URL}/authenticate`, { user, password }).then((response) =>{
        console.log('2');
        if (response.success) {
            console.log("hehehehe");
            localStorage.setItem('user', user);
            localStorage.setItem('password', password);
            location.href = '/';
        } 
        else {
            $('#message').append(`<p class="alert alert-danger">${response}</p>`);
            console.log($,{response});
        }
    });
});

