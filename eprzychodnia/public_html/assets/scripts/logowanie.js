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
//$.material.init();
function podmiana_przycisków_w_home()
{
    $("#zmień_dane_użytkownika_button").click(function (){
        $("#zmień_dane_użytkownika_button").hide();
        $("#wyslij_dane_do_bazy_button").show();
        var elements = document.getElementsByClassName('home_data_input');
        for (var i = elements.length -1 ; i>=0;i--)
        {
            elements[i].disabled=false;
        }
    });
    
}
function ukrywanie_przyciskow_w_home()
{
    $("#zmień_dane_użytkownika_button").show();
    $("#wyslij_dane_do_bazy_button").hide();
    var elements = document.getElementsByClassName('home_data_input');
        for (var i = elements.length -1 ; i>=0;i--)
        {
            elements[i].disabled=true;
        }
}
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
function show_doctors_calendar(var uzytkownik)
{
//    $("#kalendarz_lekarza").html("");
//    $("#kalendarz_lekarza").monthly({mode: 'event',
//    // The element that will have its value set to the date you picked
//    target: '#mytarget',
//    // Set to true if you want monthly to appear on click
//    maxWidth:'587px',
//    xmlUrl: 'assets/scripts/monthly.xml',
//    // Add a style to days in the past
//    stylePast: true,
//    // Disable clicking days in the past
//    disablePast: true});
    alert(uzytkownik);
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    /*
            Initialize fullCalendar and store into variable.
            Why in variable?
            Because doing so we can use it inside other function.
            In order to modify its option later.
    */

    var calendar = $('#kalendarz_lekarza').fullCalendar(
    {
            /*
                    header option will define our calendar header.
                    left define what will be at left position in calendar
                    center define what will be at center position in calendar
                    right define what will be at right position in calendar
            */
            header:
            {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
            },
            /*
                    defaultView option used to define which view to show by default,
                    for example we have used agendaWeek.
            */
            defaultView: 'month',
            /*
                    selectable:true will enable user to select datetime slot
                    selectHelper will add helpers for selectable.
            */
            selectable: true,
            selectHelper: true,
            /*
                    when user select timeslot this option code will execute.
                    It has three arguments. Start,end and allDay.
                    Start means starting time of event.
                    End means ending time of event.
                    allDay means if events is for entire day or not.
            */
            select: function(start, end, allDay)
            {
                    /*
                            after selection user will be promted for enter title for event.
                    */
                    var title = prompt('Event Title:');
                    /*
                            if title is enterd calendar will add title and event into fullCalendar.
                    */
                    if (title)
                    {
                            calendar.fullCalendar('renderEvent',
                                    {
                                            title: title,
                                            start: start,
                                            end: end,
                                            allDay: allDay
                                    },
                                    true // make the event "stick"
                            );
                    }
                    calendar.fullCalendar('unselect');
            },
            /*
                    editable: true allow user to edit events.
            */
            editable: true,
            /*
                    events is the main option for calendar.
                    for demo we have added predefined events in json object.
            */
            events: [
                    {
                            title: 'All Day Event',
                            start: new Date(y, m, 1)
                    },
                    {
                            title: 'Long Event',
                            start: new Date(y, m, d-5),
                            end: new Date(y, m, d-2)
                    },
                    {
                            id: 999,
                            title: 'Repeating Event',
                            start: new Date(y, m, d-3, 16, 0),
                            allDay: false
                    },
                    {
                            id: 999,
                            title: 'Repeating Event',
                            start: new Date(y, m, d+4, 16, 0),
                            allDay: false
                    },
                    {
                            title: 'Meeting',
                            start: new Date(y, m, d, 10, 30),
                            allDay: false
                    },
                    {
                            title: 'Lunch',
                            start: new Date(y, m, d, 12, 0),
                            end: new Date(y, m, d, 14, 0),
                            allDay: false
                    },
                    {
                            title: 'Birthday Party',
                            start: new Date(y, m, d+1, 19, 0),
                            end: new Date(y, m, d+1, 22, 30),
                            allDay: false
                    },
                    {
                            title: 'Click for Google',
                            start: new Date(y, m, 28),
                            end: new Date(y, m, 29),
                            url: 'http://google.com/'
                    }
            ]
    });
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




