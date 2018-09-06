//login logic

var users = [{
	'Firstname':'Mounika',
	'Lastname':'Smitha',
	'username':'Mounikasmitha',
	'password':'mounika',
	'Email':'mounika@gmail.com',

},
{
    'Firstname':'Lakshman',
	'Lastname':'Nayak',
	'username':'Lucky',
	'password':'lakshman',
	'Email':'lakshman@gmail.com',
},
{
	'Firstname':'Dinesh',
	'Lastname':'Kumar',
	'username':'Dinnu',
	'password':'dinesh',
	'Email':'Dinesh@gmail.com',

}]
//end of users

//normal logic

var login = function(username, password, allUsers){
	isUser=false;
	ispassword=false;
	for(user in allUsers){
		console.log(user)
		if(allUsers[user].username== username){
			if(allUsers[user].password == password){
				isUser=true;
				ispassword=true;
				break
			}
			else{
				isUser=true;
				ispassword=false;
				break
			}
		}
		else{
			isUser=false;
		}
    }

		if(isUser==true && ispassword==true){
			alert('You are logged')
		}
		else if(isUser==true && ispassword==false){
			alert('Your Password is incorrect')
		}
		else{
			alert('Your username is incorrect')
		}
}

var name = prompt("Enter your username")
var password = prompt("Enter your password")
login(name, password, users)



















