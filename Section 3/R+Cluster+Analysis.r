
wheat <- read.csv("http://archive.ics.uci.edu/ml/machine-learning-databases/00236/seeds_dataset.txt", sep="\t")

colnames(wheat) <- c("area","perimeter","compactness","length","width","asymmetry","groove","undefined")

wheat <- wheat[complete.cases(wheat),]

fit <- kmeans(wheat, 5)

fit
