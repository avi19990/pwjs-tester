function objectsDiff(a, b)
{
    var props = [];

    for (var property in a)
        if (!(property in b))
            props.push(property);

    for (var property in b)
        if (!(property in a) && !(property in props))
            props.push(property);

    return props;
}