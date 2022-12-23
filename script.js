/*const calcAverage = (a,b,c) => (a+b+c)/3;

// test 1

const checkAnswer = function (avgDolphins,avgKoalas) {
	if (avgDolphins > 2 * avgKoalas) {
		console.log(`Dolphins wins the game (${avgDolphins} vs. ${avgKoalas}).`)
	} else if (avgKoalas > 2 * avgDolphins) {
		console.log(`Koalas wins the game (${avgDolphins} vs. ${avgKoalas}).`)
	}else{
		console.log(" no one wins the game!!!! ")
	}
}

// test 2

dolphinsScore = calcAverage(25,24,31);
koalasScore = calcAverage(85,54,47);
console.log(dolphinsScore,koalasScore);
console.log(checkAnswer(dolphinsScore,koalasScore));

array

const friends = ['Dhana','Abi','Mari'];
console.log(friends);
console.log(friends[1]);
console.log(friends.length);

const years = new Array(2022,1997,1999,2000);

console.log(years);
console.log(years[2]);
console.log(years[years.length-1]);

years[0] = 1998;
console.log(years);

const firstName = 'hinananki';

const bala = [firstName,'guru',135-87,friends,years];

console.log(bala);

const calcAge = function (birthyear) {
	age = 2022 - birthyear;
	return age;
}

const age1 = 2000;
const age2 = years[1];
const age3 = 1976;
const age4 = calcAge(years[2]);
const age5 = calcAge(1994);

years[3] = 1963;

console.log(`My age is ${calcAge(age1)}, 
My brother age is ${calcAge(age2)}, 
My dad age is ${calcAge(years[3])},
My mother age is ${calcAge(age3)},
My friends age is ${age4}
${age5}`);


add element

const friends = ['Dhana','Abi','Mari'];
const newlength = friends.push('Madhu');
console.log(friends);
console.log(newlength);

friends.push('Ganesh');
friends.unshift('john');

console.log(friends);

remove element

friends.pop();      //last element remove

const popped = friends.pop();

console.log(friends);

console.log(`removed element is ${popped}`);
friends.shift();
console.log(friends);

console.log(friends.indexOf('Abi'));
console.log(friends.indexOf('bala'));
console.log(friends.indexOf('Mari'));

console.log(friends.includes);


chellenge 2

const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125,555,48];
console.log(`My bill value is ${bills}`);

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(`My tips value is ${tips}`);

const totalBill = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(bills,totalBill);

// array object

const bala = {
	firstName : "Bala",
	lastName : "Guru",
	birthyear : 2000,
	work : "Web developer",
	friends : ['Abinesh','Dhana','Marimuthu','Ganesh'],
	drivingLicence : false,
	calcAge : function () {
		this.age = 2022 - this.birthyear;
		return this.age;
	},
	getSummary : function () {
		return `${this.firstName} have a ${this.friends.length} friends and ${this.friends[0]} is my best friends.
i was ${this.calcAge()}-years old.
i was a ${this.work}.i have ${this.drivingLicence ? 'a': 'no'} DrivingLicence.`
}
	
}

// console.log(bala);

// console.log(bala.age);

// console.log(bala.getSummary());

console.log(bala['getSummary']());  

const bala = {
	firstName : "Bala",
	lastName : "Guru",
	birthyear : 2000,
	work : "Web developer",
	friends : ['Abinesh','Dhana','Marimuthu','Ganesh'],
	drivingLicence : false,
	calcAge : function () {
		this.age = 2022 - this.birthyear;
		return this.age;
	},
	getSummary : function () {
		return `${this.firstName} have a ${this.friends.length} friends and ${this.friends[0]} is my best friends.
i was ${this.calcAge()}-years old.
i was a ${this.work}.i have ${this.drivingLicence ? 'a': 'no'} DrivingLicence.`
}
	
}

bala.email = 'balag0414@gmail.com';
bala.location = 'Tiruchirapalli';
bala.fatherName = 'Lakashmanan Raj'
bala.motherName = 'Kavitha';
bala.brotherName = 'Surya Narayanan';

const namekey = "Name";
console.log(bala['first'+namekey]);
console.log(bala['last'+namekey]);

const interstData = prompt("which data you want ?");

bala[interstData] ? console.log(bala[interstData]) : console.log(`Wrong Match!!!

you can only see 
firstName
lastName
birthyear
work
friends
drivingLicence`);



// challange

const bala = {
	fullName : 'BalaGuru',
	weight : 100,
	height : 1.75,
	calcBMI : function () {
		this.bmi = this.weight / this.height ** 2;
		return this.bmi;
	}
}

const dhana = {
	fullName : 'DhanaSekaran',
	weight : 70,
	height : 1.75,
	calcBMI : function () {
		this.bmi = this.weight / this.height ** 2;
		return this.bmi;
	}
}

bala.calcBMI();
dhana.calcBMI();

console.log(Math.floor(bala.bmi),Math.floor(dhana.bmi));

if (bala.bmi > dhana.bmi) {
	console.log(`${bala.fullName}'s BMI (${Math.floor(bala.bmi)}) is higher than ${dhana.fullName}'s BMI (${Math.floor(dhana.bmi)}).`);
} else if(dhana.bmi > bala.bmi){
	console.log(`${dhana.fullName}'s BMI (${Math.floor(dhana.bmi)}) is higher than ${bala.fullName}'s BMI (${Math.floor(bala.bmi)}).`);
}else{
	console.log("Both are have a same BMI.")
}



// looping

for(let rep=1; rep<=10; rep++){
	console.log(`Lifiting weights ${rep} times`);
}




const bala = [
	"Bala",
	"Guru",
	2022-2000,
	"Web developer",
	['Abinesh','Dhana','Marimuthu','Ganesh'],
	true
];

const type = [];

for(let i=0; i<bala.length; i++){
	console.log(bala[i],typeof bala[i]);

	// type[i] = typeof bala[i];

	type.push(typeof bala[i]);
}
console.log(type);

const years = [2000,1997,1976,1963];
const age = [];

for (i = 0; i < years.length; i++) {
	calc = 2022-years[i];
	age.push(calc);
}

console.log(age);

// continue and break

for(i=0; i<bala.length; i++){
	if (typeof bala[i] !== 'string') break;

		console.log(bala[i], typeof bala[i]);
}

*/






























