var num = new Number(100);
var strobj = new String('Hello');
var names = ['Ram', 'Raju'];
//comma separated values
var alpha = new Array('a', 'b', 'c', 'd');
alpha[10] = 'm';
console.log(alpha[7]);
console.log(alpha.length);
var numbers = new Array(4);
for (var i = 0; i < numbers.length; i++) {
    numbers[i] = i * 10;
}
for (var j in numbers) {
    console.log(numbers[j]);
}
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var j = numbers_1[_i];
    console.log(j);
}
numbers[9] = 90;
console.log(numbers.length);
console.log(numbers[9]);
console.log(numbers[7]);
//destructuring arrays
// var nums:number[] = [10,20];
// var [a,b] = nums;
// var [a,b,c] = nums;
// var [m] = nums;
// console.log(a);
// console.log(b);
// console.log(c);//undefined
// console.log(m);
for (var j in alpha) {
    console.log(j, alpha[j]);
}
// alpha.forEach(function(value,index){
//     console.log(value,index);
// })
