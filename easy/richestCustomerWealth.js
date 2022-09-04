let maximumWealth = function(accounts) {
    let customerWealth = []
    for(customer of accounts){
        customerWealth.push(customer.reduce((a,b)=> a+b, 0))
    }
    return Math.max(...customerWealth)
};

maximumWealth([[2,8,7],[7,1,3],[1,9,5]])