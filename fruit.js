function fruit(){

    this.x = 0;
    this.y = 0;

    this.spawnRandomly = function(){
        this.x = Math.floor(Math.random() * columns) * scale;
        this.y = Math.floor(Math.random() * rows) * scale;
        console.log("x: " + this.x + " - y: " + this.y);
    }

    this.draw = function(){
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, scale, scale);
    }

}