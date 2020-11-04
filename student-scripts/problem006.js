function divisible(a)
{
    var isDivisable = true;
    for (var i = 1; i < arguments.length; ++i)
    {
        if (a % arguments[i] != 0)
            isDivisable = false;
    }
    return isDivisable;
}