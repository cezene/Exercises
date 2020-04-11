/* Write a program that, given the cost of a product and its sale value, 
calculates how much profit (in absolute numbers)the company will have when selling 1,000 of these products.
Note that a 20% tax is levied on the cost of the product, which must be taken into account when calculating profit.
Your program should also issue an error message and terminate if any of its input values are less than zero. */
function profitCalculator() {
    let cost = 50;
    let saleValue = 100;
    let tax = cost * 0.2;
    if (cost < 0|| saleValue < 0) {
        alert("Your number must be a positive number")
    }
    else {
    let profit = saleValue - tax - cost;
    let result = profit * 1000;
    return result;
    }
}
console.log(profitCalculator());