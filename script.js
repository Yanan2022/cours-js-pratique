// Let’s sum the values of a small array
var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
var sum = 0;

// Using the for… in loop
for (var i in numbers) {
    sum += numbers[i];
}

console.log(sum)