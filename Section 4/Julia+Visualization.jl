
using Gadfly
srand(111)
plot(x=rand(7), y=rand(7))

using Gadfly
srand(111)
plot(x=rand(113), Geom.histogram(bincount=10))

using Winston

srand(111)

pl = Winston.plot(cumsum(rand(100) .-0.5), "g", cumsum(rand(100) .-0.5), "b")

display(pl)


