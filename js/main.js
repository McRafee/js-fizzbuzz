/*
    Fizz Buzz test:
    Scrivi un programma che stampi i numeri da 1 a 100,
    ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
    Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

    // (!(i % 3)) multipli di 3 = “Fizz”
    // (!(i % 5)) multipli di 5 = "Buzz"
    // (!((i) % 3) && !((i) % 5)) multipli di 3 e 5 = "FizzBuzz"
*/


var numeri = [];

for (var i = 1; i < 101; i++) {

    if (!(i % 3) && !(i % 5)) {
        numeri.push("FizzBuzz");
    } else if (!(i % 3)) {
        numeri.push("Fizz");
    } else if (!(i % 5)) {
        numeri.push("Buzz");
    } else {
        numeri.push(i);
    }
}

console.log(numeri); //debug

document.getElementsByClassName('numeri')[0].innerHTML =
'<li class="list-group-item">' + numeri.join('</li><li class="list-group-item">') + '</li>'; // print the array as list
