/**
 * Takes a number and converted in indian currency value(comma separated value) 
 * @param {number} money 
 */
function currencyFormat(money) {
    return new Intl.NumberFormat('en-IN').format(money);
}
/**
 * calculating the maturity date based on the value date and returning DOM td element
 * @param {object} deposite user's deposite detail
 */
function calculateMaturityDate(deposite) {
    var date = deposite.valueDate;
    var plan = (deposite.type == '1 Year') ? 1 : 5;
    var maturitydate = date.slice(0, date.length - 4) + (parseInt(date.slice(date.length - 4)) + plan)
    var td = document.createElement('td');
    var text = document.createTextNode(maturitydate);
    td.appendChild(text);
    return td;
}
/**
 * Here we are calculating the estimated amount based on plan that choosed by user and amount he entered and returning DOM td element
 * @param {Array} deposite user's deposite details
 */
function calculateEstimatedAmount(deposite) {
    var estimation = parseInt(deposite['amount'].replaceAll(',', ''));
    var interest = (deposite['type'] == '1 Year') ? 6 : 5 * 6.5;
    estimation = estimation + estimation * interest / 100;
    var td = document.createElement('td');
    var text = document.createTextNode(currencyFormat(estimation));
    td.appendChild(text);
    return td;
}