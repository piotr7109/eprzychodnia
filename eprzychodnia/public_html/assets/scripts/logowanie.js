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
function show_doctors_calendar(uzytkownik)
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
    console.log(uzytkownik.godziny);
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var tytul=[];
    var zmiana=[];
    var godzina_s=[];
    var minuta_s=[];
    var godzina_k=[];
    var minuta_k=[];
    
    zmiana.push(uzytkownik.godziny.pn);
    zmiana.push(uzytkownik.godziny.wt);
    zmiana.push(uzytkownik.godziny.sr);
    zmiana.push(uzytkownik.godziny.czw);
    zmiana.push(uzytkownik.godziny.pt);
    zmiana.push(uzytkownik.godziny.sb);
    zmiana.push(uzytkownik.godziny.ndz);
    
    for(var i =0;i<zmiana.length;i++)
    {
        if(zmiana[i]==1)
        {
            tytul.push("Praca");
            godzina_s.push(0);
            minuta_s.push(0);
            godzina_k.push(8);
            minuta_k.push(0);
        }
        else if(zmiana[i]==2)
        {
            tytul.push("Praca");
            godzina_s.push(8);
            minuta_s.push(0);
            godzina_k.push(16);
            minuta_k.push(0);
        }
        else if(zmiana[i]==3)
        {
            tytul.push("Praca");
            godzina_s.push(16);
            minuta_s.push(0);
            godzina_k.push(24);
            minuta_k.push(0);
        }
        else if(zmiana[i]==99)
        {
            tytul.push("Wolne");
            godzina_s.push(0);
            minuta_s.push(0);
            godzina_k.push(23);
            minuta_k.push(0);
        }
    }
    
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
                            title: tytul[0],
                            start: new Date(y, m, 20,godzina_s[0],minuta_s[0]),
                            end: new Date(y, m, 20,godzina_k[0],minuta_k[0])
                    },
                    {
                            title: tytul[1],
                            start: new Date(y, m, 21,godzina_s[1],minuta_s[1]),
                            end: new Date(y, m, 21,godzina_k[1],minuta_k[1])
                    },{
                            title: tytul[2],
                            start: new Date(y, m, 22,godzina_s[2],minuta_s[2]),
                            end: new Date(y, m, 22,godzina_k[2],minuta_k[2])
                    },{
                            title: tytul[3],
                            start: new Date(y, m, 23,godzina_s[3],minuta_s[3]),
                            end: new Date(y, m, 23,godzina_k[3],minuta_k[3])
                    },{
                            title: tytul[4],
                            start: new Date(y, m, 24,godzina_s[4],minuta_s[4]),
                            end: new Date(y, m, 24,godzina_k[4],minuta_k[4])
                    },{
                            title: tytul[5],
                            start: new Date(y, m, 25,godzina_s[5],minuta_s[5]),
                            end: new Date(y, m, 25,godzina_k[5],minuta_k[5])
                    },{
                            title: tytul[6],
                            start: new Date(y, m, 26,godzina_s[6],minuta_s[6]),
                            end: new Date(y, m, 26,godzina_k[6],minuta_k[6])
                    },
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




