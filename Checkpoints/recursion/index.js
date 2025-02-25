// Leap Year Checker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

// Ticket Pricing
function getTicketPrice(age) {
    if (age <= 12) {
        return "Ticket Price: $10";
    } else if (age >= 13 && age <= 17) {
        return "Ticket Price: $15";
    } else {
        return "Ticket Price: $20";
    }
}

// Weather Clothing
function clothingAdvice(temperature, isRaining) {
    if (temperature < 10) {
        return isRaining
            ? "Wear a warm coat and take an umbrella."
            : "Wear a warm coat.";
    } else if (temperature >= 10 && temperature <= 20) {
        return isRaining
            ? "Wear a light jacket and take an umbrella."
            : "Wear a light jacket.";
    } else {
        return isRaining
            ? "Wear a t-shirt and take an umbrella."
            : "Wear a t-shirt.";
    }
}

// Fibonacci Sequence
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Palindrome Checker
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Remove spaces & punctuation
    function check(left, right) {
        if (left >= right) return true;
        if (str[left] !== str[right]) return false;
        return check(left + 1, right - 1);
    }
    return check(0, str.length - 1);
}

// Power Function
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

// Just a few examples, feel free to modify anything you want and test stuff:
console.log(isLeapYear(2024)); // "2024 is a leap year."
console.log(getTicketPrice(15)); // "Ticket Price: $15"
console.log(clothingAdvice(18, true)); // "Wear a light jacket and take an umbrella."
console.log(fibonacci(7)); // 13
console.log(isPalindrome("Racecar")); // true
console.log(power(2, 5)); // 32
