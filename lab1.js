// TASK 1: Create a function called formatFullName that takes two parameters: firstName and lastName. 

const formatFullName = (firstName, lastName) => {
    //set variables for the first letter of a string to be capitolized
    let firstNameChar = firstName.charAt(0).toUpperCase();
    let lastNameChar = lastName.charAt(0).toUpperCase();

    //edge case condition, if user doesnt enter full name
    if (firstName == "" || lastName == "") {
        return "Enter full name"
    }

    return `${lastNameChar + lastName.slice(1)}, ${firstNameChar + firstName.slice(1)}`;
}

//clg for testing
console.log(formatFullName("robb", "lee"));
console.log(formatFullName("Robb", ""));







// TASK 2: Write a function called calculateTotalCost that takes three parameters: price, quantity, and taxRate.

const calculateTotalCost = (price, quantity, taxRate, discount) => {
    //edge case conditions, if the user does not enter in a number, or enters a negative number.
    if (
        isNaN(price) ||
        isNaN(quantity) ||
        isNaN(taxRate) ||
        price < 0 ||
        quantity < 0 ||
        taxRate < 0
    ) {
        return "Warning: Enter a valid number";
    }

    // Base total
    let total = (price * quantity) * (1 + taxRate);

    // Apply discount condition is available
    if (discount !== undefined) {
        total -= discount;
        return `Discounted price: ${Math.round(total)}`;
    } else {
        return Math.round(total);
    }

    // No discount
    return Math.round(total);
};


//clg for testing
console.log((calculateTotalCost(75, 2, .06, 50)));
console.log(calculateTotalCost(75, -5, .06));
console.log(calculateTotalCost(75, 2, .06));






// TASK 3: Write a function called checkEligibility that takes two parameters: age and isEmployed. 

//declared array of user objects
const user = [
    {
        name: "Jon",
        age: 20,
        isEmployed: false
    }, {
        name: "Kelly",
        age: 17,
        isEmployed: true
    }, {
        name: "Jake",
        age: 30,
        isEmployed: true
    }
]


const checkEligibility = (age, isEmployed) => {
    if (age <= 18) {
        return "Not eligible";
    } else if (age > 18 && isEmployed) {
        return "Eligible"
    } else {
        return "Conditionally eligible."
    }
}

//clg for testing

console.log(`${user[0].name}: ${checkEligibility(user[0].age, user[0].isEmployed)}`);
console.log(`${user[1].name}: ${checkEligibility(user[1].age, user[1].isEmployed)}`);
console.log(`${user[2].name}: ${checkEligibility(user[2].age, user[2].isEmployed)}`);



