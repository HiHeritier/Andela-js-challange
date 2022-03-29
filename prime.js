
function isPrime(nbr) {
    if (nbr < 2) {
        return false;
    }
    
    for (let i = 2; i < nbr; i++) {
        if (nbr % i == 0) {
            return false;
        }       
    }
    return true;
}

console.log(isPrime(17));