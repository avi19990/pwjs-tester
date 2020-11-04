function stringRotate(a, b)
{
    if (typeof (b) != "number" || b < 0) return "";
    return a.substr(b) + a.substr(0, b);
}