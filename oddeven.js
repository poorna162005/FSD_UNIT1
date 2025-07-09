const checkOddEven = (num) => {
    console.log(num + (num % 2 === 0 ? " is even." : " is odd."));
};

//Eample usage
checkOddEven(10); // Output: 10 is even.
checkOddEven(7);  // Output: 7 is odd.