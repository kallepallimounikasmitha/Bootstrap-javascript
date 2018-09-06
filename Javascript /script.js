/*  //example 1


var items = window.prompt("Please tell us the points you have earned:");

if(items>5){
	alert("you have got a promo code")
}
else if(items==4){
	alert("exact four wow")
}
else{
	alert("Sorry, earn more points")
}  */


/* //calculating marks

var marks = window.prompt("Please enter the marks")

if(marks==undefined||marks==null||marks==''){
	alert("don't leave blank")
}
else if (marks<=0 && marks>=100) {
	alert('enter the number between 1 to 100')
}
else{
	var totalmarks=100
	var percentage=(marks / totalmarks)*100
	if(percentage>=90){
		alert('topper')
	}
	else if(percentage>=75||percentage<90){
		alert('good')
	}
	else{
		alert('averge')
	}
	
}*/


/*  //program for grading
var grade=window.prompt('enter the grade:')
switch(grade){
	case 'A':
	alert('Outstanding')
	break
	case 'B':
	alert('Verygood')
	break
	case 'C':
	alert('good')
	break
	case 'D':
	alert('fail')
	break
	default:
	alert('enter the vaild one')
}  */

/*// examples for the for loop example 1
var vegetables = ["Pumpkin","Carrot","Tomato","Raddish","LadysFinger"]

//alert(vegetables[0]);
//alert(vegetables[1]);
//alert(vegetables[2]);
for(i=0;i<vegetables.length;i++){
	alert(vegetables[i]);
}*/
/* // example of while loop

var friend = window.prompt("Enter the name to find in your friend list")
var list = ["Sarvani","Vennela","Divya","Vyshnavi","Sarnaya","Sowjanya","Bhargavi"]

for(i=0;i<=list.length;i++){
	if(list[i]==friend){
		alert('Friend found and number is:'+(i+1))
	}
	else{
		//do nothing
	}
}*/

/* //example of for in loop

var details= {Name:"Mounika Smitha",
			  Email:"someone@gmail.com",
              Phonenumber:999999999
             }
    for(x in details){
    	alert(x)
    	alert(details[x])


    }
*/

/*//another example on for in loop
var detail = [{

	Student:"Mounika",
	Email:"mouni@gmail.com"
},
{
	Student:"Bhargavi",
	Email:"vinnu@gmail.com"

}]

for(x in detail){
	alert(detail[x].Student)
	alert(detail[x].Email)

}
*/

// examples of functions example 1
var name=window.prompt("enter the name")
var message = window.prompt("Enter the message")
var generatingemail = function(name,message){
	var messages = 'Hi'+" "+name+","+"\n"+'We will clear all your doubts and we will provide you with all details.'+"\n"+message
	return messages
}
alert(generatingemail(name,message))









