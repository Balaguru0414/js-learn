/////////////////////////////////////////         if statement

var age = prompt('Enter your age')
if(age>=60)
{
	console.log('Senior citizen')
	alert('Senior citizen')
}
else if(age>=40)
{
	console.log('middle age')
	alert('Middle age')
}
else if(age>=20)
{
	console.log('youngsters')
	alert('Youngsters')
}
else if(age>=13)
{
	console.log('teenage')
	alert('Teenage')
}
else
{
	console.log('child')
	alert('Child')
}

////////////////////////////////             hi 3     looping

var count = 1
while (count<=3)
{
	console.log('hi')
	count++;
	alert('hi')
}

////////////////////////////////


var name = prompt('Enter your name')
console.log(name.length)
i=0
while(i<name.length)
{
	console.log(name[i])
	alert(name[i])
	i++

}


//////////////////////////////////////////             eg ; 1 - 100


var number= prompt('enter your number')
divisor=1
while(divisor<=number)
{
	console.log(divisor)
	divisor++
}

///////////////////////////////////////////      enter your fav actor 

name=prompt('Enter your fav actor')
while(name!=='vijay')
{
	name=prompt('enter your fav actor')
}
alert('ok, your fav actor is vijay')


// ///////////////////////////////////////        set of line to show to the client

var name= prompt('enter your name')
alert('hi '+name)
alert('how are you')
alert('you have beautiful chance to win this game')
alert('now, go to the game')

/////////////////////////////////////////////////      Quiz game     Nested-if

alert('Quiz Game! Press - OK - to Start')

var quiz = prompt('1. He is a tamil actor')
if(quiz=='kamal')
{
	alert('Congrats! you have correct answer')
}
else{
	alert('Sorry, Incorrect Guess')
	quiz = prompt(' 2. He has a many Awords')
	if(quiz=='kamal')
	{
	alert('Congrats! you have correct answer')
	}
	else{
	alert('Sorry, Incorrect Guess')
	quiz = prompt('3. He hosted a Populor Show in Television')
	if(quiz=='kamal')
	{
	alert('Congrats! you have correct answer')
	}
	else{
	alert('Sorry, Incorrect Guess')
	quiz = prompt('4. He is old 75 years')
	if(quiz=='kamal')
	{
	alert('Congrats! you have correct answer')
	}
}
}
}


////////////////////////////////////////////       For looping   (  ore lineah eludhuradhu  )

for(var no=1;no<=5;no++)
{
	console.log(no)
}

///////////////////////////////////////////////////         function calling

function repay(amount) {
	console.log(amount + ' you pay')
}
salary = 500
repay(salary)

////////////////////////////////////////////////////     multiple in function

function multiple(no1,no2) {
	return no1*no2
}
result = multiple(10,20)
console.log(result)

////////////////////////////////////////////////////       enter marks

function result(tamil_mark,eng_mark,maths_mark,science_mark,social_mark)
{
	return tamil_mark+eng_mark+maths_mark+science_mark+social_mark
}
tamil =prompt('Enter your Tamil Mark')
english =prompt('Enter your Tamil Mark')
maths =prompt('Enter your Tamil Mark') 
science = prompt('Enter your Tamil Mark')
social = prompt('Enter your Tamil Mark')

total=result(tamil,english,maths,science,social)
console.log(total)
alert(total)

/////////////////////////////////////////////////        fun global variable and local variable

var salary = 25000  // global variable
function buy_veg() {
	amount = 500  //   local variable
	console.log('buying vegetables')
	console.log('buy_veg'+ amount)
	// body...
}
buy_veg()
console.log(salary)

/////////////////////////////////////////////////        Array

var i = ['Bala',22,true]
alert(i[0]+i[1]+i[2])
console.log(i[0])
console.log(i[1])
console.log(i[2])

     or

var details = ['Bala',22,true]
console.log(details.length)
i = 0
while(i<details.length)
{
	console.log(details[i])
	i++
}

/////////////////////////////////////////////////      create a 'p' tag in js

function create_html_tag()
 {
	content = document.getElementById("input_text").value;

	para_element = document.createElement("p");

	our_data = document.createTextNode(content);

	para_element.appendChild(our_data);

	mydiv = document.getElementById("div1");

	mydiv.appendChild(para_element);
}

////////////////////////////////////////////////     tag name used   

	<h2>TagName</h2>
		
	<input placeholder="Enter Something" ><br>
	<input placeholder="Enter Something" ><br>
	<input placeholder="Enter Something" ><br>
	<br>
	<button onclick="check()">Submit</button>
	<p> </p>
	<p> </p>
	<p> </p>

  //  js

function check() {
	box = document.getElementsByTagName('input');
	data = document.getElementsByTagName('p');
	data[0].innerHTML = box[0].value;
	data[1].innerHTML = box[1].value;
	data[2].innerHTML = box[2].value;
}

////////////////////////////////////////////////////     tagname ---  div -- input - to - p tagname

<h2>div in input</h2>
	<input placeholder="Enter Something" >
	<div id="div1">	
	<input placeholder="Enter Something" ><br>
	<input placeholder="Enter Something" ><br>
	<input placeholder="Enter Something" ><br>
	<br>
	<button onclick="check()">Submit</button>
	<p> </p>
	<p> </p>
	<p> </p>
	</div>

//  js

