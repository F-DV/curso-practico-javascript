function anualInterest(amount,interestInPercentage){
    const result = amount * interestInPercentage/100;
    return result;
}

function totalSaving(amount, years, interest){
    const total = anualInterest(amount,interest)*years + amount;
    return total;
}

console.log(totalSaving(1000000,2,5));