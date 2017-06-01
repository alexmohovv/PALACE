var $ = require('jQuery');

$(function(){
    $("button").click(function(){

        if ($(this).is("button.file")) {
            $("div.menu").hide();
            $("button").removeClass("active");
            $(this).addClass("active");
            $("div.menuFiles").show();
        }

        if ($(this).is("button.chains")) {
            $("div.menu").hide();
            $("button").removeClass("active");
            $(this).addClass("active");
            $("div.menuChains").show();
        }
    })
})

$(function(){
    $("progress").val("15");
})

$(function(){
    $("button.close").click(function(){
        window.close();
    })
})
