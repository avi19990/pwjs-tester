function compose(...args)
{
    return function (a)
    {
        for (var i = args.length - 1; i >= 0; --i)
            a = args[i](a);

            return a;
    }
}