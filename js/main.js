let BlockInterval;

$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

$('#backToSignPage').click(function () {
    window.location.href = "../index.html";
});

$('#loginToInsert').click(function () {
    alert("123");
    // window.location.href = "./sites/1.html";
});

$("#ddlPlaySpeed").change(() => {
    // alert($("#ddlPlaySpeed").val());
})

$("#playBlock").click(() => {
    BlockInterval = setInterval(() => {
        audio.play();
    }, 1000 / $("#ddlPlaySpeed").val())
})

$("#stopBlock").click(() => {
    clearInterval(BlockInterval);
})


var audio = new Audio("../assets/audio/TempleBlock.mp3");

