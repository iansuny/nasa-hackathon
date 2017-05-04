library("nnet")
library("pmml")
library("httr")
library("RCurl")


HiddenAmount <- GET(paste("127.0.0.1:8012/?s=",symbol,sep=""))
RawData <- GET(paste("127.0.0.1:8011/?s=",symbol,sep=""))
HABsNet <- nnet(Rate~. , data = RawData , size = as.numeric(HiddenAmount))
pmml(HABsNet)


root.url<-'https://gist.githubusercontent.com/fawda123'
raw.fun<-paste(
  root.url,
  '5086859/raw/cc1544804d5027d82b70e74b83b3941cd2184354/nnet_plot_fun.r',
  sep='/'
)
script<-getURL(raw.fun, ssl.verifypeer = FALSE)
eval(parse(text = script))
rm('script','raw.fun')
plot(HABsNet)

save(HABsNet, file = "HABsPMML.pmml")

