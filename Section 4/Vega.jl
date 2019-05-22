
using Vega
using Compat
using Patchwork

Patchwork.load_js_runtime()

stock = ["chairs", "tables", "desks", "rugs", "lamps"];

quantity = [15, 10, 10, 5, 20];

piechart(x = stock, y = quantity)

using PyPlot
precipitation = [0,0,0,0,0,0,0,0,0,0,0.12,0.01,0,0,0,0.37,0,0,0,0,0.01,0,0,0,0.01,0.01,0,0.17,0.01,0.11,0.31]
date = collect(1:31)
fig = figure(1, figsize=(4, 4))
plot(date, precipitation, ".")
title("Boston Precipitation")
xlabel("May 2013")
ylabel("Precipitation")

addprocs(1)
srand(111)
r = remotecall(rand, 2, 3, 4)
s = @spawnat 2 1 .+ fetch(r)
fetch(s)


