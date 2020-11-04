function getTotalNumberOfNewYaersEveSundays(a, b)
{
    var counter = 0;
    for (var i = a; i <= b; ++i)
    {
        var date = new Date(i, 0, 1);
        if (date.getDay() == 0) ++counter;
    }
    return counter;
}