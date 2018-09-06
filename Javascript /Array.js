

var vegetables = ["Carrot","Beetroot","Tomato","Spanich","Ladysfinger"]
vegetables.push("ginger")
alert(vegetables)
vegetables.pop()
alert(vegetables)


vegetables.shift()
alert(vegetables)
vegetables.unshift("Lemon")
alert(vegetables)


vegetables[3]="Potato"
alert(vegetables)
delete vegetables[4]
alert(vegetables)

var fruits = ["Apple","Mango","Cusdard"]
var whole = vegetables.concat(fruits)
alert(whole)