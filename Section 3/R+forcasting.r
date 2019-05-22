
library(forecast)

fraser <- scan("fraser.txt")

plot(fraser)

fraser.ts <- ts(fraser, frequency=12, start=c(1913,3))

fraser.stl = stl(fraser.ts, s.window="periodic")

monthplot(fraser.stl)

seasonplot(fraser.ts)


