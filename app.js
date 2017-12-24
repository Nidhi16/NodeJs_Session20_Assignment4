// Making Function to generate next prime number

function nextPrime(number) {
    number += 1;
    while(true) {
        var flag = false;
        for(j = 2; j < number; j++) {
            if (number % j == 0) {
                flag = true;
                break;
            }
        }

        if (flag == false) {
            break;
        }
        number++;
    }
    return number;
}

// Exporting the function
module.exports = nextPrime;