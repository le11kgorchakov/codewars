
function isPrime(num) {
// number 5, if 1 x 1 != 5, 1 x 2 != 5, 1 x 3 != 5, 1 x 4 != 5, 1 x 5 = 5, then its prime
for(let i = 1; i <= num; i++){
    if(1 * i === num){
        console.log(i)
    }
  }
}

isPrime(6)