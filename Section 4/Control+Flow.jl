
function larger(x, y)
    if (x>y)
        return x
    end
    return y
end
println(larger(7,8))

ismatch(r"^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$", "(781)244-1212")

ismatch(r"^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$", "-781-244-1212")

using FactCheck

f(x) = x^3
facts("cubes") do
    @fact f(2) --> 8
    @fact f(2) --> 7
end

using Base.Test
F(x) = x^3
@test F(2) == 8
@test F(2) == 7


