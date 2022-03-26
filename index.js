const WINNING_SUM = 123.40;

/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {
  let sum = 0;
    const POW = 100;

    for ( let i = 0; i < cartItemsPrices.length; i++ ) {
        let num = Number( cartItemsPrices[i] ) * POW
        sum = sum + num
    }
    sum /= POW;

    return sum === WINNING_SUM;
}

module.exports = doesCartWinPrize;
