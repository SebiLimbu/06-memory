fs = require('fs')

countryCounter = (countryCode) ->


  myHash = []
  finalHash = []

  data = fs.readFileSync(__dirname + '/../data/geo.txt', 'utf8')
  data = data.toString().split('\n')

  counter = 0
  len = data.length
  i = 0
  while i < len
    line = data[i]
    if !line
            i++
      continue
    line = line.split('\t')

    #creating an array with country code values only
    myHash[i] = line[3]
    i++

  #sorting the string array in ascending order
  finalHash = myHash.sort()

  res = divAndConquer(finalHash, countryCode)
  res

#function to divide the array into two parts and lookup for string in only one partition
divAndConquer = (arr, searchElement) ->

  low = 0
  counter = 0
  high = arr.length - 1
  #diving the array into half
  mid = parseInt((low + high) / 2)
  refElement = arr[mid]

  if searchElement <= refElement
    i = mid
    while i >= 1
      if arr[i] == searchElement
        counter++
      i--

  else if searchElement > refElement
    i = mid + 1
    while i <= high
      if arr[i] == searchElement
        counter++
      i++
  counter



exports.countryCounter = (countryCode) ->
  return null unless countryCode
  return countryCounter countryCode
