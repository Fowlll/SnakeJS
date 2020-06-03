function snake(){

    this.x = 0;
    this.y = 0;

    this.xVel = scale;
    this.yVel = 0;

    this.tail = [new tailBlock()];

    this.draw = function(){
        for(let i = 0; i <= this.tail.length-1; i++){
            this.tail[i].draw();
        }

    }

    this.update = function(){
        // Update tail

        for(let i = this.tail.length-1; i > 0; i--){
            this.tail[i].x = this.tail[i-1].x;
            this.tail[i].y = this.tail[i-1].y;
        }

        this.tail[0].x += this.xVel;
        this.tail[0].y += this.yVel;

        //check x
        if(this.tail[0].x > canvas.width-(scale)){
            this.tail[0].x = 0;
        }else if(this.tail[0].x < 0){
            this.tail[0].x = canvas.width-(scale);
        }

        //check y
        if(this.tail[0].y > canvas.height-(scale)){
            this.tail[0].y = 0;
        }else if(this.tail[0].y < 0){
            this.tail[0].y = canvas.height-scale;
        }


        


        this.draw();

    }

    this.changeDirection = function(direction){
        switch(direction){
            case "Right":
                this.xVel = scale;
                this.yVel = 0;
                break;
            case "Left":
                this.xVel = -scale;
                this.yVel = 0;
                break;
            case "Up":
                this.yVel = -scale;
                this.xVel = 0;
                break;
            case "Down":
                this.yVel = scale;
                this.xVel = 0;
        }
    }


    this.checkCollisions = function(){
        if(this.tail[0].x == fruit.x && this.tail[0].y == fruit.y){
            this.tail.push(new tailBlock());
            fruit.spawnRandomly();
            score++;
            document.getElementById("score").innerHTML = score;
        }

        //check malus col
        if(this.tail[0].x == malus.x && this.tail[0].y == malus.y){
            this.tail.pop();
            
            if(score == 0){
                play = false;
            }else{
                score--;
                malus.spawnRandomly();
            }
            document.getElementById("score").innerHTML = score;
        }

        //check self collisions
        for(let i = 1; i < this.tail.length; i++){
            if(this.tail[0].x == this.tail[i].x && this.tail[0].y == this.tail[i].y){
                play = false;
            }
        }


        return false;
    }

}