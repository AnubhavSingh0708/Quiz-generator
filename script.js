var qb= database;
var topics=qb[0].topics;
var ltop;
var stopic;
ltop=Object.getOwnPropertyNames((topics[0]));
function findTex(){
document.getElementById("result").innerHTML="";
var input=document.getElementById("search").value;
input=input.toLowerCase();
for (let i = 0; i < ltop.length; i++) {
var pos=ltop[i].search(input);
if (pos<0){
} else {
document.getElementById("result").innerHTML+="<div onclick='stopic+="+ltop[i]+"'>"+ltop[i];+"</div"+"<bR>";
}
}
}
