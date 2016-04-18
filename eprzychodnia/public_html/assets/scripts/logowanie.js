/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
if($(document).ready())
{
    $(".home_page_well").css({opacity:0.5});
    $(window).scroll(function (event){
        
        var scrolling = $(window).scrollTop();
        var opacity = $(".home_page_jumbotron").css("opacity");
        
        //var opacity = $(".jumbotron").opacity();
        //alert(opacity);
        
        $(".home_page_well").css({opacity:0.5+scrolling/500});
        //$(".home_page_jumbotron").css({opacity:1-scrolling/3000});
        
    });
    $("#system_epop_h6").hide();
    $("#kto_moze_korzystac_h6").hide();
    $("#co_zrobic_uzytkownik_h6").hide();
    $(".system_epop").hover(function ()
    {
        showElement($("#system_epop_h6"),100);
    }, function(){
        hideElement($("#system_epop_h6"),100);
    });
    $(".co_zrobic_uzytkownik").hover(function ()
    {
        showElement($("#co_zrobic_uzytkownik_h6"),100);
    }, function(){
        hideElement($("#co_zrobic_uzytkownik_h6"),100);
    });
    $(".kto_moze_korzystac").hover(function ()
    {
        showElement($("#kto_moze_korzystac_h6"),100);
    }, function(){
        hideElement($("#kto_moze_korzystac_h6"),100);
    });
}
function showElement(element,time)
{
    element.show(time);
}
function hideElement(element,time)
{
    element.hide(time);
}

