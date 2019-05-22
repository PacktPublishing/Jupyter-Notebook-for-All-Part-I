
using RDatasets, DataFrames, Gadfly

set_default_plot_size(5inch, 5inch/golden);

plot(dataset("datasets","iris"), x="SepalWidth", y="SepalLength", color="Species")
