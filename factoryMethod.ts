// Factory Method.
class Point {
  private x: number;
  private y: number;

  private constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public static newCartesianPoint(x: number, y: number): Point {
    return new Point(x, y);
  }

  public static newPolarPoint(rho: number, theta: number): Point {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

//Generating a rectangular point.
const point = Point.newCartesianPoint(4, 4);
console.log(point);
const polarPoint = Point.newPolarPoint(4, 45);
console.log(polarPoint);
