function Label(x, y, text, size="16px", font="Emulator", color="limegreen") {
  Entity.call(this, x, y);
  this.text = text;
  this.color = color;
  this.font = font;
  this.size = size;
  
  this.draw = function(game) {
    game.ctx.fillStyle = this.color;
    game.ctx.font = this.size + " " + this.font;
    game.ctx.fillText(this.text, this.x, this.y);
  };

}
Label.prototype = Object.create(Entity.prototype);
Label.prototype.constructor = Label;

function Brick(x, y) {
  Entity.call(this, x, y, 81, 20, "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")");

}
Brick.prototype = Object.create(Entity.prototype);
Brick.prototype.constructor = Brick;

function RandomBall(x, y) {
  Circ.call(this, x, y, 10+Math.floor(Math.random()*40), "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")");
  this.gravity = .25;
  this.vy = 0;

  this.update = function(game) {
    this.vy -= gravity;
    this.y -= this.vy;
    if (this.isTouching(bottom)) {
      this.vy *= -.75;
      this.y -= 1;
    }
  };
}
