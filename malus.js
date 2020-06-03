function malus(){

    this.x = 0;
    this.y = 0;

    this.draw = function(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.spawnRandomly = function(){
        this.x = Math.floor(Math.random() * columns) * scale;
        this.y = Math.floor(Math.random() * rows) * scale;
    }

}