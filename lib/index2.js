fs = require('fs');

countryCounter = function(countryCode){
var startTime=process.memoryUsage().heapUsed;
var data,i,counter,line,len,myHash=[],finalHash=[];

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
    /**creating an array with country code values only**/
      myHash[i]=line[3];
  }
  /**sorting the string array in ascending order**/
  finalHash=myHash.sort();
  var res=divAndConquer(finalHash,countryCode);
  return res;
}

/**function to divide the array into two parts and lookup for string in only one **/
divAndConquer=function(arr,searchElement){
var low=0,high,i,counter=0,pivot,refElement,count=0,pointer,
high=arr.length-1,mid;


  mid=parseInt((low+high)/2);
  //mid=arr.indexOf(searchElement);
  refElement=arr[mid];
  if(searchElement<=refElement){
    for(i=mid;i>=1;i--){
    if(arr[i]==searchElement)
        counter++;
    }
  }
//}
  else if(searchElement>refElement){
    for(i=mid+1;i<=high;i++){
    if(arr[i]==searchElement)
        counter++;
    }
  }
return counter;
 }



console.log(countryCounter("RU"));
