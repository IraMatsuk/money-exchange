module.exports = function makeExchange(currency) {
    var coins = [["H", 50],["Q", 25],["D", 10],["N", 5],["P", 1]];
    var obj = {};

    if(currency <= 0) {
        return {};
    }
    if(currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    for (var i = 0; i < coins.length; i++) {
        // check currency with current coin
        if (currency >= coins[i][1]) {
            // currency contain at least one current coin
            var integerFromDivision = parseInt(currency / coins[i][1]); // converts number to integer without division
            currency -= integerFromDivision * coins[i][1]; // the remaining number of coins
            obj[coins[i][0]] = integerFromDivision; // add a key with value to the object obj 
            if (currency % coins[i][1] === 0) {
                break;
            }
        }
    }

    return obj;
}