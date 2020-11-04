function Square(a)
{
    var obj =
    {
        size: a,
        getArea: function ()
        {
            return this.size * this.size;
        },
        getPerimeter: function ()
        {
            return this.size * 4;
        }
    }

    return obj;
}