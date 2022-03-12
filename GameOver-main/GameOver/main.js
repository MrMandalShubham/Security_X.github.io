function GameOver(){
    setTimeout(() => {        
        document.getElementById('gameoverEID').play();
    }, 500);
    setTimeout(() => {
        document.getElementById('gameoverSID').play();
    }, 7500);
}