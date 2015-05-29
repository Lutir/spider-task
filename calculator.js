var string = "";
var counter = 0;
var equalCounter = 0;
var symbolCheck = 0;
var percentCounter = 0;	

function addToString(a1)
{
sizeCheck();

if(equalCounter>0)
{
if(a1 === '+'||a1 === '-'||a1 === '/'||a1 === '*')
{
equalCounter = 0;
}
else
{
string = '';
equalCounter = 0;
}
}
string = string+  a1;
document.getElementById("outputBox").value = string;
return string;
}

function equal()
{

sizeCheck();
var z = eval(string);

equalCounter++;
if(string.length>0){
var z1 = z.toFixed(6);
z1 = parseFloat(z1);
document.getElementById('outputBox').value = z1;

if(z1/100000000<1){
document.getElementById('outputBox').style.fontSize = '60px';
}
else if(z1/10000000000<1){
document.getElementById('outputBox').style.fontSize = '46px';
}
 if(z%1 === 0){
 string = z;
}

if(percentCounter !=0)
{
string = z;
percentCounter = 0;
}

}

return 0;
}

function reset()
{
document.getElementById('outputBox').value = 0;
string = '';
document.getElementById('outputBox').style.fontSize = '60px';
return 0;
}

function percent()

{

percentCounter++;
var c = eval('('+string+')'+'*'+'.01');

string = c;

document.getElementById('outputBox').value =eval(string);

sizeCheck();

return 0;

}


function plusMinus()
{
if(string.length === 0)
{}
else{
document.getElementById('outputBox').value = -eval(string);
string = '-'+'('+string+')';
var p = eval(string);
string = p;
}
return 0;
}

function sizeCheck()
{
if( (string.length)> 7)
document.getElementById('outputBox').style.fontSize = '46px';
if( (string.length)> 10)
document.getElementById('outputBox').style.fontSize = '30px';
}

function show()
{
document.getElementById('about').setAttribute("class", "visible");
}
function hide()
{
document.getElementById('about').setAttribute("class", "hidden");
}
