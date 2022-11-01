function snowify() {
    var snowflake_center  = "<center id=\"snowtube-snowflake-container\" style=\"margin: 1cm;\"><iframe scrolling=\"no\" src=\"https://snowflake.torproject.org/embed.html\" style=\"border-radius: 5mm;min-width: 320px;height: 285px;box-shadow: 0 0rem 2rem .125rem rgb(20, 0,20, 10)\" frameborder=\"0\"></iframe></center>"
    var snowflake         = "<div id=\"snowtube-snowflake-container\" style=\"margin: 1cm;padding:5mm\"><iframe scrolling=\"no\" src=\"https://snowflake.torproject.org/embed.html\" style=\"border-radius: 5mm;min-width: 320px;height: 285px;box-shadow: 0 0rem 2rem .125rem rgb(20, 0,20, 10)\" frameborder=\"0\"></iframe></div>"
    var snowflake_sidebar = "<div id=\"snowtube-snowflake-container\" style=\"margin: 1cm;float;right;\"><iframe scrolling=\"no\" src=\"https://snowflake.torproject.org/embed.html\" style=\"border-radius: 5mm;min-width: 320px;height: 285px;box-shadow: 0 0rem 2rem .125rem rgb(20, 0,20, 10)\" frameborder=\"0\"></iframe></div>"
    if(window.location.host == "www.youtube.com" && window.location.pathname =="/watch") {
        document.getElementById('chips').parentElement.parentElement.outerHTML = snowflake
    }
    else if(window.location.host.split('.')[1] == "wikipedia" && window.location.pathname.split('/')[1] == "wiki" ) {
        document.getElementById('catlinks').outerHTML += snowflake_center
    }
    else if(window.location.host.split('.')[1] == "nytimes") {
        document.getElementById('app').innerHTML += snowflake
    }
    else if (window.location.host.split('.')[1] == "spiegel" && window.location.host.split('.')[2] == "de") { 
        document.getElementsByClassName('lg:sticky')[0].outerHTML = iframe_std
    }
    else if (window.location.host.split('.')[1] == "zeit" && window.location.host.split('.')[2] == "de") { 
        document.getElementsByClassName('page__content')[0].innerHTML += snowflake_center
    }
    else if (window.location.host.split('.')[1] == "amazon") { 
        document.getElementById('a-page').innerHTML += snowflake_center
    }
}

setTimeout(function() {if(document.getElementById('snowtube-snowflake-container') == null) {snowify()}}, 500);
setTimeout(function() {if(document.getElementById('snowtube-snowflake-container') == null) {snowify()}}, 5000);
setTimeout(function() {if(document.getElementById('snowtube-snowflake-container') == null) {snowify()}}, 20000);
setTimeout(function() {if(document.getElementById('snowtube-snowflake-container') == null) {snowify()}}, 60000);
