var customerName = 'bob';
const leastFavoriteCustomer = 'joe';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer(cus) {
    bestCustomer = cus;
}

function changeLeastFavoriteCustomer(cus) {

    leastFavoriteCustomer = cus;

}