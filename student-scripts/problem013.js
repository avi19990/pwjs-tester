function parametricSort(a, b)
{
    if (b != "asc" && b != "desc") return false;

    if (b == "asc")
       a.sort((a, b) => a - b);
    else
        a.sort((a, b) => b - a);

    return a;
}