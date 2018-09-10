/*Olaf Touw,
  applicatieonwikkeling niv 4, Da Vinci college Gorinchem
*/
const SPRICE = 9;	//bij deze const geef ik aan wat de prijs is.
const MPRICE = 10;
const LPRICE = 13;

var small = prompt("Hoeveel small pizza's wilt u?");	//deze var vraagt doormiddel van een prompt hoeveel small pizzas de klant wilt.
var medium = prompt("Hoeveel medium pizza's wilt u?");
var large = prompt("Hoeveel large pizza's wilt u?");

var smallprice = small*SPRICE;
var mediumprice = medium*MPRICE; 
var largeprice = large*LPRICE;
var totalprice = smallprice+mediumprice+largeprice;		//hier word het totaal bedrag uitgerekent.

/* hier komt het antwoord te staan van hoeveel pizzas u heeft gekozen hij haalt het antwoord uit de prompt en de prijs uit de const */
document.write("U heeft gekozen voor"," ", small," ", "small pizza(s).", " ","€", smallprice, ",-");
document.write("<br><br>");		//deze "<br><br>" staat voor een dubble ENTER.
document.write("U heeft gekozen voor"," ", medium," ", "medium pizza(s).", " ","€", mediumprice, ",-");
document.write("<br><br>");
document.write("U heeft gekozen voor"," ", large," ", "large pizza(s).", " ","€", largeprice, ",-");
document.write("<br><br>", "Het totaal bedrag is €", totalprice,",-")