var $ = require('jQuery');

$(function(){
    $("button").click(function(){
        $("div:visible:not(.headPanel)").hide();

        if ($(this).is("button.file")) {
            $("button").removeClass("active");
            $(this).addClass("active");
            $("div.menuFiles").show();
        }

        if ($(this).is("button.chains")) {
            $("button").removeClass("active");
            $(this).addClass("active");
            $("div.menuChains").show();
        }
    })
})


