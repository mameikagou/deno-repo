Array.prototype.myMap = function(callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
  
    const result = [];
    
    for (let i = 0; i < this.length; i++) {
      if (this.hasOwnProperty(i)) {
        console.log("thisArg",thisArg)
        console.log("this[i]",this[i])
        console.log("i",i)
        console.log("this",this)
        console.log("callback.call(thisArg, this[i], i, this)",callback.call(thisArg, this[i], i, this))
        result.push(callback.call(thisArg, this[i], i, this));
      }
    }
    
    return result;
  };
  
  // 测试
  const numbers = [1, 2, 3, 4];
  const squaredNumbers = numbers.myMap((number) => number * number);
  console.log(squaredNumbers); // 输出: [1, 4, 9, 16]