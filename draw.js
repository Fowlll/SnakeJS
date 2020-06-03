const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

play = true;

let score = 0;


(function setup(){

    snake = new snake();

    fruit = new fruit();
    fruit.spawnRandomly();

    malus = new malus();
    malus.spawnRandomly();

    snake.draw();

    let loop = window.setInterval(() =>{

        if(!play){
            document.getElementById("loose").innerHTML = "<h2>Game Over</h2><p>Vous avez atteint " + score + " points !</p> <br /> <a href=\"index.html\">Rejouer</a>";
            clearInterval(loop);
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        malus.draw();
        fruit.draw();
        snake.update();
        
        //checkCol
        snake.checkCollisions();


        //console.log("x: " + snake.x + " - y: " + snake.y);
    }, 100);



}());

window.addEventListener("keydown", event =>{
    const direction = event.key.replace("Arrow", "");
    console.log(direction);
    snake.changeDirection(direction);
});
