/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
    ;
}

function max(n1, n2) {
    if (n1 > n2) return n1;
    else return n2;
}

console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, function () {
    return max(20, 10);
}));

function maxOfThree(n1, n2, n3) {
    let max = n1;
    if (n2 > max) max = n2;
    if (n3 > max) max = n3;
    return max;
}

console.log("Expected output of maxOfThree(20,10,30) is 30  " + myFunctionTest(30, function () {
    return maxOfThree(20, 10, 30);
}));

function isVowel(c) {
    if(c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U')
    //if (c == ('A' || 'E' || 'I' || 'O' || 'U'))
        return true;
    return false;
}

console.log("Expected output of isVowel('E') is True  " + myFunctionTest(true, function () {
    return isVowel('E');
}));

function sum() {
    let intA = [1,2,3,4];
    let tot = intA.reduce(function(total,currentValue, index,array)
    {
        return total + currentValue;
    });
    return tot;
}

console.log("Expected output of sum() is 10  " + myFunctionTest(10, function () {
    return sum();
}));