


let myArray = [1, 2, 3, 5, 10, 20]; 
console.log('This is my array :', myArray[5]);

function testArray(arrayData) {
    console.log(' In my test function:', arrayData);


    for (let index = 0; index < arrayData.length; index++)  {
    console.log('index:', index, 'in my for loop:', arrayData[index]);
    return 'index:', 'In my for loop:', arrayData[index];
}
}

//test array
testArray(myArray);
console.log('\nsecond function:');
console.log(testArray(myArray));