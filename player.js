class Player {
  constructor() {
    this.size = 50;
    this.x = 50;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 0.5;
  }
  show() {
    image(playerimg, this.x, this.y, this.size, this.size);
  }
  jump() {
    if (this.y === height - this.size) this.velocityY = -10;
  }
  move() {
    this.y += this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }
  collided(current0bs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size,
      this.size,

      current0bs.x,
      current0bs.y,
      current0bs.size,
      current0bs.size
    );
    return isColliding;
  }
}
