class MathUtility {

  static readonly PI = 3.1415;

  static calculateCylinderArea(radius: number, height: number) :number{
    return MathUtility.PI * radius * radius * height;
  }
}

console.log('Area of a cylinder : ' + MathUtility.calculateCylinderArea(3, 6));