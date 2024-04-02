console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let favoriteNumber =3;
const userInput = prompt("input a number");

if (userInput < favoriteNumber) {
  
  console.log("too low");

} else if (userInput > favoriteNumber) {
  console.log("too High");

} else {
    console.log("Congratulations");
  }
 

  // Exerise #2

  let birthMonth = prompt("What is your birth month");
  birthMonth = birthMonth.toLowerCase();

  switch (birthMonth) {
    case "June":
    case "July":
    case "August":
      console.log("you were born during the summer");
        break;
    case "Septmember":
    case "October":
    case "November":
      console.log("you were born during the fall");
        break;

    case "December":
    case "January":
    case "February":
      console.log("you were born during the winter");
        break;

    case "March":
    case "April":
    case "May":
      console.log("you were born during the spring");  
        break;
    
    default:
      console.log("Please enter valid birth month3");
        break;
  } 

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

// if (typeId == "01") {
//   type = "Tank top";
// } else if (typeId == "02") {
//   type = "T-Shirt";
// } else if (typeId == "03") {
//   type = "Long Sleeve";
// } else if (typeId == "04") {
//   type == "Sweat Shirt";
// } else {
//   type = "Other";
// }

// if (colorId == "BK") {
//   color = "Black";
// } else if (colorId == "BL") {
//   color = "Blue";
// } else if (colorId == "RD") {
//   color = "Red";
// } else if (colorId == "PU") {
//   color = "Purple";
// } else {
//   color = "White";
// }

// if (sizeId == "S") {
//   size = "Small";
// } else if (sizeId == "M") {
//   size = "Medium";
// } else if (sizeId == "L") {
//   size = "Large";
// } else if (sizeId == "XL") {
//   size = "Extra Large";
// } else {
//   size = "One Size Fits All";
// }

// console.log(`Product: ${size} ${color} ${type}`);

switch(typeId) {
  case "01":
    type = "Tank top";
    console.log("tank top");
    break;

    case "02":
    type = "T-Shirt"; 
    console.log("T-Shirt");
    break;

    case "03":
    type = "Long Sleeve";
    console.log("Long Sleeve");
    break;

    case "04":
    type = "Sweat Shirt";
    console.log("Sweat Shirt");
    break;

    default:
    type = "other";
    console.log("other");
    break;
}

switch(colorId) {
  case "BK":
    color = "Black";
    console.log("Black");
    break;

    case "BL":
    color = "Blue";
    console.log("Blue");
    break;

    case "RD":
    color = "Red";
    console.log("Red");
    break;

    case "PU":
    color = "Purple";
    console.log("Purple");
    break;
    
    default:
    console.log("White");
    break;
}

switch(sizeId) {
  case "S":
    size = "Small";
    console.log("Small");
    break;

    case "M":
    size = "Medium";
    console.log("Medium");
    break;

    case "L":
    size = "Large";
    console.log("Large");
    break;

    case "XL":
    size = "X-Large";
    console.log("Extra Large");
    break;
    
    default:
    console.log("One Size Fits All");
    break;
}

console.log(`Product: ${size} ${color} ${type}`);
