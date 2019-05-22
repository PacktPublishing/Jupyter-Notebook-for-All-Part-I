
library("lattice")

mydata <- read.table("http://archive.ics.uci.edu/ml/machine-learning-databases/auto-mpg/auto-mpg.data")

colnames(mydata) <- c("mpg","cylinders","displacement","horsepower","weight","acceleration","model.year","origin","car.name")

cloud(mpg~cylinders*weight, data=mydata)
