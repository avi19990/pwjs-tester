function deepCopy(a)
{
    var array = [];

    for (var i = 0; i < a.length; ++i)
    {
        if (typeof (a[i]) == "object") array[i] = deepCopy(a[i]);
        else array[i] = a[i];
    }

    return array;
}