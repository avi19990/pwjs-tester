function strangeSum(a, b)
{
    if (typeof (a) != "number" || typeof (b) != "number" || !Number.isInteger(a) || !Number.isInteger(b)) return null;
    if (a == b) return (a + b) * 3;
    return a + b;
}