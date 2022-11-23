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