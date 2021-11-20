import * as jQuery from "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";

$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});