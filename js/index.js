console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Paquito";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Ambrosio";
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name it has ${hacker1.length}`);
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase());
}

for (let i = 0; i < hacker2.length; i++) {
  console.log(hacker2.split("").reverse().join(" "));
}

for (let i = 0; i < hacker1.length; i++) {
   
    if(hacker1.localeCompare(hacker2) < hacker2.localeCompare(hacker1)) {
        console.log(`The driver's name goes first`)
    } else if (hacker1.localeCompare(hacker2) > hacker2.localeCompare(hacker1)){
        console.log(`Yo, the navigator goes first`)
    } else  {
        console.log(`What?! You both have the same name?`)
    }
}

//Bonus 1:
let latin = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis dui at lorem scelerisque pretium. Fusce lacinia feugiat neque, ut mollis ligula accumsan eget. Sed eget felis justo. Cras ultrices sed velit sit amet blandit. Proin malesuada, sem ac pulvinar sagittis, sem odio dignissim eros, eu volutpat odio erat non diam. Mauris at blandit magna, in euismod nunc. Nullam porta euismod nunc, at ornare ante fermentum ac. Sed in blandit erat. Aenean ultrices sodales consequat. Morbi nisi nisl, rutrum eget finibus id, aliquam sodales purus. Suspendisse fringilla metus at blandit vehicula. Donec sed dignissim lacus.

Phasellus laoreet imperdiet metus, id luctus magna efficitur in. Cras vel enim sed mauris lacinia mollis. Etiam eget commodo mauris. Morbi fringilla venenatis diam eget imperdiet. Morbi mi ex, fermentum nec turpis et, vestibulum blandit sem. Sed a malesuada ante, id laoreet dui. In in congue metus. Integer tincidunt hendrerit lectus, id congue ligula pulvinar vitae. In finibus mi fringilla quam sagittis, eget convallis ipsum vestibulum. In in nisl mollis velit imperdiet sagittis. Integer eu euismod diam, sed lacinia eros. Pellentesque ultrices felis sit amet ornare volutpat.

Phasellus mauris sem, rutrum nec ex eu, tempor tincidunt sem. Nullam non ex porttitor, ornare erat in, sollicitudin mi. Mauris iaculis porttitor tempor. Sed imperdiet urna non mi ornare iaculis. Morbi at ante rhoncus, mattis erat at, ornare lorem. Donec ornare auctor neque, nec condimentum velit laoreet ut. Cras nec tempor lorem, eget vulputate augue. Vestibulum dapibus massa tempor quam vehicula rhoncus.`
console.log(countWords(latin))