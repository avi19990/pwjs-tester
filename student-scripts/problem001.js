function triangleArea(a, b, c)
{
    if (a <= 0 || b <= 0 || c <= 0) return -1;
    if (a + b <= c || a + c <= b || b + c <= a) return -1;

    var p = (a + b + c) / 2;
    return parseInt(Math.round(Math.sqrt((p - a) * (p - b) * (p - c) * p) * 100)) / 100;
}