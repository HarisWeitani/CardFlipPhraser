var game;
window.onload = function(){
    var gameConfig = {
        width : 480,
        height : 640,
        backgroundColor : 0xff0000,
        scene : playGame
    }
    game = new Phaser.Game(gameConfig);
    window.focus();
    resizeGame();
    window.addEventListener("resize", resizeGame);
}

function resizeGame() {    
    var canvas = document.querySelector("canvas");    
    var windowWidth = window.innerWidth;    
    var windowHeight = window.innerHeight;    
    var windowRatio = windowWidth / windowHeight;    
    var gameRatio = game.config.width / game.config.height;    
    if(windowRatio < gameRatio){        
        canvas.style.width = windowWidth + "px";        
        canvas.style.height = (windowWidth / gameRatio) + "px";    
    }    
    else{        
        canvas.style.width = (windowHeight * gameRatio) + "px";        
        canvas.style.height = windowHeight + "px";    
    } 
}

class playGame extends Phaser.Scene{
    constructor(){
        super("PlayGame");
    }
    create(){
        console.log("This IS Great");
    }
}