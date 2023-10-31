var map = function(arr, fn) {
  var l =[];
  
  for(let n =0;n<arr.lenght;n++){
        l.push(fn(n));
      }
  
  
  console.log(l);
};
map([1,2,3],function plusone(n) { return n + 1; })