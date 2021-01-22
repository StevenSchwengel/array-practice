// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

  arrSunshine = [ ];
  var i;

function sun (stringA, loops)
  {
   for (i = 0; i < loops; i++)
   {
     arrSunshine.push(stringA);
  }
}

 sun ('sunshine', 3);
 console.log(arrSunshine);








// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

   arrValues = [1, 2, 3, 4, 5];
   newArray = [ ];

   function reversal()
     {
    console.log(arrValues);
    console.log((arrValues).reverse);
    var newArray = arrValues.slice().reverse();
    console.log(newArray);
     }

   reversal(arrValues);
   console.log('original');
   console.log(arrValues);







// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------



   arrFalsyToTrue = ["falsy", "truthy", "falsy", "truthy", "falsy"];
   arrWithoutFalsy = []
   const removals = 'falsy';
   var length;

    function falToTrue ()
     {
       length = arrFalsyToTrue.length;

       console.log(arrFalsyToTrue);
       {
        for (i = 0; i < length; i++)
        {
          console.log(arrFalsyToTrue[i]);
          if (arrFalsyToTrue[i] = "falsy")
            {
            arrFalsyToTrue.splice(i, 1);
            }
       }
      console.log(arrFalsyToTrue);
        return arrFalsyToTrue;
     }
     }

     falToTrue (arrFalsyToTrue);




// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------


 const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];

  function convertMyArraytoObject (myArray)
    {
     console.log(myArray);

    // Object.assign({}, ['a','b','c']); // {0:"a", 1:"b", 2:"c"}

    }

    convertMyArraytoObject(myArray);







// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------


var previousNum = null;
var initArr = [1,2,3,4,5,4,3];
var newArr = [];
var ia;
var lengtha;
var c = 0;
var removed;


  lengtha = initArr.length;
  length = initArr.length

    console.log(lengtha);


    function reduceArrayByDups (initArr)
      {
      initArr.sort();
      console.log ('initial array');
      console.log (initArr);
      for (ia = 1; ia <= lengtha + 2; ia++)
         {
         if (initArr[ia] == previousNum)
            {
            // removed = initArr.splice(ia, 1);
            initArr.splice(ia, 1);
            previousNum = initArr[ia];
            }

         console.log ('reduced duplicates from initial array');
        return initArr;
         console.log (initArr);
       }



     reduceArrayByDups (initArr);

   }


// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

cArr1 = [1,2,3,4];
cArr2 = [4,3,3,1];
cLengthArr1 = 0;
cLengthArr2 = 0;
lengthc = 0;
lengthd = 0;
ia = 1;
conditionBlownAsExact = 0;

        function sortValArr(cArr1, cArr2)
            {
            cArr1.sort();
            cArr2.sort();

            console.log(cArr1);
            console.log(cArr2);

            lengthc = length.cArr1;
            lengthd = length.cArr2;


            for (ia = 1; ia <= lengthc + 1; ia++)
               {
               if (cArr1[ia] !== cArr2[ia])
                  {
                  var conditionBlownAsExact = 'yes';
                  }
                }
                 if (conditionBlownAsExact == 'yes')
                 {
                  console.log('the arrays tested do not have same surface values');
                 }


            }

        sortValArr(cArr1, cArr2);


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------
