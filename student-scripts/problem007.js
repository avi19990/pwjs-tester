function findMax(a)
{
    var max = a;
    for (var i = 0; i < arguments.length; ++i)
    {
        if (max < arguments[i])
            max = arguments[i];
    }
    return max;
}