$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

$('#backToSignPage').click(function () {
    window.location.href = "../index.html";
});


$('#loginToInsert').click(function () {
    window.location.href = "./sites/1.html";
});
