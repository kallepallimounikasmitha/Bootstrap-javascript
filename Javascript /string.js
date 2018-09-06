
var string = "One of the best books I've read is a business book that isn't explicitly about entrepreneurship."
alert(string.length)

var ind = string.indexOf("b")
alert(ind)

var index = string.indexOf("of") 
alert(index) 

var indexed  = string.indexOf("Mounika") // which is not there in the string
alert(indexed)

var slicing = string.slice(0,15)
alert(slicing)

// one with word
var word = string.indexOf("about")
var valid = string.slice(word,word+5)
alert(valid)

var hi = string.replace("that","this")
alert(hi)

alert(string.toUpperCase())
alert(string.toLowerCase())

var another  = "Introduction to entrepreneurship"
alert(string.concat(another))

var spiltes = string.split(" ")
alert(spiltes)
alert(Array.isArray(spiltes))

var number = 723827983701
var numberintostring = number.toString()
alert(typeof(numberintostring))

var stringer = "Mounika"
var stringtonumber = Number(stringer)
alert(typeof(stringtonumber))






