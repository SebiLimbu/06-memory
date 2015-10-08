fs = require 'fs'

countryCounter = (countryCode) ->
  myHash = []
  finalHash = {}
  data = fs.readFileSync "#{__dirname}/../data/geo.txt", 'utf8'
  data = data.toString().split('\n')
  counter = 0
  i=0
  for line in data when line
 line = line.split '\t'
    myHash[i] = line[3]
    i++
  finalHash = myHash.sort()
  divAndConquer finalHash, countryCode



divAndConquer = (arr, countryCode) ->

  counter = 0
  high = arr.length - 1
  mid = parseInt((low + high) / 2)
  comp = arr[mid]


  if countryCode <= comp
    i = mid
    while i >= 1
      if arr[i] == countryCode then counter++
      i--


  else if countryCode > comp
    i = mid + 1
    while i <= high
      if arr[i] == countryCode then counter++
      i++

  return counter


exports.countryCounter = (countryCode) ->
  return null unless countryCode
  return countryCounter countryCode
