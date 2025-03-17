// Leap Year Checker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a Leap Year.`;
    } else {
        return `${year} is NOT a Leap Year.`;
    }
}
console.log(isLeapYear(2024)); // Leap Year
console.log(isLeapYear(2023)); // Not Leap Year

// Ticket Pricing
function getTicketPrice(age) {
    let price;
    if (age <= 12) {
        price = "$10";
    } else if (age >= 13 && age <= 17) {
        price = "$15";
    } else {
        price = "$20";
    }
    return `Ticket Price: ${price}`;
}
console.log(getTicketPrice(10)); // $10
console.log(getTicketPrice(16)); // $15
console.log(getTicketPrice(25)); // $20

// Fibonacci Sequence (Recursive)
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55

// Palindrome Checker (Recursive)
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Ignore spaces and punctuation
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
