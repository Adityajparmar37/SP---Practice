const str1 = "Aditya pArmar";
const str2 = "Hello, Aditya! How are you, Aditya ?";

//1) length
console.log(str1.length);

//2) indexOf
console.log(str2.indexOf("Aditya"));

//3) lastIndexOf
console.log(str2.lastIndexOf("Aditya"));

//4) search
let check = "you";
console.log(str2.search("How"));
console.log(str2.search(check));

//5)
console.log("original string" , str2);
console.log("slice stirng", str2.slice(7, 12));
console.log(str2.slice(7)); // 7 to last
console.log(str2.slice(0, 9));

// no swapping happens (8,5) , rather returns an empty string
console.log(str2.slice(8, 5));

// negative indices are allowed and are count form backend side
console.log(str2.slice(8, -1));
console.log(str2.slice(-33));
console.log(str2.slice(-12, -1));

//6) substring
console.log(str2.substring(0, 8));
console.log(str2.substring(5));
// negative indices are treated as 0
console.log(str2.substring(-1, 12));
console.log(str2.substring(-2, 20));

// as negative indices are treaded as 0 hence it will be (9,0) which is not possible hence it will swap it automatically to --> (0,9)
console.log(str2.substring(9, -1));

//7) substr
console.log(str2.substr(4, 9));
console.log(str2.substr(5));
console.log(str2.substr(9, 4));
console.log(str2.substr(-1, 8));
console.log(str2.substr(-1));
console.log(str2.substr(8, -1));

//8) replace
console.log(str1.replace("pArmar", "Parmar"));

//9) toUpperCase
console.log(str1.toUpperCase());

//10) toLowerCase
console.log(str1.toLowerCase());

//11) concat
console.log(str1.concat(str2));

//12) trim
let str = "             Aditya Parmar whitespace";
console.log(str);
console.log(str.trim());

//13) charAt
console.log(str1.charAt(7));

//14) charCodeAt
console.log(str1.charCodeAt(7));

//15) split
str = "Apple,banana,cherry";
console.log(str.split(","));

str = "Apple,banana:cherry";
console.log(str.split(","));
console.log(str.split(":"));

str = "Apple,banana,cherry";
console.log(str.split(""));
console.log(str.split(" "));
