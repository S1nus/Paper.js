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
RandomBall.prototype = Object.create(Circ.prototype);
RandomBall.prototype.constructor = RandomBall;

function TexRect(src, x, y) {
  this.img = new Image();
  this.img.src = src;
  this.width = this.img.width;
  this.height = this.img.height;
  Entity.call(this, x, y, this.width, this.height);

  this.draw = function(game) {
    game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  this.update = function(game) {
    this.width = this.img.width;
    this.height = this.img.height;
  };
}
TexRect.prototype = Object.create(Entity.prototype);
TexRect.prototype.constructor = TexRect;
