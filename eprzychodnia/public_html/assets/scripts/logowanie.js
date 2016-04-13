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
        $(".home_page_jumbotron").css({opacity:1-scrolling/500});
        
    });
}


