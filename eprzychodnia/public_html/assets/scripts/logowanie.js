/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//angular.element(document).ready(function () {
//
//      $(".home_page_well").css({opacity:0.8});
//    $("#system_epop_h6").hide();
//    $("#kto_moze_korzystac_h6").hide();
//    $("#co_zrobic_uzytkownik_h6").hide();
//    
//    $(".system_epop").hover(function ()
//    {
//        showElement($("#system_epop_h6"),100);
//        $(".system_epop").css({opacity:1});
//    }, function(){
//        hideElement($("#system_epop_h6"),100);
//        $(".system_epop").css({opacity:0.8});
//    });
//    $(".co_zrobic_uzytkownik").hover(function ()
//    {
//        showElement($("#co_zrobic_uzytkownik_h6"),100);
//        $(".co_zrobic_uzytkownik").css({opacity:1});
//    }, function(){
//        hideElement($("#co_zrobic_uzytkownik_h6"),100);
//        $(".co_zrobic_uzytkownik").css({opacity:0.8});
//    });
//    $(".kto_moze_korzystac").hover(function ()
//    {
//        showElement($("#kto_moze_korzystac_h6"),100);
//        $(".kto_moze_korzystac").css({opacity:1});
//    }, function(){
//        hideElement($("#kto_moze_korzystac_h6"),100);
//        $(".kto_moze_korzystac").css({opacity:0.8});
//    });
//    function showElement(element,time)
//    {
//        element.show(time);
//    }
//    function hideElement(element,time)
//    {
//        element.hide(time);
//    }
//
//});
function init_rejestracja_pacjenta()
{
    $("#registration_password").on("keyup",function ()
    {
        var number_of_chars = $("#registration_password").val().length;
        number_of_chars=number_of_chars*10;
        $("#registration_progressbar").css({width:number_of_chars+"%"});
        
        if(number_of_chars>=30)
        {
            $("#registration_progressbar").removeClass("progress-bar-danger");
            $("#registration_progressbar").addClass("progress-bar-warning");
        }
        else
        {
            $("#registration_progressbar").removeClass("progress-bar-warning");
            $("#registration_progressbar").addClass("progress-bar-danger");
        }
        if(number_of_chars>=70)
        {
            $("#registration_progressbar").removeClass("progress-bar-warning");
            $("#registration_progressbar").addClass("progress-bar-success");
        }
    });
}
function show_doctors_calendar()
{
    $("#kalendarz_lekarza").html("");
    $("#kalendarz_lekarza").monthly();
}
function show_alert()
{
    alert("99");
}
function init_home_page()
{    
    $(".home_page_well").css({opacity:0.8});
    $("#system_epop_h6").hide();
    $("#kto_moze_korzystac_h6").hide();
    $("#co_zrobic_uzytkownik_h6").hide();
    
    $(".system_epop").hover(function ()
    {
        showElement($("#system_epop_h6"),100);
        $(".system_epop").css({opacity:1});
    }, function(){
        hideElement($("#system_epop_h6"),100);
        $(".system_epop").css({opacity:0.8});
    });
    $(".co_zrobic_uzytkownik").hover(function ()
    {
        showElement($("#co_zrobic_uzytkownik_h6"),100);
        $(".co_zrobic_uzytkownik").css({opacity:1});
    }, function(){
        hideElement($("#co_zrobic_uzytkownik_h6"),100);
        $(".co_zrobic_uzytkownik").css({opacity:0.8});
    });
    $(".kto_moze_korzystac").hover(function ()
    {
        showElement($("#kto_moze_korzystac_h6"),100);
        $(".kto_moze_korzystac").css({opacity:1});
    }, function(){
        hideElement($("#kto_moze_korzystac_h6"),100);
        $(".kto_moze_korzystac").css({opacity:0.8});
    });
    function showElement(element,time)
    {
        element.show(time);
    }
    function hideElement(element,time)
    {
        element.hide(time);
    }
}



