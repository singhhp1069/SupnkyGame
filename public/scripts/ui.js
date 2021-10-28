let wHeight = $(window).height();
let wWidth = $(window).width();
let player = {} //This is all things "this" player
let orbs = [];
let hurdles = []
let players = [];
let chainId = "spunky";
let canvas = document.querySelector('#the-canvas');
let context = canvas.getContext('2d');
canvas.width = wWidth;
canvas.height = wHeight;
let isGameOn = 0;

$(window).load(async ()=>{
    if (!window.keplr) {
        alert("Please install keplr extension");
        window.location.href = "https://wallet.keplr.app/";
    } else {
        $('#loginModal').modal('show');
    }
})


$('.name-form').submit((event)=>{
    event.preventDefault()
    player.name = document.querySelector('#name-input').value;
    $('#loginModal').modal('hide');
    isGameOn = 1;
    $('.hiddenOnStart').removeAttr('hidden');
    init();
})
