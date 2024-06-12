/*  Exploring Functions in JavaScript  */
/* Tasks 1 thru 3 */

function bankDeposit(account, amount) {
    if (!account || !amount){
        return "Account not valid/Amount not valid."
    }
    account += amount;
    return "Deposit successful."
}

function bankWithdrawal(account, amount) {
    if (!account || !amount) {
        return "Account not valid/Amount not valid or available"
    }
    account -= amount;
    return "Amount withdrawn successful."
}

function bankBalance(account) {
    if (!account) {
        return "Account not valid"
    }
    console.log(account);
}