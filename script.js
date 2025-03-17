//your JS code here. If required.
function manipulateArray() {
    const outputDiv = document.getElementById("output");

    // Initial promise resolving after 3 seconds
    new Promise((resolve) => {
        setTimeout(() => resolve([1, 2, 3, 4]), 3000);
    })
    .then(numbers => {
        // First transformation: Filter out odd numbers (after 1 second)
        return new Promise((resolve) => {
            setTimeout(() => {
                const evens = numbers.filter(num => num % 2 === 0);
                outputDiv.textContent = evens.join(", ");
                resolve(evens);
            }, 1000);
        });
    })
    .then(evenNumbers => {
        // Second transformation: Multiply even numbers by 2 (after 2 seconds)
        return new Promise((resolve) => {
            setTimeout(() => {
                const doubled = evenNumbers.map(num => num * 2);
                outputDiv.textContent = doubled.join(", ");
                resolve(doubled);
            }, 2000);
        });
    });
}

// Call the function to execute the transformations
manipulateArray();
