function arithmetic(a, b, operator){
  obj = {
      'add': a+b, 
      'subtract': a-b, 
      'multiply': a*b, 
      'divide': a/b
  }
  
  return obj[operator]
}

module.exports=arithmetic;