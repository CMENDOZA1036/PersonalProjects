numeros = 100
divisible = false

for (i = 1; i <= 100; i++)
{
    divisible = false
    if (esDivisible (i,3))
    {
        document.write('Fizz')
        divisible = true
    }
    
    if (esDivisible (i,5))
    {
        document.write('Buzz')
        divisible = true
    }

    if (!divisible)
    {
        document.write (i)
    }
    document.write("<br />")
}

function esDivisible (num, divisor)
{
    if(num % divisor == 0)
    {
        return true
    }
    else
    {
        return false
    }
}