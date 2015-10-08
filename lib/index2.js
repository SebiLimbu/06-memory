

 fs = require('fs');

load = function(countryCode){
  var startTime=process.memoryUsage().heapUsed;
var data,i,counter,line,len,myHash=[],finalHash={};
data = fs.readFileSync(__dirname + "/../data/geo.txt", 'utf8');
  data = data.toString().split('\n');
  counter = 0;
  len = data.length;
  for (i = 0; i < len; i++) {
    line = data[i];
    if (!(line)) {
      continue;
    }
    line = line.split('\t');

   // if (line[3] === countryCode) {
     // counter++;
      // myHash[i]=line[3];
   // }
        myHash[i]=line[3];

  }

 finalHash=myHash.sort();
divAndConquer(finalHash,countryCode);
var endTime=process.memoryUsage().heapUsed;
  //return finalHash;
  var heapCount=endTime/startTime;
return heapCount;
}

divAndConquer=function(arr,countryCode){
var low=0,high,comp,i,counter=0;
high=arr.length-1;


  mid=parseInt((low+high)/2);
  comp=arr[mid];
  if(countryCode<=comp){
  for(i=mid;i>=1;i--){
    if(arr[i]==countryCode)
      counter++;
  }
}

else if(countryCode>comp){
   for(i=mid+1;i<=high;i++){
    if(arr[i]==countryCode)
      counter++;
  }
}
return counter;
 }


console.log(load("RU"));
