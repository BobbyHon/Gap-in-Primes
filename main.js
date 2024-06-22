function gap(g, m, n) {
    let num = 0
    for (let i = m; i < n + 1; i++){
      if (isPrime(i)){
        if (i - num == g){
          return [num, i]
        }
        num = i
      }
    }
  return null
  
  
  function isPrime(n){
    for (let j = 2; j <= Math.pow(n, 1/2); j++){
      if ((n / j) % 1 == 0) return false
    }
    return true
  }
}