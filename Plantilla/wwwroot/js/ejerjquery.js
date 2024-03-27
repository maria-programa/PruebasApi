$(document).ready(function () {
    $("body").css("background-color", "#ccd5ae");
    $("#fantasma").on({
        mouseenter: function () {
            $("footer").css("background-color", "#bde0fe");
        },
        mouseleave: function () {
            $("footer").css("background-color", "#d4a373");
        },
        click: function () {
            $("header").css("background-color", "#f5cac3");
        }
    });
    $("#botonOculta").click(function () {
        $("#fantasma").hide();
    });
    $("#botonMuestra").click(function () {
        $("#fantasma").show();
    });

});

