// 1

var firstName = prompt("Enter first name");
var lastName = prompt("Enter last name");
var fullName = firstName + " " + lastName;
document.write("Hellow " + fullName + "<br><br>");

// 2

var mobile = prompt("Enter your favorite mobile phone");
document.write("Length: " + mobile.length + "<br><br>");

// 3

var word = "Pakistanis";
document.write("Index of n: " + word.indexOf("n") + "<br><br>");

// 4

var text = "Hello Worldz";
document.write("Last index of l: " + text.lastIndexOf("l") + "<br><br>");

// 5

document.write("Character at index 3: " + word.charAt(3) + "<br><br>");

// 6

var fullName2 = firstName.concat(" ", lastName);
document.write("Hello " + fullName2 + "<br><br>");

// 7

var city = "Hyderabadw";
document.write(city.replace("Noor", "Mountain") + "<br><br>");

// 8

var message = "Ali and Ahmed are best friends. We play cricket and football together.";
document.write(message.replace(/and/g, "&") + "<br><br>");

// 9

var strNum = "4372";
var num = Number(strNum);
document.write("Value: " + num + " Type: " + typeof num + "<br><br>");

// 10

var url = prompt("Enter URL (e.g www.facebook.com)");
var domain = url.slice(4, url.lastIndexOf("."));
document.write("Domain: " + domain + "<br><br>");

// 11

var input = prompt("Enter text");
document.write(input.toUpperCase() + "<br><br>");

// 12

document.write(input.toLowerCase() + "<br><br>");

// 13

var words = input.split(" ");
var title = "";
for (var i = 0; i < words.length; i++) {
  title = title + words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
}
document.write(title + "<br><br>");

// 14

var num2 = 23.16;
var str = num2.toString().replace(".", "");
document.write(str + "<br><br>");

// 15

var a = "1";
var b = "6";
document.write("x = " + (a + b) + "<br><br>");

// 16

document.write("y = " + (a - b) + "<br><br>");

// 17

var username = prompt("Enter username");
for (var i = 0; i < username.length; i++) {
  var code = username.charCodeAt(i);
  if (code === 33 || code === 44 || code === 46 || code === 64) {
    alert("Invalid username");
    break;
  }
}

// 18

var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Search item").toLowerCase();
var found = false;

for (var i = 0; i < bakery.length; i++) {
  if (bakery[i] === search) {
    found = true;
  }
}
document.write(found ? "Item found<br><br>" : "Item not found<br><br>");

// 19

var s1 = prompt("Enter first string");
var s2 = prompt("Enter second string");

if (s1 > s2) {
  document.write(s1 + " is greater<br><br>");
} else if (s1 < s2) {
  document.write(s2 + " is greater<br><br>");
} else {
  document.write("Both are equal<br><br>");
}

// 20

var password = prompt("Enter password");
if (password.length < 6 || !isNaN(password.charAt(0))) {
  alert("Invalid password");
}

// 21

var university = "University of Islamabad";
var arr = university.split("");
for (var i = 0; i < arr.length; i++) {
  document.write(arr[i] + "<br>");
}
document.write("<br>");

// 22

var text2 = prompt("Enter text");
document.write("Last character: " + text2.charAt(text2.length - 1) + "<br><br>");

// 23

var sentence = "I'm A Man";
var count = 0;
var words2 = sentence.toLowerCase().split(" ");

for (var i = 0; i < words2.length; i++) {
  if (words2[i] === "the") {
    count++;
  }
}
document.write("Occurrences of 'the': " + count + "<br><br>");

// 24

var str3 = "Pakistan";
var vowels = 0;
var consonants = 0;

for (var i = 0; i < str3.length; i++) {
  var ch = str3.charAt(i).toLowerCase();
  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    vowels++;
  } else {
    consonants++;
  }
}
document.write("Vowels: " + vowels + "<br>");
document.write("Consonants: " + consonants + "<br>");