/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
    ;
}

function myFunctionArrayTest(expected, function2test) {
    if (expected.toString() === function2test().toString()) {
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
        return true;
    return false;
}

console.log("Expected output of isVowel('E') is True  " + myFunctionTest(true, function () {
    return isVowel('E');
}));

function sum(intA) {
    let tot = intA.reduce(function(total,currentValue, index,array)
    {
        return total + currentValue;
    });
    return tot;
}

console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, function () {
    return sum([1,2,3,4]);
}));

function multiply(intA) {
    let tot = intA.reduce(function(total,currentValue, index,array)
    {
        return total * currentValue;
    });
    return tot;
}

console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, function () {
    return multiply([1,2,3,4]);
}));

function reverse(str) {
    let revStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}

console.log("Expected output of reverse(\"jag testar\") is ratset gaj  " + myFunctionTest("ratset gaj", function () {
    return reverse("jag testar");
}));

function findLongestWord(arr) {
    let longestWord = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > longestWord)
            longestWord = arr[i].length;
    }
    return longestWord;
}

console.log("Expected output of findLongestWord([\"Ahmed\",\"Hassan\",\"Moustafa\",\"Elsabagh\"]) is 8  " + myFunctionTest(8, function () {
    return findLongestWord(["Ahmed","Hassan","Moustafa","Elsabagh"]);
}));

function findLongestWords(arr,len) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > len)
            newArr.push(arr[i]);
    }
    return newArr;
}

console.log("Expected output of findLongestWords([\"Ahmed\",\"Hassan\",\"Moustafa\",\"Elsabagh\"],6) is [\"Moustafa\",\"Elsabagh\"]  " + myFunctionArrayTest(["Moustafa","Elsabagh"], function () {
    return findLongestWords(["Ahmed","Hassan","Moustafa","Elsabagh"],6);
}));

const a = [1,3,5,3,3];
const b = a.map(function(elem, i, array) {
    return elem * 10;
})
console.log(b);

const c = a.filter(function(elem, i, array){
    return elem == 3;});
console.log(c);

const d = a.reduce(function(prevValue, elem, i, array){
    return prevValue * elem;
});
console.log(d);

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
console.log(d2);
console.log(d3);