function check() {
	mydiv = document.getElementById('div1')
	box = mydiv.getElementsByTagName('input');
	data = document.getElementsByTagName('p');
	
	for (var i = 0; i<box.length;i++) {
		data[i].innerHTML = box[i].value;
	}
}

////////////////////////////////////////////////////    css -- added -- in js

function check() {
	mydiv = document.getElementById('div1')
	box = mydiv.getElementsByTagName('input');
	data = document.getElementsByTagName('p');
	
	for (var i = 0; i<box.length;i++) {
		data[i].innerHTML = box[i].value;

		data[i].style.color='red'   // -------> css      
	}
}

////////////////////////////////////////////////////      css -- class name call in ---- js


above same HTML

/// css

input{
	width: 300px;
	height: 25px;
	color:blue;
	margin: 10px;
}

button{
	width: 300px;
	height: 25px;
	margin: 10px;
}
.tagname{
	font-size: 1.8rem;
	color: white;
	background: black;
	width: 300px;
	height: 50px;
	text-align: center;
	justify-content: center;
	margin: 15px;
	border-radius: 25px;
}



///  js

function check() {
	mydiv = document.getElementById('div1')
	box = mydiv.getElementsByTagName('input');
	data = document.getElementsByTagName('p');
	
	for (var i = 0; i<box.length;i++) {
		data[i].innerHTML = box[i].value;
		data[i].className ='tagname' 
	}
}


//////////////////////////////////////////////////    chat app

<h1>Chat App</h1>
	<div class="container">
		<div class="box">
			<h2>Bala</h2>
			<input id="i1">
			<button onclick="sendsms()">send</button>
		</div>

		<div class="box" id="mydiv"></div>

		<div class="box">
			<h2>Dhana</h2>
			<input id="i2">
			<button onclick="sendsms()">send</button>
		</div>
	</div>
	<div class="ud">
	<a href="#top" class="link" title="Go to top"><h2>up</h2></a>
	<a href="Down"></a>
	<a href="#Down" class="link" title="Go to down"><h2>Down</h2></a>
	</div>

///// ------- css

.container{
	width: 800px;
	height: 230px;
	
	display: grid;
	grid-template-columns:1fr 1fr 1fr ;
	line-height: 53px;
	text-align: center;
}

.ud{
	width: 200px;
	height: 150px;
	position: fixed;
	top: 20%;
	right: 20%;
	background: #88eef7;
	color: black;
	text-align: center;
	border: none;
	outline: none;
	border-radius: 30px;
	
}

.link{
	text-decoration: none;

}
.cs{
	
	text-align: left;
	color: black;
	font-weight: bold ;

}

.cs1{
	
	text-align: right;
	color: ;
	font-weight: bold;

		
}


.box{
	border: 1px solid black;
	padding: 10px;
	list-style-type: none;
	font-size: 18px;

}


#mydiv{
	line-height: 22px;
	background-image: url(wa.jpg);
	text-transform: capitalize;
	text-align: right;
}

button{
	width: 60%;
	color: white;
	background: green;
	font-size: 18px;
	font-weight: bold;
	border: none;
	outline: none;
	border-radius: 20px;
	padding: 10px;
	box-shadow: 2px 2px 4px gray;
}

button:hover{
	box-shadow: 0px 0px 1px gray;
	width: 59%;
}

h2{
	color: #34aeeb;	
	font-size: 1.8rem;
}

input{
	width: 90%;
	background: #f0f7fa;
	color: darkgray;
	border-radius: 10px;
	border: none;
	outline: none;
	padding: 10px;
	font-size: 18px;
	box-shadow: inset 2px 2px 4px gray, 2px 2px 4px white;
}


/// ------- js

function sendsms(){
	value1 = document.getElementById('i1').value;
value2 = document.getElementById('i2').value;
element = document.createElement('li');     // <li> </li>

if(value1!='')
{
	text1=document.createTextNode(value1);
	element.appendChild(text1);
	div=document.getElementById('mydiv');
	div.appendChild(element);
	element.className='cs'
	document.getElementById('i1').value='';
}
else if(value2!='')
{
	text2=document.createTextNode(value2);
	element.appendChild(text2);
	div=document.getElementById('mydiv');
	div.appendChild(element);
	element.className='cs1'
	document.getElementById('i2').value='';
}	
}

/////////////////////////////////////////////////////////////     comfirm ---- alert


<h2>Alert,Confirm,prompt</h2>
    <p id='p1'> </p>
    <button onclick="check()">Click Me</button>

////        ---- css

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: none;
    outline: none;

}
body{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

p{
    font-size: 2rem;
    
}

button{
    padding: 10px;
    color: white;
    background: blue;
}

///// ----- js

function check() {
    if(confirm('You Want to see my number')){
        document.getElementById('p1').innerHTML='9360172760'
}
else{
        document.getElementById('p1').innerHTML='Sorry! you say Cancel'
}
}
             ----    prompt  using  -----

function check() {
alert('You Want to see my number')
passward=prompt('Enter your Passward','')
if(passward=='bala')
{

    document.getElementById('p1').innerHTML='9360172760'
}
else{
        document.getElementById('p1').innerHTML='Sorry! Went wrong'
}
}


////////////////////////////////////////////////////////// funhction get milk

function getmilk(amount) {
    console.log(" goto the shop ");

    var bottles = Math.floor(amount/30);        //  float - int mattra

    console.log(" Buy "+bottles+" bottles of milk ");
    console.log("return to home");
}

getmilk(100);  

/////////////////////////////////////////////////////////  













































































