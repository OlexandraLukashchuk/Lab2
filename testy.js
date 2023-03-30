const {listaZadan, poniedzialek, wtorek, firmy} = require('./dane')
const {calc} = require('./main')


console.log("Zadanie 2_1 \n")

function wyswietlLiczby(...argumenty){
 console.log(argumenty)
 
}
wyswietlLiczby(4,6,7,9,0,2) 

function sumator(...argumenty){
    const suma = argumenty.reduce((acc, curr) => acc + curr, 0);
  const argumentyTekst = argumenty.join(', ');
  const wynikTekst = `Suma liczb: ${argumentyTekst} wynosi ${suma}. \n`;
  console.log(wynikTekst);
}
sumator(1,2,33)


console.log("Zadanie 2_2 \n")



function foreachmethod() {
  let element = "";
  listaZadan.forEach((task) => {
    element += task.tekst + "\n";
    
  });
  console.log("Metoda forEach: \n")
  console.log(element);
}
foreachmethod()

function mapmethod(){
  const tekstyZadan = listaZadan.map((zadanie) => zadanie.tekst);
  console.log("Metoda map: \n")
  console.log(tekstyZadan);
}
mapmethod()

function filter(){
  let filter = listaZadan.filter((zadanie) => zadanie.zrealizowano)
    .map((zadanie) => zadanie.tekst)
    
  console.log("Metoda filter: \n" + filter)
}
filter()

console.log("\nZadanie 2_3 \n")

function zad2_3(){
  const stawka = 35;
    const zadania = poniedzialek.concat(wtorek)
                    .map((zadanie) => zadanie.czas / 60)
                    .filter((czas) => czas > 2)
                    .map(czas => czas * stawka)
                    .reduce(function (acc, curr) {return [(+acc) + (+curr)];})
                    .map(zadanie => zadanie.toFixed(2) + " PLN")
                    .reduce((_, curr) => curr);
    
    console.log("Final: " + zadania) + "\n";
}
zad2_3()

console.log("\nZadanie 2_4 \n")

function zad2_4()
{
  const firmyIT = firmy.filter(firma => firma.kategoria === "IT")
    .map((firma) => firma.nazwa);
  console.log("Wyswietlenie firm z branzy IT: " + firmyIT + "\n");

  const firmy90 = firmy.filter(firma => firma.poczatek >= 1990 && firma.poczatek <= 1999 && firma.koniec >= 1990 && firma.koniec <= 1999)
    .map((firma) => firma.nazwa)
    
  console.log("Firmy, ktore powstaly i zakonczyly swoja dzialalnosc w '90: " + firmy90  + "\n");

  const firmy10lat = firmy.filter(firma => (firma.koniec - firma.poczatek) >= 10)
    .map(firma => firma.nazwa)

  console.log("Firmy, ktore funkcjonowaly >10 lat: "+ firmy10lat  + "\n");
}
zad2_4()


console.log("Zadanie 2_5 \n")

function zad2_5()
{
  console.log(calc(2,3, '+'));
  console.log(calc(5,3, '-'));
  console.log(calc(2,2,'*'));
  console.log(calc(6,2,'/'));
}
zad2_5()