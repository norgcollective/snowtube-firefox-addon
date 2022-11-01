setTimeout(function() {
    if(window.location.host == "www.youtube.com" && window.location.pathname =="/watch") {
        document.getElementById('chips').parentElement.parentElement.outerHTML = "<div id=\"snowtube-snowflake-container\" style=\"margin: 1cm\"><iframe scrolling=\"no\" src=\"https://snowflake.torproject.org/embed.html\" style=\"border-radius: 5mm;min-width: 320px;height: 285px;box-shadow: 0 0rem 2rem .125rem rgb(20, 0,20, 10)\" frameborder=\"0\"></iframe></div>"
    }
    else if(window.location.host.split('.')[1] == "wikipedia" && window.location.pathname.split('/')[1] == "wiki" ) {
        document.getElementById('catlinks').outerHTML += "<div id=\"snowtube-snowflake-container\" style=\"margin: 1cm;min-width: 320px;\"><iframe scrolling=\"yes\" src=\"https://snowflake.torproject.org/embed.html\" style=\"border-radius: 5mm;min-width: 320px;height: 285px;max-height: 285px;box-shadow: 0 0rem 2rem .125rem rgb(20, 0,20, 10)\" frameborder=\"0\"></iframe><p style=\"font-size:7.75pt;font-family: arial,sans,monospace,serif;\">This Snowflake has been added to Wikipedia by the Snowtube Addon</p></div>"
    }
    else if(window.location.host == "www.instagram.com" && window.location.pathname.split('/')[1] =="direct") {
        document.getElementsByClassName('_ab8w  _ab94 _ab97 _ab9h _ab9m _ab9p  _aba8 _abcm')[0].outerHTML = "<div id=\"snowtube-snowflake-container\" style=\"margin: .5cm\"><iframe scrolling=\"no\" src=\"https://snowflake.torproject.org/embed.html\" style=\"border-radius: 5mm;min-width: 320px;height: 285px;box-shadow: 0 0rem 2rem .125rem rgb(20, 0,20, 10)\" frameborder=\"0\"></iframe></div>"
    }
}, 7500);
